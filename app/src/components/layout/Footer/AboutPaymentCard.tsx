"use client";
import { motion } from "framer-motion";
export default function AboutPaymentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col items-center mt-10"
    >
      <h1 className="font-bold text-2xl md:text-3xl  xl:text-3xl">
        Thẻ thanh toán VikkiGO có gì?
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 md:px-6 md:py-2 xl:grid-cols-3 w-full mt-4">
        <div className="flex flex-col items-center justify-center ">
          <img src="/p1About.png" alt="thu-tuc" />
          <h2 className="font-bold text-2xl">Thủ tục đơn giản</h2>
          <p className="md:text-lg md:text-center">
            Mở thẻ thanh toán VikkiGO chỉ với CCCD
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/p2About.png" alt="online-free" />
          <h2 className="font-bold text-2xl">Hoàn toàn online</h2>
          <p className="md:text-lg md:text-center">
            Thao tác ngay trên ứng dụng Vikki
          </p>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <img src="/p3About.png" alt="" />
          <h2 className="font-bold text-2xl">Miễn phí rút tiền</h2>
          <p className="md:text-lg md:text-center">
            Thẻ phi vật lý sử dụng thanh toán online
          </p>
        </div>
      </div>
    </motion.div>
  );
}
