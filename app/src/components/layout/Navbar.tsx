import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const NavbarItems = [
  {
    label: "Khách hàng cá nhân",
    href: "/",
  },
  {
    label: "Khách hàng doanh nghiệp",
    href: "/",
  },
  {
    label: "Ưu đãi",
    href: "/",
  },
  {
    label: "Về Vikki",
    href: "/",
  },
  {
    label: "Tin tức",
    href: "/",
  },
];
export default function Navbar() {
  return (
    <header className="flex gap-30 sticky top-0 z-50 bg-white  items-center justify-around">
      <div className="text-lg">
        <img src="/logoVikki.jpg" alt="" className="h-23 w-60 ml-15 " />
      </div>
      <nav className="">
        <ul className="flex gap-8">
          {NavbarItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-md">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        variant={"outline"}
        className="banner-gradient h-10 text-white rounded-3xl mr-2 font-extrabold text-sm"
      >
        Đăng nhập eBanking
        <ArrowRight />
      </Button>
    </header>
  );
}
