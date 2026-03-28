export default function FooterSimple() {
  return (
    <footer className="w-full py-12 px-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-headline font-bold text-slate-900 dark:text-white text-xl">
          FQS Veículos
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {["Privacidade", "Termos", "Trabalhe Conosco"].map((item) => (
            <a
              key={item}
              className="text-slate-400 hover:text-blue-500 underline decoration-blue-500 underline-offset-4 transition-all"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-center md:text-right opacity-80 hover:opacity-100 transition-opacity">
          © 2024 FQS Veículos. A Precisão do Showroom Digital.
        </p>
      </div>
    </footer>
  );
}
