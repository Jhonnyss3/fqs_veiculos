import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
      <div className="lg:col-span-7">
        <h1 className="font-headline font-bold text-6xl md:text-8xl tracking-tighter text-on-surface leading-[0.9] mb-8">
          Precisão em <br />
          <span className="text-primary">Conectar</span> Você.
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Nossa equipe de especialistas está pronta para oferecer o suporte
          técnico e comercial necessário para sua próxima aquisição premium.
        </p>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-low shadow-2xl rotate-3 translate-x-4 relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJAyWyQFlB-IOtwO81_XwFXj5boT8YzETgE35oVtfc8XD2MQ9Bd1--k93MrNslDZ7sSmdRKwkYGSJDecLKGdUhWgYA7vKN6pDaixfjBIi37IE-FuO8d-Cn4cFvPEeI4diHnIj25i_6popKHiSXUkODHqhwJH8iUCeqLFCI8bSfEwblIr_hlfmzUFGMursDe0lmoN4qvUxpneP1L5YCUmDrrdhX5L_aYyO278a4BlB_XPVkX6FRY7Rcb1xn75ZYwzmARqcrS6n5Owk"
            alt="Interior de showroom de luxo com carro esportivo e iluminação suave"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-secondary-container p-8 rounded-xl shadow-xl max-w-xs -rotate-2 z-10">
          <span className="font-headline font-bold text-on-secondary-container text-2xl block mb-2">
            Showroom Digital
          </span>
          <p className="text-sm font-medium text-on-secondary-container opacity-80">
            Experiência imersiva e consultoria personalizada via atendimento
            remoto.
          </p>
        </div>
      </div>
    </div>
  );
}
