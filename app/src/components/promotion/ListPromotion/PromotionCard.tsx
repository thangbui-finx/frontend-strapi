import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{type: "spring", stiffness:300}}>
      <div className="rounded-lg banner-gradient">
        <div className="p-2 flex justify-center items-center">
          <img
            src={`${API_URL}${thumbnail}`}
            alt=""
            className="rounded-md h-50 w-full"
          />
        </div>

        <div className="flex flex-col p-4 gap-3 py-5">
          <span className="text-red-500 font-semibold">{typeCard[0]}</span>
          <h4 className="font-bold bg-amber-500 text-white w-[40%] rounded-md text-center">
            {partners[0]?.name}
          </h4>
          <p className="text-white">{title}</p>
          <p className="text-red-500">Kết thúc: {formatRegisterDeadline}</p>
          <a
            href=""
            className="flex gap-2 font-semibold text-white  hover:text-red-600"
          >
            Xem chi tiết <ArrowRight />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
