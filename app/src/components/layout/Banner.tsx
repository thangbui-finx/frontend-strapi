"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Banner({ banners }: any) {
  const list = banners ?? [];
  return (
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
              <img src={imageUrl} alt="" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
