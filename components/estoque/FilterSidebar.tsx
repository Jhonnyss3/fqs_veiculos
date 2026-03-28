export default function FilterSidebar() {
  return (
    <aside className="w-full lg:w-72 sticky top-28 space-y-8 bg-surface-container-low p-6 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary">filter_list</span>
        <h2 className="font-headline font-bold text-xl uppercase tracking-wider">
          Filtros
        </h2>
      </div>

      <div className="space-y-6">
        {/* Marca */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Marca
          </label>
          <select className="w-full bg-surface-container-lowest border-none rounded-lg text-sm py-3 px-4 focus:ring-2 focus:ring-primary appearance-none">
            <option>Todas as Marcas</option>
            <option>BMW</option>
            <option>Mercedes-Benz</option>
            <option>Audi</option>
            <option>Porsche</option>
            <option>Land Rover</option>
          </select>
        </div>

        {/* Modelo */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Modelo
          </label>
          <input
            className="w-full bg-surface-container-lowest border-none rounded-lg text-sm py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
            placeholder="Ex: M3, GLC, A3..."
            type="text"
          />
        </div>

        {/* Ano */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Ano
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="w-full bg-surface-container-lowest border-none rounded-lg text-sm py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
              placeholder="De"
              type="number"
            />
            <input
              className="w-full bg-surface-container-lowest border-none rounded-lg text-sm py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
              placeholder="Até"
              type="number"
            />
          </div>
        </div>

        {/* Faixa de Preço */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Faixa de Preço
          </label>
          <input
            className="w-full h-1.5 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary"
            type="range"
          />
          <div className="flex justify-between text-xs font-medium text-on-surface-variant">
            <span>R$ 50k</span>
            <span>R$ 1M+</span>
          </div>
        </div>

        {/* Câmbio */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Câmbio
          </label>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-primary text-on-primary rounded-full text-xs font-bold">
              Automático
            </button>
            <button className="px-4 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-bold hover:bg-surface-container-high transition-colors">
              Manual
            </button>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 py-4 bg-on-surface text-surface rounded-xl font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
        Limpar Filtros
      </button>
    </aside>
  );
}
