import Image from "next/image";

type CarCardProps = {
  name: string;
  year: string;
  fuel: string;
  price: string;
  acceleration: string;
  power: string;
  km: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
};

export default function CarCard({
  name,
  year,
  fuel,
  price,
  acceleration,
  power,
  km,
  imageUrl,
  imageAlt,
  badge,
}: CarCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">
              {badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-headline font-bold text-on-surface">
              {name}
            </h3>
            <p className="text-sm text-outline">
              {year} • {fuel}
            </p>
          </div>
          <span className="text-2xl font-black text-primary">{price}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-outline-variant/20">
          <div className="text-center">
            <p className="text-[10px] uppercase text-outline font-bold tracking-widest">
              Aceleração
            </p>
            <p className="font-bold text-on-surface">{acceleration}</p>
          </div>
          <div className="text-center border-x border-outline-variant/20">
            <p className="text-[10px] uppercase text-outline font-bold tracking-widest">
              Potência
            </p>
            <p className="font-bold text-on-surface">{power}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase text-outline font-bold tracking-widest">
              KM
            </p>
            <p className="font-bold text-on-surface">{km}</p>
          </div>
        </div>

        <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}
