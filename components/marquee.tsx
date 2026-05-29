export function Marquee() {
  const text = "TACOS AL VAPOR • TRADICION DESDE 1985 • GUADALAJARA • SABOR AUTENTICO • "
  
  return (
    <section className="py-6 overflow-hidden bg-secondary">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(8)].map((_, i) => (
          <span 
            key={i} 
            className="font-serif text-2xl md:text-4xl tracking-wide px-4 text-secondary-foreground"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}
