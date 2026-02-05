import { Input } from "@/components/ui/input";
import PromotionCard from "./PromotionCard";

export default function PromotionList() {
  return (
    <section className="flex flex-col gap-6">
      <Input
        type="text"
        placeholder="Tìm kiếm ưu đãi"
        className="h-14 bg-white"
      />
      <span>
        Có <strong>50</strong> ưu đãi:{" "}
      </span>
      <div className="grid grid-cols-3 gap-6">
        <PromotionCard />
        <PromotionCard />
        <PromotionCard />
      </div>
    </section>
  );
}
