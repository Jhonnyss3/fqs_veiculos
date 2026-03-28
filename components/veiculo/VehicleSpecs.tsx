type Spec = {
  label: string;
  value: string;
};

type VehicleSpecsProps = {
  specs: Spec[];
};

export default function VehicleSpecs({ specs }: VehicleSpecsProps) {
  return (
    <div>
      <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-yellow-400 rounded-full" />
        Ficha Técnica
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {specs.map((spec) => (
          <div key={spec.label} className="bg-surface-container-low p-6 rounded-xl">
            <span className="text-outline text-xs font-bold uppercase tracking-widest block mb-2">
              {spec.label}
            </span>
            <span className="text-lg font-bold text-on-surface">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
