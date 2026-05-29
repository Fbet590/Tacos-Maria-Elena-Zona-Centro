import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Marquee } from "@/components/marquee"
import { Menu } from "@/components/menu"
import { Footer } from "@/components/footer"
import { FloatingButton } from "@/components/floating-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingButton />
      <Hero />
      <About />
      <Marquee />
      <Menu />
      <Footer />
    </main>
  )
}
