import { TYPE_LABEL } from "@/app/src/constants/typeLabelFilterBar";
import { groupProductsByType } from "@/app/src/utils/groupProductsByType";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
type Props = {
  products: any[];
  selectedValues: string[];
  onToggle: (id: number) => void;
  onToggleMany?: (ids: number[], select: boolean) => void;
};
export default function ProductTree({
  products,
  selectedValues,
  onToggle,
  onToggleMany,
}: Props) {
  const grouped = groupProductsByType(products);
  const [openTypes, setOpenTypes] = useState<Record<string, boolean>>({});
  const toggle = (type: string) => {
    setOpenTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  const toggleTypeGroup = (type: string) => {
    const typeProducts = grouped[type] ?? [];
    const allSelected = typeProducts.every((p: any) =>
      selectedValues.includes(String(p.id)),
    );
    if (onToggleMany) {
      if (allSelected) {
        onToggleMany(
          typeProducts.map((p: any) => p.id),
          false,
        );
      } else {
        const idsToSelect = typeProducts
          .filter((p: any) => !selectedValues.includes(String(p.id)))
          .map((p: any) => p.id);
        onToggleMany(idsToSelect, true);
      }
      return;
    }
    typeProducts.forEach((p: any) => {
      const isSelected = selectedValues.includes(String(p.id));
      if (allSelected && isSelected) onToggle(p.id);
      if (!allSelected && !isSelected) onToggle(p.id);
    });
  };
  return (
    <div className="flex flex-col w-full space-y-2 gap-2">
      {Object.keys(TYPE_LABEL).map((type) => (
        <div key={type} className="">
          <div className="flex gap-2 justify-center  items-center">
            <input
              type="checkbox"
              checked={
                (grouped[type] ?? []).length > 0 &&
                (grouped[type] ?? []).every((p: any) =>
                  selectedValues.includes(String(p.id)),
                )
              }
              onChange={() => toggleTypeGroup(type)}
              className="w-6 h-5  border-none cursor-pointer"
            />
            <button
              onClick={() => toggle(type)}
              className=" w-full font-medium "
            >
              <div className="flex items-center justify-between w-full  ">
                <span className="flex items-center justify-center gap-3 text-md text-gray-500">
                  {TYPE_LABEL[type]}
                </span>
                {openTypes[type] ? (
                  <Minus className="w-4 h-4 cursor-pointer" />
                ) : (
                  <Plus className="w-4 h-4 cursor-pointer" />
                )}
              </div>
            </button>
          </div>

          {openTypes[type] && (
            <ul className="pl-6 w-full mt-4 ">
              {grouped[type]?.map((product: any) => (
                <li
                  key={product.id}
                  className="flex items-center gap-3 cursor-pointer mt-3 text-sm text-gray-600 hover:text-black"
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(String(product.id))}
                    onChange={() => onToggle(product.id)}
                    className="w-6 h-5  border-none cursor-pointer"
                  />
                  <span className="text-md text-gray-500 cursor-pointer">
                    {product.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
