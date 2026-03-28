"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Estoque", href: "/estoque", icon: "directions_car" },
  { label: "Contato", href: "/contato", icon: "contact_support" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-[0_-8px_30px_rgb(0,0,0,0.06)] z-50 rounded-t-3xl">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform duration-150 rounded-2xl ${
              isActive
                ? "bg-yellow-400 text-blue-900 scale-110 shadow-lg"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[10px] font-medium font-body">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
