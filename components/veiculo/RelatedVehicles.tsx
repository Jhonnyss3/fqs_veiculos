import Image from "next/image";
import Link from "next/link";

type RelatedVehicle = {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
};

type RelatedVehiclesProps = {
  vehicles: RelatedVehicle[];
};

export default function RelatedVehicles({ vehicles }: RelatedVehiclesProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-24">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-headline font-black tracking-tight mb-2 uppercase">
            Outras Opções
          </h2>
          <p className="text-outline">Veículos similares que você pode gostar</p>
        </div>
        <Link
          href="/estoque"
          className="text-primary font-bold flex items-center gap-1 hover:underline"
        >
          Ver estoque completo
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vehicles.map((v) => (
          <Link
            key={v.slug}
            href={`/estoque/${v.slug}`}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group block"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <Image
                src={v.imageUrl}
                alt={v.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold font-headline mb-1">{v.name}</h4>
              <p className="text-outline text-sm mb-4">{v.subtitle}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-headline font-bold text-primary">
                  {v.price}
                </span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                  favorite
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
