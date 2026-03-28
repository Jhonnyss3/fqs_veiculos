import Image from "next/image";

const testimonials = [
  {
    quote:
      "A experiência na FQS superou todas as expectativas. O atendimento foi impecável e a transparência em todo o processo de financiamento me deu a segurança que eu precisava para realizar meu sonho.",
    name: "Ricardo Mendonça",
    role: "Empresário • Comprou uma BMW X5",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDFAgXMaCj2Pqoaj6Bt_wT74cUJHh9HZr3hRpi3F3IqnFJhjk9VCVivFbgiIDgqzW5KStB1-k52FhWDEOfgGICb6Tva4oW2FjKTR9IqPiPaADlxnbSuFSdv9mEmgG0WMOex8VCHYL7qKvQdm8LjD1TczQGJrdz394md7KIPRLZrCSyX5hsfMR53Vznz0PHZRSqNoC-mvlSKNYkKLT0YJzNvOmUEp9XGaqRpeocVqYj9m8tYya8b_b_sApqtapYq1xAmPBNsFUWlb4",
    imageAlt: "Retrato de Ricardo Mendonça, empresário",
  },
  {
    quote:
      "Vendi meu carro para a FQS e fiquei impressionada com a rapidez. Avaliaram em 30 minutos e o dinheiro caiu na conta no mesmo dia. Profissionalismo puro, recomendo de olhos fechados.",
    name: "Juliana Castilho",
    role: "Arquiteta • Vendeu um Audi A3",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7y-c9ReC6ak7PIvNrxEUSQgz91frwKzgMHK1CJ-kalnULR8D6M0Sp9BsNk_cSiRxyPPEa1pFmwV72g8pVuOGXRHYrvjETOzvJP2o1gs_FCoHQ_WZV5w86r3En8CBwYvKxO6mhMU4vH3gQ_jmWXOM_1xUHmRqBgmuPek0ALv6DnPNWLLp40NLdGV_jbHCsIecoK8QhJbq3xn2ajd80cv-4tj0ZkfKY5t2YpF68693e5kiCF0bnKrkFNxZQX5yUhaHl7Jf5TfvTkz0",
    imageAlt: "Retrato de Juliana Castilho, arquiteta",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-secondary-fixed"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <h2 className="text-4xl font-headline font-black text-on-surface tracking-tighter text-center">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-12 bg-surface-container-low rounded-[2rem]"
            >
              <span className="material-symbols-outlined text-7xl text-primary/10 absolute top-8 right-8">
                format_quote
              </span>
              <p className="text-xl text-on-surface italic leading-relaxed mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.imageUrl}
                    alt={t.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{t.name}</h4>
                  <p className="text-sm text-outline">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
