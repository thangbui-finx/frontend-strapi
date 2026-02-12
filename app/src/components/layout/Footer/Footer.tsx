import getProducts from "@/app/src/apis/promotion/getProducts";
import ProductTreeLinksClient from "./ProductTreeLinksClient";
import { motion } from "framer-motion";
import HotlineShake from "./HotlineShake";

export default async function Footer() {
  const products = await getProducts();
  return (
    <div>
      <div className=" grid grid-cols-3 xl:p-4 py-1 items-center md:px-15 md:p-6 inset-0 banner-gradient xl:px-20">
        <div>
          <img
            src="/phoneVikki.png
        
        "
            alt="phoneVikki"
            className=" h-25 w-25 md:w-45 md:h-45 mt-2 ml-2 xl:w-70 xl:h-80"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 xl:gap-6">
          <h3 className="xl:text-3xl text-xs md:text-2xl  font-sans text-white font-extrabold">
            Tận hưởng
            <br />
            Ngân hàng số Vikki
          </h3>
          <div className="text-white md:text-xl  xl:text-md text-xs">
            01 phút mở tài khoản, ngàn đặc quyền đang chờ bạn!
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 xl:gap-6">
          <div className="">
            <img
              src="/qrVikki.png"
              alt=""
              className="h-10 w-10 md:h-20 md:w-20 xl:h-30 xl:w-30"
            />
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <img
              src="/appstoreVikki.png"
              alt=""
              className="h-5 w-10 xl:h-12 xl:w-25 md:h-10 md:w-20"
            />
            <img
              src="/ggplayVikki.png"
              alt=""
              className="h-5 w-10 xl:h-12 xl:w-25 md:h-10 md:w-20"
            />
          </div>
        </div>
        <br />
        {/*  <Button className="w-[30%] h-[55%] p-4 flex justify-between">
          <span className="text-lg">Liên hệ ngay</span>
          <ArrowRight className="w-5 h-5" />
        </Button> */}
      </div>

      <footer className="banner-gradient p-5 mt-20 ">
        <div className="grid grid-cols-5 p-4 ">
          <div className="col-span-1 ml-4">
            <img
              src="/logo-footer.png"
              alt="Footer Logo"
              className="h-20 w-45"
            />
            <HotlineShake />
            <p className="text-white text-xs mt-10">
              Email: <br />
              <a href="mailto:19006608@vikkibank.vn">19006608@vikkibank.vn</a>
              <br />
              Địa chỉ: 72 Lý Thường Kiệt, phường Cửa Nam, Thành phố Hà Nội, Việt
              Nam
            </p>
          </div>
          <div className="col-span-3">
            <ProductTreeLinksClient products={products} />
          </div>
          <div className="flex flex-col col-span-1 p-2 gap-3">
            <span className="text-white flex gap-2 text-sm font-bold">
              Tải ứng dụng Vikki
            </span>
            <span className="text-white  text-sm">
              01 phút mở tài khoản, ngàn đặc quyền đang chờ bạn!
            </span>
            <div className="flex gap-5 mt-2">
              <div className="">
                <img
                  src="/qrVikki.png"
                  alt=""
                  className="h-10 w-10 md:h-10 md:w-20 xl:h-20 xl:w-20"
                />
              </div>
              <div className="flex flex-col gap-2 xl:gap-4">
                <img
                  src="/appstoreVikki.png"
                  alt=""
                  className="h-5 w-10 xl:h-7 xl:w-25 md:h-10 md:w-20"
                />
                <img
                  src="/ggplayVikki.png"
                  alt=""
                  className="h-5 w-10 xl:h-7 xl:w-25 md:h-10 md:w-20"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="text-white flex mt-5 text-xs ml-8">
          <p>© Copyright 2025 - Ngân hàng Số Vikki</p>
        </div>
      </footer>
    </div>
  );
}
