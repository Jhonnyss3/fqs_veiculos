import Navbar from "@/components/layout/Navbar";
import FooterSimple from "@/components/layout/FooterSimple";
import MobileNav from "@/components/layout/MobileNav";
import CatalogHeader from "@/components/estoque/CatalogHeader";
import FilterSidebar from "@/components/estoque/FilterSidebar";
import VehicleCard from "@/components/estoque/VehicleCard";
import Pagination from "@/components/estoque/Pagination";

const vehicles = [
  {
    name: "BMW M3 Competition",
    year: "2024",
    km: "2.400",
    transmission: "Automático",
    price: "R$ 789.900",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBitkr_LI0salQIjDPPmxuTJibIpSx4r9rnatdRANDsbihspqFhDP-u4urvJG5LyWaOFSeHGPvm6WzrKpeQhqXn57OpE5x93yveQHsSOafY2WETqDEaOsDmHxVmBQuvHwB4WGt5RujX50FIupWHhrm3M3Y0CV0RYDDaK7RJGuA0Xzn9G6RiUqtJqy7eXI1fYc79caqKWesESE5GdWghpBf7pjn77LBb0lkVHdg5kLZvyaa1emsuuIac7nqBhNO-Pjx3V7XolHyl4w4",
    imageAlt: "BMW M3 Competition cinza escuro em showroom minimalista",
    badge: "Destaque",
    badgeVariant: "secondary" as const,
  },
  {
    name: "Porsche Macan GTS",
    year: "2023",
    km: "12.800",
    transmission: "PDK",
    price: "R$ 645.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJeby5yqMl0UPYd6JIfrqVj0IgzjIycqnKZUXk-jd_uhtAPzrYx8tr5VonZsCadej1-cl2q5EI5f18uDxYMr4D-ZOpHb9zCsnraO7Mnk1utEuSlPcVzdnqkK6nNGz93VtRJiu4THYkuH6A68KmQ6NuMgBoPkKn2qov-QlDJMuTYdveCcSQ9o5UewzTcuRKqdIW5ZbE60788cA9UqYMOhvOaIBgjYvhogS_PcMKf4_pm5gURNWfVuoz0rLKVXC8y8Al99-F093Yij0",
    imageAlt: "Porsche Macan GTS branco em estrada costeira ao pôr do sol",
  },
  {
    name: "Audi RS6 Avant",
    year: "2024",
    km: "0",
    transmission: "Tiptronic",
    price: "R$ 1.150.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsRfDRXezkiZhmvv72IKhg7JXdeOC2qllmCyvBNjUKjMUAqtrl5PbXuE2HLXoZyipNb7hH1eIeX15NB1oLdxz4J_zSx1At014QMeRlKyirG_BPiOI9BudosZ0Jn8QLXlkfawy537vq6RxfYNJ7hEJCpew05xV5hpIxiuY3dUGjbcZj04-heY4wuQqQIcB4GI7OpYIe_PK5yBDb7oRCgc4WPO0ekaT6JNq07lXSvZN7f6K0D8T48sUd2hYxyqhoSL8dl_4HUnDcfxs",
    imageAlt: "Audi RS6 Avant vermelho em estúdio escuro com iluminação neon",
    badge: "Novidade",
    badgeVariant: "primary" as const,
  },
  {
    name: "Range Rover Sport",
    year: "2022",
    km: "34.000",
    transmission: "Automático",
    price: "R$ 512.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEX6xJPWyFbqLiqPzeMuwA79fbSOPb78rvdsajTyfciayF31gCSCGeZkGLzdn_vNtEgN7BTiYwWx-H61oN1tXT2peguBTqsPCSnsCMoux4-7mCaobe_WfUIOACuWQXzuxO6RxmNlZ_lAZMRzUzoD9Sbj3ZNJMTtfDoxbgfTfeNJrJ4XdTZMxraEVJ-jn0lnYhTniPgAkuGv2kGIfevKsY1X1XMKqw_8As5p_0b_jKVzWirwCXesbw69mWQNiVnteDwy0x-HYmzjLI",
    imageAlt: "Range Rover Sport azul metálico em estrada alpina com montanhas",
  },
  {
    name: "Mercedes-AMG GT",
    year: "2021",
    km: "18.500",
    transmission: "Speedshift",
    price: "R$ 940.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiKb3xiOa2USVvH1a_pAKjFJ7RuSEdr3zMKhwRuojr93KWW1wlQBycF0GBifdv-DICi9vDVP21BIy2jbvIvfwsOk0vlex0ms6B5uFM9Owymhq0tZ6x13LdZHmRLoYYMBgiPCtMsZolk27MZGzhylDF28_WDy2LpJsUJs_egYQM4cPqEqYXPA-2moAkaZoHgfbiyTF-M_ppmHMX1N7j2CcEc9LGD1sqGD8LOkK4b7P0U-zOH2z6X-aVvB2UCxxo69ZQKNVqutaFIh8",
    imageAlt: "Mercedes-AMG GT amarelo em estrada no deserto",
  },
  {
    name: "BMW X5 M60i",
    year: "2024",
    km: "0",
    transmission: "Automático",
    price: "R$ 829.900",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTX5dezN6h0jjuupO0ozTo8ejMp9SXHCbGFH_ulCHWhcsiH8qEIjaolYzua2lDI0bb8KA-BJog6tg_SqfoAAegW79xmB-DdhPMM7be5-pMSWVhMsyqj9C-xMoCjzw3pCoQPynWKLPiVUK4PYDme_IeG_-Xw_kCtG0JX0dc07mzVIHy-KX-wseStLA5p7t7TOXh_kOb-gdmHN7ALAQiST98CNCcHPozlNMT6-vLVbocu6TQRXtcH3hhOvhEfSx0mJycAgfYsr7kLtM",
    imageAlt: "BMW X5 M60i prata em garagem high-tech",
  },
];

export default function EstoquePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        <CatalogHeader />
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <FilterSidebar />
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {vehicles.map((v) => (
                <VehicleCard key={v.name} {...v} />
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </main>
      <FooterSimple />
      <MobileNav />
    </>
  );
}
