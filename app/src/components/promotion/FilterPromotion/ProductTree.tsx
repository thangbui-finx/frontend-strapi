import { TYPE_LABEL } from "@/app/src/constants/typeLabelFilterBar";
import { groupProductsByType } from "@/app/src/utils/groupProductsByType";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
type Props = {
  products: any[];
  selectedValues: string[];
  onToggle: (id: number) => void;
};
export default function ProductTree({
  products,
  selectedValues,
  onToggle,
}: Props) {
  const grouped = groupProductsByType(products);
  const [openTypes, setOpenTypes] = useState<Record<string, boolean>>({});
  const toggle = (type: string) => {
    setOpenTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  return (
    <div className="w-full space-y-2 pl-3">
      {Object.keys(TYPE_LABEL).map((type) => (
        <div key={type} className="">
          <button
            onClick={() => toggle(type)}
            className="flex items-center mb-4 justify-between w-full font-medium text-left"
          >
            <div className="flex items-center justify-between w-full  "> 
              <span className="flex items-center justify-center gap-3 text-md text-gray-500">
                <input
                  type="checkbox"
                  checked={selectedValues.includes(String(type.id))}
                  onChange={() => onToggle(type.id)}
                  className="w-6 h-5  border-none cursor-pointer"
                />
                {TYPE_LABEL[type]}
              </span>
              {openTypes[type] ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </div>
          </button>
          {openTypes[type] && (
            <ul>
              {grouped[type]?.map((product: any) => (
                <li
                  key={product.id}
                  className="flex justify-center items-center gap-3 cursor-pointer text-sm text-gray-600 hover:text-black"
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
