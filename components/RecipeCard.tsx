import Image from "next/image";

export default function RecipeCard({
  image,
  alt,
  title,
  description,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white transition-transform duration-200 hover:scale-[1.02]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h4 className="font-card-headline font-medium text-[20px] text-spirulina-green">
          {title}
        </h4>
        <p className="mt-1 font-body text-[15px] text-spirulina-green/70">
          {description}
        </p>
      </div>
    </div>
  );
}
