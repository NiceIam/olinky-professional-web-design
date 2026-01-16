import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consulta Inicial",
    description:
      "Conversamos sobre tu proyecto, objetivos y necesidades específicas para entender completamente tu visión.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Diseño y Planificación",
    description:
      "Creamos wireframes, prototipos y definimos la arquitectura técnica del proyecto junto contigo.",
  },
  {
    icon: Code,
    step: "03",
    title: "Desarrollo",
    description:
      "Construimos tu solución con tecnologías modernas, manteniendo comunicación constante sobre el progreso.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Testing y QA",
    description:
      "Realizamos pruebas exhaustivas para garantizar que todo funcione perfectamente antes del lanzamiento.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Lanzamiento",
    description:
      "Desplegamos tu proyecto y te brindamos soporte continuo para asegurar su éxito a largo plazo.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Nuestro Proceso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cómo trabajamos{" "}
            <span className="text-gradient">contigo</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso transparente y colaborativo que garantiza resultados excepcionales.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-olinky-teal via-olinky-cyan to-olinky-green" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step card */}
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Step number */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-primary">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
