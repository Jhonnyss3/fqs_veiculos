export default function FooterContact() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <span className="font-headline font-bold text-2xl text-slate-900 block mb-4">
            FQS Veículos
          </span>
          <p className="text-slate-500 text-sm leading-relaxed">
            Referência em curadoria de veículos de alta performance e luxo. A
            Precisão do Showroom Digital em cada detalhe do seu próximo
            investimento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-slate-900">
              Navegação
            </h5>
            <ul className="space-y-2">
              {["Home", "Estoque", "Financiamento"].map((item) => (
                <li key={item}>
                  <a
                    className="text-sm text-slate-400 hover:text-blue-500 transition-colors"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-slate-900">Legal</h5>
            <ul className="space-y-2">
              {["Privacidade", "Termos"].map((item) => (
                <li key={item}>
                  <a
                    className="text-sm text-slate-400 hover:text-blue-500 transition-colors"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-headline font-bold text-slate-900">Social</h5>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">
                social_leaderboard
              </span>
              <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">
                camera
              </span>
              <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">
                alternate_email
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200">
        <p className="text-sm font-body text-slate-500 text-center">
          © 2024 FQS Veículos. A Precisão do Showroom Digital.
        </p>
      </div>
    </footer>
  );
}
