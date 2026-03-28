import Navbar from "@/components/layout/Navbar";
import FooterSimple from "@/components/layout/FooterSimple";
import MobileNav from "@/components/layout/MobileNav";
import VehicleGallery from "@/components/veiculo/VehicleGallery";
import VehicleHeader from "@/components/veiculo/VehicleHeader";
import VehicleSpecs from "@/components/veiculo/VehicleSpecs";
import VehicleFeatures from "@/components/veiculo/VehicleFeatures";
import VehicleDescription from "@/components/veiculo/VehicleDescription";
import VehiclePriceCard from "@/components/veiculo/VehiclePriceCard";
import RelatedVehicles from "@/components/veiculo/RelatedVehicles";

// Dados estáticos de exemplo — substituir por fetch da API/CMS futuramente
const vehicle = {
  name: "BMW M3 Competition",
  subtitle: "3.0 Twin-Turbo 510cv Gasolina",
  year: "2023/2024",
  km: "4.200",
  category: "Sedans Premium",
  price: "749.900",
  badge: "DESTAQUE DA SEMANA",
  gallery: {
    main: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWWPfU4poYih_EbSQpGKlRtQz4o_TzOXRDd5897FLR-4pwFjD8yGmOM2aK3WCTOAahGCP7ClRDMsBYXnOjEoqm0c7Uubj8FOAqx7O9NSbQwWb9nK-noIuOIjKxU2y6gjJOGuIDTfp-M9yg_bPV_3HVKWonB_GuSNobm7_moRQDOCrujer-6g6QYkmHvXlcfeOPDP-ZEldC8CKL3B6znw9BVBwDpgEx47JlhD3uOhH8DmsTnFZ1IH-GSl6MV7_7Kbyq0YQkWmLA2P4",
      alt: "BMW M3 Competition vista frontal em estúdio minimalista",
    },
    secondary: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD7Pgb8HC4jdBghesyV0Xt_Vr-wKAWv38a1mefhKB0rknkgC4quAnBm_7xQxB4EBUvZasIUzPQ_U-LsK71o2oql1VFZzLcKn-pOEOUmQx08SznSzqCPsL_Iwyr-ZPYIPFRt33h2GLxcTAolOA03zAyT1x1g9CvB5-mq-48rIcW64MYroDDZ396O_J-EGX3V7HUVeGBSEALdXAkAZphoDU45UoANXA8pHpZjXVihGoPUPuR9kOK0yYX4hJOe8jhF9iyhm85Ra-rBLA",
        alt: "Interior BMW M3 com bancos de couro preto e detalhes em alumínio",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNsQoZE7ipqHgLWGGXhTaQa7Rxt4qqqaL7AxnrtkWHETOSNyeCgUxgCFk0eWl4p9gWrjiYDNDmz4JSLIjc0jy0n70RAl9kr149elLVNIyRItK8iK_fvZyZ2_GHAMEB0-HZuIlYwzyQdpxfi0PD9pisx90mwUyu91gLg4udt7mIa_dveMK_gB4_z-8pcIZmC5cP0lDyoiSzdWjNLTk5vATiIzZUFOVm2EEBKN--RrCXwMh1U4YZ4QEBntG0vnvPoiuLGYcQQ7dP1Ts",
        alt: "Roda esportiva BMW M com freios de cerâmica",
      },
    ],
    totalPhotos: 24,
  },
  specs: [
    { label: "Motorização", value: "3.0 L6 Turbo" },
    { label: "Potência", value: "510 CV" },
    { label: "Câmbio", value: "Automático 8m" },
    { label: "Tração", value: "Traseira (RWD)" },
    { label: "0-100 km/h", value: "3.9 Segundos" },
    { label: "Cor Externa", value: "Brooklyn Grey" },
  ],
  features: [
    "Teto de Fibra de Carbono",
    "Bancos M Carbon Bucket",
    "Sistema de Som Harman Kardon",
    "Live Cockpit Professional",
    "Freios M de Cerâmica",
    "Driving Assistant Professional",
    "Faróis BMW Laserlight",
    "Câmera 360° e Reversing Assist",
  ],
  description:
    "Exemplar em estado de zero quilômetro, com configuração exclusiva Brooklyn Grey metálico e interior em couro Merino Silverstone/Preto. Veículo faturado em Dezembro de 2023, com todas as revisões em dia na concessionária e garantia de fábrica estendida. Único dono, sem detalhes, nunca foi para pista. Equipada com o pacote M Track que inclui os desejados bancos em concha de carbono.",
  consultantImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAHj57TJamvyTCgj-HHEX8qY5tsGNftLxsc8bxjtb8A1izmQaW-2k0NrTXvVv0Y7EFMWaux0qHR9GzPvrbh7puB93rT-lvGWZWtW8xCKsZ6rl4A9JLmBqbkGhXiRWYXvzv3KWq3tnADKaIqSStScLmSEmOGIw7QoDEaJraRdy1_1rariJim1qfYz1BfNArbU6I2zEfzjcSf0ZkZ_7yiqP6QFlnE9E67WEBaVFRvlCxWBZlZubqh5EI8GVjGfoy72Pfd9wwsj_Ypa54",
};

const relatedVehicles = [
  {
    slug: "audi-rs5-coupe-2023",
    name: "Audi RS5 Coupé",
    subtitle: "2.9 V6 Twin-Turbo • 2023",
    price: "R$ 689.900",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCH_2QK-hSrB_ZX3A1xl0LsLM7mEz4ghf8cr4MEYUkzEDiHKjUGa958DAZNibZJd4ylPxR7wDrnhTm9X4EORd_Z8J1MT0PIcKXeYBavTbjXBrjjbVWFix-oCjJJUNERvtyx07oHNYpP6Vw3BuBY2QphJ5fuCqF2mgwSe4_9w2jUQ4Vq36ytgFxjU-Ks6rANvRSIh2_YamjQhiaNUsNgEbct05Y2JF5z2N6bx5NK3ahVApfPofCf_vd8Ov8JC2pE2N_MaJD47bkcBO0",
    imageAlt: "Audi RS5 Coupé azul de frente",
  },
  {
    slug: "porsche-911-carrera-s-2022",
    name: "Porsche 911 Carrera S",
    subtitle: "3.0 Boxster • 2022",
    price: "R$ 890.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIYGCJK2oJ75hLHNBBWuz4IqSoHCO7LggQmQJmCNxzNYTxUKwgJINJ_CkkS151H3zSx0uHhvqPG-4syxBGytL6_Ld5vXpbJnqjAnYXNT_S-tWGDJVHVl2QrOPjzpwRXhQXf99OJohIeGw4Uo0xQTnOalgprsI9qihB_TMBN82ADJ5FFO4UyqZo4q8cnIZRwNetyw9V8A7e9I02fyyiyzmqCvf8I_a8r9QEO99dNIB0u9H3W0QIjmBmXhbQSNbbZMVmCjW947S3HP4",
    imageAlt: "Porsche 911 Carrera S amarelo em estrada costeira",
  },
  {
    slug: "mercedes-c63-s-2022",
    name: "Mercedes-Benz C63 S",
    subtitle: "4.0 V8 Biturbo • 2022",
    price: "R$ 655.000",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8bA35eA4JxY-Tz1PZHySW0bSQvjHwidJKKIvrhNk7iDxYoxYjVUOdIXnx47t4F4rBq_dVdtlJdtfzgz8q57Es27Tz1I9LlHfZsXfU0qe4_eiSOPpUJfxCcGiDHMO3L13fHaDTaELGUPGg3WWHiH4ZKaOiRLAwgMK42des6yourweYONT2FWgAwPV7GXeqZ7bm30Rm3DArY8pSLHhAY_-Xs2lq80LBJgNzgrYzGK4NEW7E-JPY4uThdyjGEVS7G42OjK1sS6zDHIw",
    imageAlt: "Mercedes-Benz C63 S cinza escuro de frente",
  },
];

export default function VehiclePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <VehicleGallery
          mainImage={vehicle.gallery.main}
          secondaryImages={vehicle.gallery.secondary}
          badge={vehicle.badge}
          totalPhotos={vehicle.gallery.totalPhotos}
        />

        <VehicleHeader
          name={vehicle.name}
          subtitle={vehicle.subtitle}
          year={vehicle.year}
          km={vehicle.km}
          category={vehicle.category}
        />

        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            <VehicleSpecs specs={vehicle.specs} />
            <VehicleFeatures features={vehicle.features} />
            <VehicleDescription text={vehicle.description} />
          </div>
          <div className="lg:col-span-4">
            <VehiclePriceCard
              price={vehicle.price}
              consultantImageUrl={vehicle.consultantImageUrl}
            />
          </div>
        </section>

        <RelatedVehicles vehicles={relatedVehicles} />
      </main>
      <FooterSimple />
      <MobileNav />
    </>
  );
}
