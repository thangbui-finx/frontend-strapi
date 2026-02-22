"use client";
import { Input } from "@/components/ui/input";
import PromotionCard from "./PromotionCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
  promotions: any[] | undefined;
  meta?: any;
};
export default function PromotionList({ promotions, meta }: Props) {
  console.log("data promo", promotions);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("search") ?? "");
  const listRef = useRef<HTMLDivElement | null>(null);
  const currentPage = Number(searchParams.get("page") ?? "1");
  const totalPages = meta?.pagination?.pageCount ?? 1;
  const totalItems = meta?.pagination?.total ?? 0;
  const isFirstRender = useRef(true);
  const [parent] = useAutoAnimate({
    duration: 250,
    easing: "ease-out",
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentPage]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (keyword) {
        params.set("search", keyword);
        params.set("page", "1");
      } else {
        params.delete("search");
        params.delete("page");
      }
      router.push(`/promotions?${params.toString()}`, { scroll: false });
    }, 400);
    return () => clearTimeout(timeout);
  }, [keyword]);

  const gotoPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    router.push(`promotions?${params.toString()}`, { scroll: false });
  };
  return (
    <section ref={listRef} className="flex flex-col gap-6">
      <Input
        type="text"
        placeholder="Tìm kiếm ưu đãi"
        className="h-14 bg-white"
        onChange={(e) => setKeyword(e.target.value)}
      />

      <span>
        Có <strong>{promotions?.length ?? 0}</strong> ưu đãi:{" "}
      </span>

      <div ref={parent} className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
        {promotions?.map((item) => (
          <PromotionCard key={item.id} promotion={item} />
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">Tổng {totalItems} ưu đãi</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => gotoPage(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-3 py-1 rounded border disabled:opacity-50 cursor-pointer"
          >
            Trước
          </button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                onClick={() => gotoPage(p)}
                className={`px-3 py-1 cursor-pointer rounded border ${p === currentPage ? "font-bold bg-gray-100" : ""} `}
              >
                {p}
              </button>
            );
          })}
          <button
            onClick={() => gotoPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="px-3 py-1 rounded border disabled:opacity-50 cursor-pointer"
          >
            Sau
          </button>
        </div>
      </div>
    </section>
  );
}
