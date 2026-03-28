export default function ContactGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Formulário */}
      <div className="lg:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
        <h2 className="font-headline font-bold text-3xl mb-10 tracking-tight">
          Envie uma Mensagem
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline">
                Nome Completo
              </label>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Seu nome"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline">
                E-mail Corporativo
              </label>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="exemplo@email.com"
                type="email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-outline">
              Telefone / WhatsApp
            </label>
            <input
              className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="(00) 00000-0000"
              type="tel"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-outline">
              Mensagem ou Interesse
            </label>
            <textarea
              className="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="Como podemos ajudar no seu próximo showroom?"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-on-primary py-5 rounded-full font-headline font-bold text-lg hover:bg-primary-container transition-all shadow-lg flex items-center justify-center gap-3"
          >
            Enviar Solicitação
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* WhatsApp */}
        <div className="bg-secondary-container p-8 rounded-xl flex flex-col items-center text-center justify-center gap-4 group cursor-pointer">
          <div className="bg-on-secondary-container/10 p-4 rounded-full group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl text-on-secondary-container">
              chat
            </span>
          </div>
          <h3 className="font-headline font-bold text-xl text-on-secondary-container">
            Atendimento Instantâneo
          </h3>
          <p className="text-on-secondary-container opacity-80 text-sm">
            Fale com um consultor agora mesmo para tirar suas dúvidas.
          </p>
          <a
            className="mt-2 w-full bg-on-secondary-container text-surface-container-lowest py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            href="https://wa.me/5500000000000"
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>

        {/* Horários */}
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15">
          <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined">schedule</span>
            Horários de Atendimento
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
              <span className="font-medium text-on-surface-variant">
                Segunda a Sexta
              </span>
              <span className="text-primary font-bold">08h - 19h</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
              <span className="font-medium text-on-surface-variant">
                Sábados
              </span>
              <span className="text-primary font-bold">09h - 14h</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-on-surface-variant">
                Domingos
              </span>
              <span className="text-error font-bold italic">Fechado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
