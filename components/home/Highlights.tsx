import CarCard from "@/components/ui/CarCard";

const cars = [
  {
    name: "Porsche Taycan 4S",
    year: "2023",
    fuel: "Elétrico",
    price: "R$ 849.000",
    acceleration: "4.0s",
    power: "530cv",
    km: "1.200",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbhCFAozVvVYbrG8f1rb4cGGFr83WbqhiqDSbxQrQKtIntRx-OaRRZc6eY1iLozrzWaVSsHrdBaqdT-DZAYJDum8ReCWmUeNjE4irdq_l_Kb2uoPYUMczT7QkJMLigfa-_xtkImsWn3LxNxS0mh5bVXQ5lmN1cuvtcrBk8eB_vTmUqtX4DTz_ZUxfH_k3ewBrpTMoLSI88zuE0Qh7E9PTJJUhSKgrJYKKGgK1G9SdqxlPdtkBwPDf8mBpg--Ho0n7eeuWWQKsTOew",
    imageAlt: "Porsche Taycan 4S elétrico em estúdio branco",
    badge: "NOVO",
  },
  {
    name: "BMW X5 M60i",
    year: "2024",
    fuel: "Híbrido",
    price: "R$ 755.950",
    acceleration: "4.3s",
    power: "530cv",
    km: "0",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmiSWm8U5_L0wknJSUTLLoH8kpaTKbYmo3tmasm3UlWZrdF4XqEOZ1zbQE1A1hNN1bbQckmdgmBLVFwAXfevwfBNavSKVNNjjbcADXc69EcqWkIKdSvNs3Kd4UWqUjpsu9065jGwn0XP-DqE7u9JeCgnFgwcg142FXL2rS2MdetALs7YWoGXO8GGwEidWoDKNTtdabqZgexLUCnP6gb-6PlfwjcaK7keHs4LPES5N2jbww_iCLfFFgVwPCbzF5p_le_LGcPO14XgI",
    imageAlt: "BMW X5 M60i em estrada costeira ao anoitecer",
  },
  {
    name: "Bentley Continental",
    year: "2022",
    fuel: "Gasolina",
    price: "R$ 2.450.000",
    acceleration: "3.6s",
    power: "650cv",
    km: "5.400",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGZvUV4-xv13PXsAWjaza2ae3EEVsu7cTvRutZGyC3aCLYXinfuM1fCD7eTDs0Cns0-nq93SWBPnV3xNUvNAXseXeDd1kof6KoUZSxmN3Xnv1Yy9lU2HddMkltYP5sOULiqeslZtm1arWspLHImBOmqbHJhxgjXPFFkneWQXBQrjpOFacjRR4bIjm_OKdbX1umhZDmH9r0b1B8NvywoqTWkgmuuqw23DJcrvBjl-t3-D_erXQxSxCrNX9mgMPs1FWrs8w_45nC_Zo",
    imageAlt: "Bentley Continental em azul metálico nas ruas da cidade à noite",
  },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-headline font-black text-on-surface tracking-tighter mb-4">
              Destaques do Estoque
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Uma curadoria exclusiva dos veículos mais desejados do mercado,
              revisados e com garantia FQS.
            </p>
          </div>
          <a
            className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all underline decoration-secondary decoration-4 underline-offset-8"
            href="#"
          >
            Ver estoque completo
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.name} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
}
