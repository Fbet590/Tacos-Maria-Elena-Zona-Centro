import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChefHat } from "lucide-react"

export function About() {
  return (
    <section className="py-16 px-4 bg-background" id="nosotros">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Desde 1985, Maria Elena ha sido sinonimo de los mejores tacos al vapor en Guadalajara. 
            Nuestra receta familiar, pasada de generacion en generacion, combina ingredientes frescos 
            con tecnicas tradicionales para crear el sabor autentico que nos ha hecho famosos.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Con 6 sucursales en la zona metropolitana, estamos mas cerca de ti para que disfrutes 
            de nuestros deliciosos guisados: mole verde, mole rojo, chicharron, papas con queso y mas.
          </p>
          <Link href="#menu">
            <Button 
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              <ChefHat className="w-5 h-5 mr-2" />
              VER NUESTRO MENU
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
