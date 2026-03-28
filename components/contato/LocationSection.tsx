import Image from "next/image";

export default function LocationSection() {
  return (
    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Mapa */}
      <div className="rounded-xl overflow-hidden shadow-sm bg-surface-container-highest aspect-video lg:aspect-square relative grayscale contrast-125">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3t4g6Nq-Ayf4tkF1fkvX1ODMr_wn0EffelGPHmj4VJXd6Zay7O1H9G0Rl0FZ0U7CmHU4ltq6BABu0p_or4GwvKpxIOa1KVhJiqrXwq9wHdSXdj_xnRH5PmP4zqD3M2EEs1VZUx9LzRWZEJAhGRCqYOUBsjBVDNtllj20inGCvG_8HJrTZUqwJtdy7VMfqYmLnijeLlEqIkDP4EC3LLwasmP8AxCXg4inBdNeA9d6lGAsru-ESrawg-vRIVgQz8AKhRlyq9Ha92bU"
          alt="Mapa estilizado da localização da FQS Veículos em São Paulo"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary p-4 rounded-full shadow-2xl animate-pulse">
            <span className="material-symbols-outlined text-on-primary text-4xl">
              location_on
            </span>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl">
          <p className="text-xs font-bold text-outline uppercase tracking-tighter mb-1">
            Localização Principal
          </p>
          <p className="font-headline font-bold text-lg">
            Av. da Precisão, 1000 — Polo Automotivo
          </p>
          <p className="text-sm text-on-surface-variant">
            São Paulo, SP — CEP 04571-010
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-12">
        <div>
          <h2 className="font-headline font-bold text-5xl tracking-tight mb-6">
            Venha nos <span className="text-primary">Visitar</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Nossa sede foi projetada para oferecer uma experiência sensorial
            única. Cada detalhe, da iluminação ao café premium, foi pensado para
            que sua escolha seja feita com a máxima clareza e conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                call
              </span>
            </div>
            <h4 className="font-headline font-bold text-xl">
              Central de Vendas
            </h4>
            <p className="text-on-surface-variant">
              0800 555 1234
              <br />
              vendas@fqsveiculos.com.br
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                support_agent
              </span>
            </div>
            <h4 className="font-headline font-bold text-xl">Pós-Venda</h4>
            <p className="text-on-surface-variant">
              (11) 99876-5432
              <br />
              service@fqsveiculos.com.br
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
