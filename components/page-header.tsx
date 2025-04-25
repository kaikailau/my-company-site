import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  image: string
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  // Ensure image has a fallback value
  const imageSrc = image || "/gleaming-glassworks.png"

  return (
    <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden mt-16">
      <div className="absolute inset-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-lg text-gray-200 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
