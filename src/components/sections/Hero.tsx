import { ArrowRight, Zap, Layers, Bot } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a]"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.1)_0%,_transparent_60%)]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse-glow" />

      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />

      {/* Floating tech elements */}
      <div className="absolute top-[15%] left-[10%] p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float shadow-xl">
        <Zap className="w-6 h-6 text-yellow-400" />
      </div>
      <div className="absolute top-[25%] right-[15%] p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float shadow-xl" style={{ animationDelay: "1s" }}>
        <Layers className="w-6 h-6 text-cyan-400" />
      </div>
      <div className="absolute bottom-[30%] left-[15%] p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-float shadow-xl" style={{ animationDelay: "2s" }}>
        <Bot className="w-6 h-6 text-emerald-400" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 mb-8 animate-slide-up opacity-0 stagger-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Software Solutions con IA
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up opacity-0 stagger-2 leading-tight">
                Transformamos
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  ideas en realidad
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 animate-slide-up opacity-0 stagger-3 leading-relaxed">
                Desarrollo web, aplicaciones a medida y automatizaciones con inteligencia artificial para llevar tu negocio al siguiente nivel.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up opacity-0 stagger-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#contacto")}
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-cyan-500/25 text-base px-8 py-6 rounded-xl group transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Comienza tu proyecto
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("#servicios")}
                  className="border-gray-700 text-gray-300 hover:bg-white/5 hover:text-white text-base px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-gray-600"
                >
                  Ver servicios
                </Button>
              </div>

              {/* Mini stats */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 animate-slide-up opacity-0 stagger-5">
                {[
                  { value: "50+", label: "Proyectos" },
                  { value: "98%", label: "Satisfacción" },
                  { value: "24/7", label: "Soporte" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Logo */}
            <div className="flex-1 flex items-center justify-center animate-scale-in">
              <div className="relative">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 rounded-full blur-3xl scale-110" />
                
                {/* Logo container */}
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <img
                    src={olinkyLogo}
                    alt="Olinky Software Solutions"
                    className="h-48 md:h-64 lg:h-72 w-auto drop-shadow-2xl animate-bounce-subtle"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 animate-pulse-glow" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
