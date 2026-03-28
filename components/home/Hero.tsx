import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[870px] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCCc7T6LNzJ7Zh1K4Qwc4Z-mhyJyQYnUqsCCcQNbfzZwr4m_mQY_3LOkV8aaTzv7Aw848a7lYmVlDB4LEx5_wuAzrVZWDV8fThqxjg5Z3ZqbpxVZo5vrtlR8eAxskDfvNNYacEtJ0PEbytHKSzPctIRgqeqdf9dCm3sXtOOjN3pMcv7eV6Nv0qJcwPoaO25pmCxIrOzcgwhJjQbuy-4KJ4IkQXZ4rpRTRrl1_czspI40uaspJ36e-mk5u0SHC5lxHpKfR7k7XyN0M"
          alt="Carro esportivo de luxo moderno estacionado em showroom com iluminação cinematográfica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 via-on-surface/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold mb-6 tracking-wider">
            PREMIUM SELECTION 2024
          </span>
          <h1 className="text-5xl lg:text-7xl font-headline font-black text-white leading-tight mb-8 tracking-tighter">
            Encontre a{" "}
            <span className="text-secondary-fixed">precisão</span> que você
            merece.
          </h1>

          {/* Search Bar */}
          <div className="bg-surface-container-lowest/90 backdrop-blur-xl p-2 rounded-2xl flex flex-col md:flex-row gap-2 shadow-2xl max-w-xl">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-surface-container-high/50 rounded-xl">
              <span className="material-symbols-outlined text-outline">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-medium placeholder:text-outline outline-none"
                placeholder="Encontre seu carro..."
                type="text"
              />
            </div>
            <button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
