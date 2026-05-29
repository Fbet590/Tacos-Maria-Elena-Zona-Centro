import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

const locations = [
  {
    name: "Puertas del Tule",
    address: "Puertas del Tule 792-B",
    city: "Puertas del Tule, 45017 Guadalajara, Jal.",
  },
  {
    name: "San Juan Bosco",
    address: "Calle Esteban Loera 546",
    city: "San Juan Bosco, 44360 Guadalajara, Jal.",
  },
  {
    name: "Italia Providencia",
    address: "C. José María Vigil 2412",
    city: "Italia Providencia, 44648 Guadalajara, Jal.",
  },
  {
    name: "Zona Centro",
    address: "C. Ocampo 413",
    city: "Zona Centro, 44100 Guadalajara, Jal.",
  },
  {
    name: "La Estancia",
    address: "Av. Patria 500-26",
    city: "La Estancia, 45530 Zapopan, Jal.",
  },
  {
    name: "Las Aguilas",
    address: "Av Sierra de Mazamitla 5010",
    city: "Las Aguilas, 45080 Zapopan, Jal.",
  },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ambiente.jpg"
            alt="Restaurante Maria Elena"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="relative z-10 py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Hours */}
              <div>
                <h3 className="font-serif text-2xl mb-6">HORARIO</h3>
                <p className="mb-2">Lunes - Sabado: 9AM - 3PM</p>
                <p className="mb-6">Domingo: CERRADO</p>
                <p className="text-primary font-bold text-lg">LLAMANOS HOY: (33) 3324-3444</p>
                <p className="text-sm text-secondary-foreground/80 mt-4 max-w-sm">
                  En Maria Elena, nos dedicamos a servir a nuestros clientes con el mas autentico sabor mexicano. 
                  Nos esforzamos por crear relaciones duraderas con las familias que nos visitan.
                </p>
              </div>

              {/* Locations */}
              <div>
                <h3 className="font-serif text-2xl mb-6">UBICACIONES</h3>
                <div className="space-y-3 text-sm">
                  {locations.map((location) => (
                    <div key={location.name}>
                      <p className="text-primary font-semibold">{location.name}</p>
                      <p>{location.address}</p>
                      <p className="text-secondary-foreground/80">{location.city}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Connected */}
              <div>
                <h3 className="font-serif text-2xl mb-6">CONECTATE</h3>
                <div className="flex gap-4 mb-8">
                  <Link 
                    href="https://www.facebook.com/tacosmariaelenacentro" 
                    target="_blank"
                    className="p-3 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://www.instagram.com/tacosmariaelenacentro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank"
                    className="p-3 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-foreground text-background py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Maria Elena Tacos al Vapor. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terminos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
