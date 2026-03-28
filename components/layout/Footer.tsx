import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 w-full py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto text-center md:text-left">
        {/* Branding */}
        <div className="flex flex-col gap-4">
          <span className="text-xl font-black text-blue-800 dark:text-blue-300">
            FQS Veículos
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Referência em veículos premium e atendimento de excelência.
            Transformando sonhos em realidade com precisão e confiança.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">location_on</span>
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h5 className="text-blue-700 dark:text-blue-400 font-bold mb-6 font-headline">
            Navegação
          </h5>
          <ul className="flex flex-col gap-4 text-sm text-slate-500">
            {["Estoque", "Venda seu Carro", "Financiamento", "Sobre Nós"].map(
              (item) => (
                <li key={item}>
                  <a
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 underline decoration-yellow-400 underline-offset-4"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Institucional */}
        <div>
          <h5 className="text-blue-700 dark:text-blue-400 font-bold mb-6 font-headline">
            Institucional
          </h5>
          <ul className="flex flex-col gap-4 text-sm text-slate-500">
            {[
              "Termos de Uso",
              "Política de Privacidade",
              "Trabalhe Conosco",
              "Localização",
            ].map((item) => (
              <li key={item}>
                <a
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 underline decoration-yellow-400 underline-offset-4"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Onde Estamos */}
        <div>
          <h5 className="text-blue-700 dark:text-blue-400 font-bold mb-6 font-headline">
            Onde Estamos
          </h5>
          <p className="text-sm text-slate-500 mb-4 leading-relaxed">
            Av. das Nações, 1500 - Itaim Bibi
            <br />
            São Paulo - SP, 04533-000
          </p>
          <div className="rounded-xl overflow-hidden h-32 grayscale hover:grayscale-0 transition-all relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzk1dfKcEnfWZYBy2n2uR6uEZuRpZSETNZZr-3obWCmfPZhPRm7sBpheTd_LbxkbWjeVy_vh90mrPezWpNH0NmTAI0_Id3krss-YNNTHDmbBq-LPeu_QTV6KWLVUfBmuGTpAYfQSuSMQ6dmN8TVolJ7Bl3nJ3_arCh3ruYwB9X-LrFKEcKJF2Ga3PNNYFDnSmDG2GxODbuV7j8R-NPzaxJn8J_oS6Iq-ZzPyuP4obL3RQXwBNgQnBzPH-wmjtuQq_msKh29731b3I"
              alt="Mapa de São Paulo com marcador de localização da FQS Veículos"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="font-body text-sm text-slate-500 dark:text-slate-400">
          © 2024 FQS Veículos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
