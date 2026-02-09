import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowDown, ArrowRight, ChevronDown } from "lucide-react";
import Banner from "./Banner";

export default function Footer() {
  return (
    <div>
      <div className=" grid grid-cols-3 p-4 inset-0 banner-gradient px-20">
        <div className="">
          <img
            src="/phoneVikki.png
        
        "
            alt="phoneVikki"
            className="w-70 h-80"
          />
        </div>
        <div className="flex flex-col  justify-center gap-6">
          <h3 className="text-3xl font-sans text-white font-extrabold">
            Tận hưởng
            <br />
            Ngân hàng số Vikki
          </h3>
          <div className="text-white  text-md">
            01 phút mở tài khoản, ngàn đặc quyền đang chờ bạn!
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="">
            <img src="/qrVikki.png" alt="" className="h-30 w-30" />
          </div>
          <div className="flex flex-col gap-4">
            <img src="/appstoreVikki.png" alt="" className="h-12 w-25" />
            <img src="/ggplayVikki.png" alt="" className="h-12 w-25" />
          </div>
        </div>
        <br />
        {/*  <Button className="w-[30%] h-[55%] p-4 flex justify-between">
          <span className="text-lg">Liên hệ ngay</span>
          <ArrowRight className="w-5 h-5" />
        </Button> */}
      </div>

      <footer className="bg-[#313131] p-5 ">
        <div className="flex justify-between p-10">
          <div>
            <img src="/logoFooter.png" alt="Footer Logo" className="h-8 w-50" />
          </div>
          <div className="flex flex-col  items-end">
            <span className="text-white flex gap-2">
              Liên kết khác
              <ChevronDown />
            </span>
            <span className="text-gray-400 mt-6">
              Kết nối với Techcombank nhiều hơn tại đây
            </span>
            <div className="flex gap-5 mt-2">
              <div>
                <img src="/iconFB.svg" alt="iconFB" className="w-6 h-6" />
              </div>
              <div>
                <img src="/iconIN.svg" alt="iconIN" className="w-6 h-6" />
              </div>
              <div>
                <img src="/iconYTB.svg" alt="iconYTB" className="w-6 h-6" />
              </div>
              <div>
                <img src="/iconZL.svg" alt="iconZL" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="pr-10 pl-10 ">
          <hr />
        </div>
        <div className="border-t-[#a2a2a2] text-gray-400 flex gap-2 p-10">
          <p>
            Bản quyền © 2025 thuộc về Ngân hàng Thương mại cổ phần Kỹ thương
            Việt Nam
          </p>
          <a href="">Điều khoản & Điều kiện</a>
          <a href="">Quyền riêng tư dữ liệu</a>
          <p>
            ☎ KH Cá nhân: 1800 588 822 (trong nước) - 84 24 3944 6699 (nước
            ngoài)
          </p>
          <p>
            ☎ KH Doanh nghiệp: 1800 6556 (trong nước) - 84 24 7303 6556 (nước
            ngoài)
          </p>
        </div>
      </footer>
    </div>
  );
}
