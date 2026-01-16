import { Globe, Cog, Bot, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web y Apps",
    description:
      "Creamos sitios web modernos, aplicaciones web progresivas y apps móviles con las últimas tecnologías para impulsar tu presencia digital.",
    features: ["React & Next.js", "Apps móviles", "E-commerce", "PWA"],
    gradient: "from-olinky-blue to-olinky-cyan",
  },
  {
    icon: Cog,
    title: "Software a Medida",
    description:
      "Desarrollamos soluciones personalizadas que se adaptan perfectamente a los procesos únicos de tu empresa, optimizando la productividad.",
    features: ["ERP & CRM", "Integraciones", "APIs REST", "Dashboards"],
    gradient: "from-olinky-teal to-olinky-green",
  },
  {
    icon: Bot,
    title: "Automatizaciones con IA",
    description:
      "Implementamos inteligencia artificial y automatizaciones inteligentes para que tu negocio opere de forma más eficiente y escalable.",
    features: ["Chatbots IA", "Flujos automáticos", "Análisis predictivo", "RPA"],
    gradient: "from-olinky-green to-olinky-teal",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-olinky-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluciones que impulsan{" "}
            <span className="text-gradient">tu negocio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos servicios integrales de desarrollo de software adaptados a las necesidades específicas de cada cliente.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-card hover:-translate-y-2"
            >
              {/* Gradient top border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
              />

              <CardContent className="p-8">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="inline-flex items-center text-sm font-medium text-primary group/link">
                  Saber más
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </button>
              </CardContent>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
