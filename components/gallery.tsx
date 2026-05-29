import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const menuItems = [
  {
    name: "Tacos",
    description: "Barra de salsas + Elige tu proteina: Bistec, Pollo, Carnitas, Chicharron, Papa, Frijol",
    price: "$25",
    image: "/images/tacos-bistec.jpg",
  },
  {
    name: "Quesadillas",
    description: "Con queso fundido + Elige tu proteina: Bistec, Pollo, Carnitas, Chicharron",
    price: "$45",
    image: "/images/tacos-carnitas.jpg",
  },
  {
    name: "Tortas",
    description: "Pan telera + Elige tu proteina: Bistec, Pollo, Carnitas",
    price: "$55",
    image: "/images/hero-tacos.jpg",
  },
]

export function Gallery() {
  return (
    <section className="py-20 px-4 bg-secondary" id="menu">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-serif text-4xl md:text-5xl text-secondary-foreground mb-4">
            Una Fiesta de Sabores
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Explora el extenso menu de Maria Elena con deliciosa cocina mexicana, incluyendo tacos, quesadillas, tortas y mas.
          </p>
        </div>

        {/* Order Button Floating */}
        <div className="flex justify-center mb-12">
          <Link href="tel:+523312345678">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Ordena para Recoger o Entrega
            </Button>
          </Link>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-background rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-foreground">
                    {item.name}
                  </h3>
                  <span className="font-bold text-primary text-xl">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
