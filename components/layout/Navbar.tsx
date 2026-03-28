"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Estoque", href: "/estoque" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black text-blue-800 dark:text-blue-300 tracking-tighter font-headline"
        >
          FQS Veículos
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-blue-700 dark:text-blue-400 border-b-2 border-yellow-400 pb-1 font-headline font-bold tracking-tight"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 font-headline font-bold tracking-tight hover:scale-105 transition-all duration-200"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all active:scale-95 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-sm">chat</span>
            WhatsApp
          </button>
        </div>
      </div>
    </nav>
  );
}
