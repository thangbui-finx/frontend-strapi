import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  promotion: any;
};

export default function PromotionCard({ promotion }: Props) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { title, register_deadline, partners } = promotion;

  const formatRegisterDeadline = new Date(register_deadline).toLocaleDateString(
    "vi-VN",
  );
  const thumbnail = promotion.thumbnail?.url;
  const typeCard = promotion.products.map((p: any) => p.type);
  return (
    <div className="bg-white rounded-lg">
      <img src={`${API_URL}${thumbnail}`} alt="" className="h-50 w-70" />
      <div className="flex  flex-col p-4 gap-4 py-6">
        <span className="text-red-500 font-semibold">{typeCard[0]}</span>
        <h4 className="font-bold">{partners[0]?.name}</h4>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-500">Kết thúc: {formatRegisterDeadline}</p>
        <a href="" className="flex gap-2 font-semibold hover:text-red-600">
          Xem chi tiết <ArrowRight />
        </a>
      </div>
    </div>
  );
}
