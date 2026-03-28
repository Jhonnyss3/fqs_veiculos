import Image from "next/image";

type VehiclePriceCardProps = {
  price: string;
  consultantImageUrl: string;
};

export default function VehiclePriceCard({
  price,
  consultantImageUrl,
}: VehiclePriceCardProps) {
  return (
    <div className="sticky top-32 space-y-6">
      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-on-surface/5 border border-outline-variant/10">
        <span className="text-outline font-bold text-xs uppercase tracking-widest mb-1 block">
          Preço de Venda
        </span>
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-2xl font-headline font-bold text-primary">
            R$
          </span>
          <span className="text-5xl font-headline font-black text-on-surface tracking-tighter leading-none">
            {price}
          </span>
        </div>

        <div className="space-y-4">
          <button className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
            Chamar no WhatsApp
          </button>
          <button className="w-full py-4 bg-secondary-container text-on-secondary-container rounded-full font-bold flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-colors">
            <span className="material-symbols-outlined">payments</span>
            Financie Agora
          </button>
          <button className="w-full py-4 bg-white border-2 border-primary/20 text-primary rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
            <span className="material-symbols-outlined">directions_car</span>
            Agendar Test Drive
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-outline-variant/20 flex items-center justify-between">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
              <Image
                src={consultantImageUrl}
                alt="Consultor de vendas FQS"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold">
              +3
            </div>
          </div>
          <p className="text-xs text-outline font-medium">
            Vendedores online agora
          </p>
        </div>
      </div>

      <div className="bg-surface-container-low p-6 rounded-2xl flex items-start gap-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
          <span className="material-symbols-outlined text-primary text-3xl">
            verified_user
          </span>
        </div>
        <div>
          <h4 className="font-bold text-on-surface">Garantia FQS</h4>
          <p className="text-sm text-outline">
            Veículo periciado e com garantia de procedência documentada.
          </p>
        </div>
      </div>

      <div className="bg-surface-container-low p-6 rounded-2xl flex items-start gap-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
          <span className="material-symbols-outlined text-primary text-3xl">
            location_on
          </span>
        </div>
        <div>
          <h4 className="font-bold text-on-surface">Unidade São Paulo</h4>
          <p className="text-sm text-outline">
            Disponível em nossa loja no Itaim Bibi para visitação imediata.
          </p>
        </div>
      </div>
    </div>
  );
}
