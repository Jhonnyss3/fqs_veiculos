import Link from "next/link";

type VehicleHeaderProps = {
  name: string;
  subtitle: string;
  year: string;
  km: string;
  category: string;
};

export default function VehicleHeader({
  name,
  subtitle,
  year,
  km,
  category,
}: VehicleHeaderProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-8">
      <nav className="flex items-center gap-2 text-sm text-outline mb-6">
        <Link href="/estoque" className="hover:text-primary transition-colors">
          Estoque
        </Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span>{category}</span>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-primary font-medium">{name}</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface tracking-tighter leading-none mb-2">
            {name}
          </h1>
          <p className="text-xl text-outline-variant font-medium">{subtitle}</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              calendar_today
            </span>
            <span className="font-bold">{year}</span>
          </div>
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              speed
            </span>
            <span className="font-bold">{km} km</span>
          </div>
        </div>
      </div>
    </section>
  );
}
