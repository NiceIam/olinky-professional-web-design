import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    content:
      "Olinky transformó completamente nuestra presencia digital. El equipo fue profesional, creativo y entregó mucho más de lo esperado. Nuestra plataforma ahora es intuitiva y nuestros clientes la aman.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Operaciones, LogiPro",
    content:
      "La automatización con IA que implementaron redujo nuestros tiempos de procesamiento en un 70%. Increíble trabajo y soporte excepcional durante todo el proyecto.",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, EcoShop",
    content:
      "Desde el primer contacto hasta el lanzamiento, la experiencia fue impecable. Nuestro e-commerce ahora funciona perfectamente y las ventas han aumentado significativamente.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Roberto Silva",
    role: "CTO, FinanceHub",
    content:
      "El software a medida que desarrollaron se integró perfectamente con nuestros sistemas existentes. El código es limpio, bien documentado y fácil de mantener.",
    rating: 5,
    avatar: "RS",
  },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "AWS", "OpenAI", "PostgreSQL", "Docker"
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-olinky-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-olinky-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dicen{" "}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 p-4 rounded-2xl bg-gradient-primary shadow-lg">
              <Quote className="h-6 w-6 text-white" />
            </div>

            {/* Testimonial content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Tecnologías que utilizamos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-card border border-border/50 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
