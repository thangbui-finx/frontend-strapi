import { Input } from "@/components/ui/input";
import PromotionCard from "./PromotionCard";

type Props = {
  promotions: any[] | undefined;
};
export default function PromotionList({ promotions }: Props) {
  console.log("data là: ", promotions);
  return (
    <section className="flex flex-col gap-6">
      <Input
        type="text"
        placeholder="Tìm kiếm ưu đãi"
        className="h-14 bg-white"
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
