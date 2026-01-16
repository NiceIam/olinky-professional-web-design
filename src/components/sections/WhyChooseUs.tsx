import { useEffect, useState, useRef } from "react";
import { Shield, Zap, Users, Award, Clock, Headphones } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Proyectos Completados" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos" },
  { value: 5, suffix: "+", label: "Años de Experiencia" },
  { value: 24, suffix: "/7", label: "Soporte Disponible" },
];

const features = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Implementamos las mejores prácticas de seguridad en cada proyecto.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Código optimizado para velocidad y escalabilidad máxima.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales certificados con amplia experiencia en el sector.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Estándares de calidad rigurosos en cada línea de código.",
  },
  {
    icon: Clock,
    title: "Entregas Puntuales",
    description: "Cumplimos con los plazos acordados sin comprometer la calidad.",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description: "Acompañamiento y mantenimiento post-lanzamiento.",
  },
];

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count}
      {suffix}
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-olinky-teal/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-olinky-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-white/60 mt-2 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-olinky-cyan text-sm font-medium mb-4 backdrop-blur-sm">
            ¿Por qué Olinky?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Razones para{" "}
            <span className="text-gradient">elegirnos</span>
          </h2>
          <p className="text-white/60 text-lg">
            Nos diferenciamos por nuestra dedicación a la excelencia y nuestro compromiso con el éxito de cada proyecto.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-olinky-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
