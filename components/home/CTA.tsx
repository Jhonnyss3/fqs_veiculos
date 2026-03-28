export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-secondary-container rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-headline font-black text-on-secondary-container tracking-tighter mb-6">
              Pronto para acelerar sua próxima conquista?
            </h2>
            <p className="text-on-secondary-fixed-variant text-lg font-medium opacity-80">
              Agende agora um test-drive ou solicite uma avaliação online do seu
              veículo atual.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/30">
              Agendar Test-Drive
            </button>
            <button className="bg-transparent border-2 border-on-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-bold text-lg hover:bg-on-secondary-container hover:text-white transition-all">
              Falar com Consultor
            </button>
          </div>

          <span className="absolute -bottom-10 -left-10 text-[12rem] font-headline font-black text-on-secondary-container opacity-[0.03] pointer-events-none select-none">
            FQS
          </span>
        </div>
      </div>
    </section>
  );
}
