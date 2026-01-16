import { ArrowRight, Sparkles, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import olinkyLogo from "@/assets/olinky-logo.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-olinky-teal/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-olinky-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-olinky-green/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(175 70% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 45%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 text-olinky-teal/30 animate-float" style={{ animationDelay: "1s" }}>
          <Code size={40} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-olinky-cyan/30 animate-float" style={{ animationDelay: "3s" }}>
          <Cpu size={50} />
        </div>
        <div className="absolute top-1/3 right-1/3 text-olinky-green/30 animate-float" style={{ animationDelay: "2s" }}>
          <Sparkles size={35} />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo animation */}
          <div className="mb-8 animate-scale-in">
            <img
              src={olinkyLogo}
              alt="Olinky"
              className="h-24 md:h-32 w-auto mx-auto drop-shadow-2xl animate-bounce-subtle"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-slide-up opacity-0 stagger-1">
            <Sparkles className="h-4 w-4 text-olinky-cyan" />
            <span className="text-sm text-white/90">Software Solutions con IA</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up opacity-0 stagger-2">
            Transformamos ideas en
            <span className="block mt-2 text-gradient bg-gradient-to-r from-olinky-cyan via-olinky-teal to-olinky-green">
              soluciones digitales
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-slide-up opacity-0 stagger-3">
            Desarrollo web, aplicaciones a medida y automatizaciones con inteligencia artificial.
            Llevamos tu negocio al siguiente nivel tecnológico.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0 stagger-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contacto")}
              className="bg-gradient-primary hover:opacity-90 transition-all shadow-lg shadow-olinky-teal/30 text-lg px-8 py-6 group"
            >
              Comienza tu proyecto
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#servicios")}
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Ver servicios
            </Button>
          </div>

          {/* Stats preview */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up opacity-0 stagger-5">
            {[
              { value: "50+", label: "Proyectos" },
              { value: "98%", label: "Satisfacción" },
              { value: "24/7", label: "Soporte" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
