import Image from "next/image";

type VehicleCardProps = {
  name: string;
  year: string;
  km: string;
  transmission: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  badgeVariant?: "secondary" | "primary";
};

export default function VehicleCard({
  name,
  year,
  km,
  transmission,
  price,
  imageUrl,
  imageAlt,
  badge,
  badgeVariant = "secondary",
}: VehicleCardProps) {
  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-outline-variant/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                badgeVariant === "primary"
                  ? "bg-primary text-on-primary"
                  : "bg-secondary-container text-on-secondary-container"
              }`}
            >
              {badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline font-bold text-2xl tracking-tight text-on-surface leading-tight">
            {name}
          </h3>
          <span className="text-xs font-bold bg-surface-container-high px-2 py-1 rounded">
            {year}
          </span>
        </div>

        <p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">speed</span>
          {km} km •{" "}
          <span className="material-symbols-outlined text-sm">settings</span>
          {transmission}
        </p>

        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
              Preço Sugerido
            </p>
            <p className="text-2xl font-black text-primary tracking-tighter">
              {price}
            </p>
          </div>
          <button className="p-4 bg-surface-container-low group-hover:bg-primary group-hover:text-on-primary rounded-xl transition-all duration-300">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <button className="w-full mt-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-on-primary rounded-full font-headline font-bold text-sm transition-all">
          Ver Detalhes
        </button>
      </div>
    </article>
  );
}
