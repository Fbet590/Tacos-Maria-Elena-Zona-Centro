"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Home, Building2, Church, Landmark, Trees, Mountain } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const locations = [
  {
    name: "Puertas del Tule",
    address: "Puertas del Tule 792-B, Puertas del Tule, 45017 Guadalajara, Jal.",
    phone: "(33) 3391-7828",
    icon: Home,
    mapUrl: "https://maps.google.com/?q=Puertas+del+Tule+792-B+Guadalajara",
  },
  {
    name: "San Juan Bosco",
    address: "Calle Esteban Loera 546, San Juan Bosco, 44360 Guadalajara, Jal.",
    phone: "(33) 5106-3260",
    icon: Church,
    mapUrl: "https://maps.google.com/?q=Esteban+Loera+546+Guadalajara",
  },
  {
    name: "Italia Providencia",
    address: "C. José María Vigil 2412, Italia Providencia, 44648 Guadalajara, Jal.",
    phone: "(33) 2182-1037",
    icon: Trees,
    mapUrl: "https://maps.google.com/?q=Jose+Maria+Vigil+2412+Guadalajara",
  },
  {
    name: "Zona Centro",
    address: "C. Ocampo 413, Zona Centro, 44100 Guadalajara, Jal.",
    phone: "(33) 3324-3444",
    icon: Landmark,
    mapUrl: "https://maps.google.com/?q=Ocampo+413+Centro+Guadalajara",
  },
  {
    name: "La Estancia",
    address: "Av. Patria 500-26, La Estancia, 45530 Zapopan, Jal.",
    phone: "(33) 3673-2438",
    icon: Building2,
    mapUrl: "https://maps.google.com/?q=Av+Patria+500-26+Zapopan",
  },
  {
    name: "Las Aguilas",
    address: "Av Sierra de Mazamitla 5010, Las Aguilas, 45080 Zapopan, Jal.",
    phone: "(33) 3686-7003",
    icon: Mountain,
    mapUrl: "https://maps.google.com/?q=Sierra+de+Mazamitla+5010+Zapopan",
  },
]

const guisados = [
  { name: "Mole Verde", price: 18 },
  { name: "Mole Rojo", price: 18 },
  { name: "Chicharrón", price: 18 },
  { name: "Papas con Queso", price: 18 },
  { name: "Frijoles con Chorizo", price: 18 },
]

const refrescos335ml = [
  { name: "Coca-Cola", price: 25 },
  { name: "Coca-Cola Sin Azúcar", price: 25 },
  { name: "Sidral Mundet", price: 25 },
  { name: "Sprite", price: 25 },
  { name: "Fanta", price: 25 },
  { name: "Agua Natural", price: 25 },
]

const bebidasPremium = [
  { name: "Topo Chico", price: 30 },
  { name: "Agua Ciel de Jamaica", price: 30 },
  { name: "Agua Ciel de Limón", price: 30 },
]

const postres = [
  { name: "Alfajores", price: 35 },
  { name: "Galletas de Cuernitos", price: 25 },
]

export function Menu() {
  return (
    <section className="py-20 px-4 bg-background" id="menu">
      <div className="container mx-auto">
        {/* Menu Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Nuestro Menú
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tacos al vapor preparados con los mejores ingredientes y recetas tradicionales
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="multiple" className="w-full space-y-4">
              {/* Guisados Section */}
              <AccordionItem value="guisados" className="border-2 border-secondary rounded-xl overflow-hidden bg-card shadow-md">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/50 [&[data-state=open]]:bg-accent/30">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="font-serif text-2xl text-foreground">Guisados</span>
                    <span className="text-primary font-bold text-lg">$18 c/u</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 border-t-2 border-secondary">
                  <ul className="space-y-3">
                    {guisados.map((item) => (
                      <li key={item.name} className="flex justify-between items-center py-3 border-b-2 border-border/30 last:border-0">
                        <span className="text-foreground">{item.name}</span>
                        <span className="text-primary font-semibold">${item.price}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Refrescos Section */}
              <AccordionItem value="refrescos" className="border-2 border-secondary rounded-xl overflow-hidden bg-card shadow-md">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/50 [&[data-state=open]]:bg-accent/30">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="font-serif text-2xl text-foreground">Refrescos</span>
                    <span className="text-primary font-bold text-lg">desde $25</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 border-t-2 border-secondary">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-4 font-semibold uppercase tracking-wide">Refrescos 335ml - $25</p>
                    <ul className="space-y-3">
                      {refrescos335ml.map((item) => (
                        <li key={item.name} className="flex justify-between items-center py-3 border-b-2 border-border/30 last:border-0">
                          <span className="text-foreground">{item.name}</span>
                          <span className="text-primary font-semibold">${item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t-2 border-secondary">
                    <p className="text-sm text-muted-foreground mb-4 font-semibold uppercase tracking-wide">Bebidas Premium - $30</p>
                    <ul className="space-y-3">
                      {bebidasPremium.map((item) => (
                        <li key={item.name} className="flex justify-between items-center py-3 border-b-2 border-border/30 last:border-0">
                          <span className="text-foreground">{item.name}</span>
                          <span className="text-primary font-semibold">${item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Postres Section */}
              <AccordionItem value="postres" className="border-2 border-secondary rounded-xl overflow-hidden bg-card shadow-md mb-4">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-accent/50 [&[data-state=open]]:bg-accent/30">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="font-serif text-2xl text-foreground">Postres</span>
                    <span className="text-primary font-bold text-lg">desde $25</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 border-t-2 border-secondary">
                  <ul className="space-y-3">
                    {postres.map((item) => (
                      <li key={item.name} className="flex justify-between items-center py-3 border-b-2 border-border/30 last:border-0">
                        <span className="text-foreground">{item.name}</span>
                        <span className="text-primary font-semibold">${item.price}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Locations Section */}
        <div id="ubicaciones">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Nuestras Ubicaciones
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              6 sucursales en Guadalajara y Zapopan para servirte los mejores tacos al vapor
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => {
              const IconComponent = location.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{location.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2 px-4">{location.address}</p>
                  <p className="text-primary font-bold text-lg mb-4">{location.phone}</p>
                  <div className="flex flex-col gap-3">
                    <Link href={location.mapUrl} target="_blank" className="w-full">
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        VER DIRECCION
                      </Button>
                    </Link>
                    <Link
                      href={`https://wa.me/521${location.phone.replace(/\D/g, "")}?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido`}
                      target="_blank"
                      className="w-full"
                    >
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold"
                      >
                        ORDENAR AQUI
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
