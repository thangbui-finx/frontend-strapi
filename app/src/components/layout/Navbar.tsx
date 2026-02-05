import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const NavbarItems = [
  {
    label: "Chi tiêu",
    href: "/",
  },
  {
    label: "Tiết kiệm",
    href: "/",
  },
  {
    label: "Vay",
    href: "/",
  },
  {
    label: "Đầu tư",
    href: "/",
  },
  {
    label: "Bảo hiểm",
    href: "/",
  },
  {
    label: "Ưu đãi",
    href: "/",
  },
];
export default function Navbar() {
  return (
    <header className="flex gap-30  items-center justify-around">
      <div className="text-lg">
        <img src="/logo.svg" alt="" className="h-20 w-60 ml-15 " />
      </div>
      <nav className="">
        <ul className="flex gap-6">
          {NavbarItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-lg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        variant={"outline"}
        className="bg-red-500 h-15 text-white font-extrabold text-xl"
      >
        Đăng nhập
        <ArrowRight />
      </Button>
    </header>
  );
}
