type VehicleDescriptionProps = {
  text: string;
};

export default function VehicleDescription({ text }: VehicleDescriptionProps) {
  return (
    <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden">
      <div className="absolute -right-12 -top-12 opacity-5 text-blue-900">
        <span className="material-symbols-outlined text-9xl">info</span>
      </div>
      <h3 className="text-2xl font-headline font-bold mb-4">
        Sobre este veículo
      </h3>
      <p className="text-on-surface-variant leading-relaxed text-lg">{text}</p>
    </div>
  );
}
