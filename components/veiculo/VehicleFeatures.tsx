type VehicleFeaturesProps = {
  features: string[];
};

export default function VehicleFeatures({ features }: VehicleFeaturesProps) {
  return (
    <div>
      <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-yellow-400 rounded-full" />
        Opcionais e Itens de Série
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 py-3 border-b border-outline-variant/20"
          >
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
