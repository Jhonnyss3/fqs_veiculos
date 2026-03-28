export default function Services() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-black text-on-surface tracking-tighter mb-4">
            Soluções Completas
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Muito além da venda, oferecemos uma experiência 360º para que sua
            única preocupação seja o prazer de dirigir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Venda seu Carro - Large Card */}
          <div className="md:col-span-2 md:row-span-2 bg-primary rounded-3xl p-10 flex flex-col justify-between text-on-primary relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl mb-6">
                currency_exchange
              </span>
              <h3 className="text-3xl font-headline font-bold mb-4">
                Venda seu Carro
              </h3>
              <p className="text-primary-fixed/80 text-lg leading-relaxed max-w-xs">
                Avaliação técnica imediata e o melhor preço do mercado com
                pagamento à vista ou troca com troco.
              </p>
            </div>
            <button className="relative z-10 self-start mt-8 bg-white text-primary px-8 py-3 rounded-full font-bold flex items-center gap-2 group-hover:scale-105 transition-all">
              Saiba Mais
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-container rounded-full blur-3xl opacity-50" />
          </div>

          {/* Financiamento */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-3xl p-8 flex gap-6 items-center shadow-sm">
            <div className="bg-secondary-container w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl">
                payments
              </span>
            </div>
            <div>
              <h4 className="text-xl font-headline font-bold text-on-surface mb-2">
                Financiamento
              </h4>
              <p className="text-on-surface-variant">
                Taxas exclusivas e aprovação rápida através dos principais
                bancos parceiros.
              </p>
            </div>
          </div>

          {/* Seguros */}
          <div className="md:col-span-1 bg-surface-container-lowest rounded-3xl p-8 flex flex-col justify-center text-center shadow-sm">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">
              verified_user
            </span>
            <h4 className="text-lg font-headline font-bold text-on-surface mb-2">
              Seguros
            </h4>
            <p className="text-sm text-on-surface-variant">
              Proteção completa para seu novo patrimônio.
            </p>
          </div>

          {/* Pós-Venda */}
          <div className="md:col-span-1 bg-surface-container-lowest rounded-3xl p-8 flex flex-col justify-center text-center shadow-sm border-2 border-secondary-fixed">
            <span className="material-symbols-outlined text-secondary text-4xl mb-4">
              handyman
            </span>
            <h4 className="text-lg font-headline font-bold text-on-surface mb-2">
              Pós-Venda
            </h4>
            <p className="text-sm text-on-surface-variant">
              Manutenção e revisões especializadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
