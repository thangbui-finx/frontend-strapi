"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
export default function Banner({ banners }: any) {
  const list = banners ?? [];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full overflow-hidden"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {list.map((item: any) => {
          const imageUrl = process.env.NEXT_PUBLIC_API_URL + item.image.url;
          return (
            <SwiperSlide key={item.id}>
              <div className="relative">
                <img src={imageUrl} alt="" className="object-cover" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
