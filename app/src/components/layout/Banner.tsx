export default function Banner() {
  return (
    <div className="relative w-full">
      <img
        src="/banner.jpg"
        alt="banner"
        className="w-full h-100 object-cover"
      />
      {/* <div className="absolute inset-0 bg-black/20" /> */}
      <div className="absolute inset-0 flex justify-center flex-col gap-6 p-16">
        <h1 className="text-3xl">Ưu đãi dành cho khách hàng cá nhân</h1>
        <div className="w-[65%] text-gray-500">
          <p className="text-2xl">
            Khám phá ưu đãi hấp dẫn chỉ dành cho bạn, tận hưởng nhiều giá trị
            hơn mỗi ngày.
          </p>
        </div>
      </div>
    </div>
  );
}
