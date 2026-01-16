import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link to="/">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Button>
            </Link>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-foreground mb-8">
                Política de Privacidad
              </h1>

              <p className="text-muted-foreground mb-6">
                Última actualización: Enero 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Información que Recopilamos
                </h2>
                <p className="text-muted-foreground mb-4">
                  En Olinky Software Solutions recopilamos información que nos proporcionas directamente, incluyendo:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Nombre y datos de contacto</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Información de la empresa</li>
                  <li>Contenido de los mensajes que nos envías</li>
                  <li>Cualquier otra información que decidas proporcionarnos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Uso de la Información
                </h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Enviarte información técnica, actualizaciones y mensajes administrativos</li>
                  <li>Comunicarnos contigo sobre productos, servicios y eventos</li>
                  <li>Proteger contra actividades fraudulentas o ilegales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Compartición de Información
                </h2>
                <p className="text-muted-foreground">
                  No compartimos tu información personal con terceros excepto en las siguientes circunstancias:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Con tu consentimiento explícito</li>
                  <li>Con proveedores de servicios que trabajan en nuestro nombre</li>
                  <li>Para cumplir con obligaciones legales</li>
                  <li>Para proteger nuestros derechos y seguridad</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Seguridad de los Datos
                </h2>
                <p className="text-muted-foreground">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Tus Derechos
                </h2>
                <p className="text-muted-foreground mb-4">
                  Tienes derecho a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Contacto
                </h2>
                <p className="text-muted-foreground">
                  Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
                </p>
                <p className="text-primary font-medium mt-2">
                  hola@olinky.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidad;
