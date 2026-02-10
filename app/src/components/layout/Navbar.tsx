"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const NavbarItems = [
  {
    label: "Khách hàng cá nhân",
    href: "/invidual-customer",
  },
  {
    label: "Khách hàng doanh nghiệp",
    href: "/business-customer",
  },
  {
    label: "Ưu đãi",
    href: "/promotions",
  },
  {
    label: "Về Vikki",
    href: "/about-vikki",
  },
  {
    label: "Tin tức",
    href: "/news",
  },
];
export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };
  return (
    <header className=" gap-30 sticky top-0 z-50 bg-white border-b">
      <div className="hidden  xl:flex items-center justify-between px-8 h-22">
        <img
          src="/logoVikki.jpg"
          alt=""
          className="h-20 w-60 ml-15 object-cover cursor-pointer"
          onClick={() => router.push("/")}
        />

        <nav>
          <ul className="flex gap-8">
            {NavbarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-md ${isActive ? "text-red-600 font-semibold" : "text-gray-700"}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button
          variant={"outline"}
          className="banner-gradient h-10 text-white rounded-3xl mr-2 font-extrabold text-sm"
        >
          Đăng nhập eBanking
          <ArrowRight />
        </Button>
      </div>

      {/* Mobile */}
      <div className="xl:hidden flex items-center justify-between px-4 h-14">
        <img
          src="/logoVikki.jpg"
          className="h-8 cursor-pointer"
          onClick={() => router.push("/")}
        />
        <button onClick={() => setOpen(true)} className="cursor-pointer">
          <Menu />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 bg-black/40 xl:hidden "
            onClick={() => setOpen(false)}
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full md:w-2/5 w-3/5 bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <img
                  src="/logoVikki.jpg"
                  alt="Vikki"
                  className="h-8 cursor-pointer"
                  onClick={() => router.push("/")}
                />
                <button onClick={() => setOpen(false)}>
                  <X className="cursor-pointer" />
                </button>
              </div>
              <nav>
                <ul className="flex flex-col gap-4">
                  {NavbarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.label} className="w-full">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`block py-2 text-base cursor-pointer hover:scale-105 transition-transform ${
                            isActive
                              ? "text-red-600 font-semibold"
                              : "text-gray-800"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <button className=" flex banner-gradient justify-center items-center rounded-3xl text-white w-full mt-8 h-10 cursor-pointer hover:scale-105 transition-transform ">
                Đăng nhập eBanking
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
