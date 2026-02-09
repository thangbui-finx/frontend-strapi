"use client";
import { Input } from "@/components/ui/input";
import PromotionCard from "./PromotionCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  promotions: any[] | undefined;
};
export default function PromotionList({ promotions }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("search") ?? "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (keyword) {
        params.set("search", keyword);
      } else {
        params.delete("search");
      }
      router.push(`?${params.toString()}`, { scroll: false });
    }, 400);
    return () => clearTimeout(timeout);
  }, [keyword]);
  return (
    <section className="flex flex-col gap-6">
      <Input
        type="text"
        placeholder="Tìm kiếm ưu đãi"
        className="h-14 bg-white"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <span>
        Có <strong>{promotions?.length ?? 0}</strong> ưu đãi:{" "}
      </span>
      <div className="grid grid-cols-3 gap-6">
        {promotions?.map((item) => (
          <PromotionCard key={item.id} promotion={item} />
        ))}
      </div>
    </section>
  );
}
