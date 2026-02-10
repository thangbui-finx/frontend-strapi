"use client";

import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};
export default function PromotionFilterMobile({ children }: Props) {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="px-4 sm:px-6 lg:hidden">
      <button
        onClick={() => setOpenFilter(true)}
        className="w-full text-white font-bold rounded-lg banner-gradient border px-4 py-2 shadow-sm"
      >
        Bộ lọc khuyến mãi
      </button>
      {openFilter && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden ">
          <div className="absolute left-0 top-0 w-4/5 bg-white h-full p-4 overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Bộ lọc </h2>
              <button onClick={() => setOpenFilter(false)}>x</button>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
