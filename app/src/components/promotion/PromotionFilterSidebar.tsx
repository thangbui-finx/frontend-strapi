import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PromotionFilterSidebar() {
  return (
    <aside className="flex gap-10 flex-col">
      <div className="flex gap-6 flex-col justify-center">
        <h3 className="font-bold">
          Sản phẩm
          <hr />
        </h3>

        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Thẻ tín
          dụng
        </Label>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Thẻ
          thanh toán
        </Label>
      </div>
      <div className="flex gap-6 flex-col">
        <h3 className="font-bold">
          Nhóm khách hàng
          <hr />
        </h3>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Tất cả
          khách hàng
        </Label>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" />
          Hộ kinh doanh
        </Label>
      </div>
      <div className="flex gap-6 flex-col">
        <h3 className="font-bold">
          Phân loại
          <hr />
        </h3>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Ăn uống
        </Label>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Mua sắm
        </Label>
      </div>
      <div className="flex gap-6 flex-col">
        <h3 className="font-bold">
          Đối tác
          <hr />
        </h3>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> CGV
        </Label>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Apple
          Pay
        </Label>
      </div>
      <div className="flex gap-6 flex-col">
        <h3 className="font-bold">
          Địa điểm
          <hr />
        </h3>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Hồ Chí
          Minh
        </Label>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Hà Nội
        </Label>
      </div>
      <div className="flex gap-6 flex-col">
        <h3 className="font-bold">
          Nhóm khách hàng
          <hr />
        </h3>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Tất cả
          khách hàng
        </Label>
        <Label className="cursor-pointer text-md">
          <input type="checkbox" className="h-10 w-6 cursor-pointer" /> Hộ kinh
          doanh
        </Label>
      </div>
    </aside>
  );
}
