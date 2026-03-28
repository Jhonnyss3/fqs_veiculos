import Image from "next/image";

type VehicleGalleryProps = {
  mainImage: { src: string; alt: string };
  secondaryImages: { src: string; alt: string }[];
  badge?: string;
  totalPhotos?: number;
};

export default function VehicleGallery({
  mainImage,
  secondaryImages,
  badge,
  totalPhotos,
}: VehicleGalleryProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[500px] lg:h-[650px]">
        {/* Imagem principal */}
        <div className="lg:col-span-8 relative overflow-hidden rounded-xl group cursor-zoom-in">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
          {badge && (
            <div className="absolute top-6 left-6">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-bold text-sm tracking-wide shadow-sm">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Imagens secundárias */}
        <div className="lg:col-span-4 grid grid-rows-2 gap-4">
          {secondaryImages[0] && (
            <div className="relative overflow-hidden rounded-xl group cursor-zoom-in">
              <Image
                src={secondaryImages[0].src}
                alt={secondaryImages[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          )}
          {secondaryImages[1] && (
            <div className="relative overflow-hidden rounded-xl group cursor-zoom-in">
              <Image
                src={secondaryImages[1].src}
                alt={secondaryImages[1].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {totalPhotos && (
                <div className="absolute inset-0 bg-on-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">grid_view</span>
                    Ver todas as {totalPhotos} fotos
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
