export default function CatalogHeader() {
  return (
    <header className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-on-surface tracking-tighter leading-none mb-4">
            NOSSO <span className="text-primary italic">ESTOQUE</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl font-body">
            Descubra a precisão em cada detalhe. Veículos selecionados com
            rigor técnico e estética impecável.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">
            74 Veículos Disponíveis
          </span>
        </div>
      </div>
    </header>
  );
}
