"use client";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  items: any[];
};
const QUERY_KEY: Record<string, string> = {
  "Phân loại": "categories",
  "Nhóm khách hàng": "customer_groups",
  "Địa điểm": "locations",
  "Đối tác": "partners",
};

export default function FilterGroup({ title, items }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsKey = QUERY_KEY[title];
  const selectedValues = searchParams.get(paramsKey)?.split(",") ?? [];
  const value = searchParams.get(paramsKey) ?? "";

  function toggleCheckbox(id: number) {
    let next = [...selectedValues];
    if (next.includes(String(id))) {
      next = next.filter((x) => x !== String(id));
    } else {
      next.push(String(id));
    }
    const params = new URLSearchParams(searchParams.toString());
    if (next.length) {
      params.set(paramsKey, next.join(","));
    } else {
      params.delete(paramsKey);
    }
    router.push(`/?${params.toString()}`);
  }
  return (
    <div className="flex flex-col justify-center mb-4">
      <h4 className="font-semibold mb-7">
        {title}
        <hr />
      </h4>
      {title !== "Địa điểm" && title !== "Đối tác" ? (
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <label key={item.id} htmlFor="" className="flex gap-3 items-center">
              <input
                type="checkbox"
                checked={selectedValues.includes(String(item.id))}
                onChange={() => toggleCheckbox(item.id)}
                className="w-6 h-5  border-none cursor-pointer"
              />
              <span className="text-md text-gray-500 cursor-pointer">
                {item.name}
              </span>
            </label>
          ))}
        </div>
      ) : (
        <Combobox items={items} value={value}>
          <ComboboxInput
            placeholder={`Chọn ${title.toLowerCase()} `}
            className="bg-white h-14 text-md "
            value={value}
            readOnly
          />
          <ComboboxContent>
            <ComboboxEmpty>Không có địa điểm phù hợp</ComboboxEmpty>
            <ComboboxList>
              {items.map((item) => (
                <ComboboxItem
                  key={item.id}
                  value={item.name}
                  onSelect={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set(paramsKey, item.id.toString());
                    router.push(`/?${params.toString()}`);
                  }}
                  className="text-md border-b border-gray-200
                    last:border-b-0 h-16 rounded-b-none hover:font-bold hover:scale-100 cursor-pointer
                    "
                >
                  {item.name}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      )}
    </div>
  );
}
