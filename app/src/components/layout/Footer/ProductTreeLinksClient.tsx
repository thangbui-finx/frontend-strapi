"use client";
import { TYPE_LABEL } from "@/app/src/constants/typeLabelFilterBar";
import { groupProductsByType } from "@/app/src/utils/groupProductsByType";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = { products: any[] };
export default function ProductTreeLinksClient({ products }: Props) {
  const grouped = groupProductsByType(products);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (type: string) =>
    setOpen((prev) => ({ ...prev, [type]: !prev[type] }));
  return (
    <div className="grid grid-cols-3 gap-6">
      {Object.keys(TYPE_LABEL).map((type) => {
        const list = grouped[type] ?? [];
        if (!list.length) return null;
        const ids = list.map((p: any) => p.id).join(",");
        return (
          <div key={type} className="pb-3">
            <button
              onClick={() => toggle(type)}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium text-white ">
                  {TYPE_LABEL[type]}
                </span>
              </div>
              <div>
                {open[type] ? (
                  <Minus className="w-4 h-4 text-white" />
                ) : (
                  <Plus className="w-4 h-4 text-white" />
                )}
              </div>
            </button>
            {open[type] && (
              <ul className="mt-2 space-y-2">
                {list.map((product: any) => (
                  <li key={product.id}>
                    <Link
                      href={""}
                      className="text-white text-sm"
                      scroll={false}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
