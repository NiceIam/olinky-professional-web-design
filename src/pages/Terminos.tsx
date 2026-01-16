import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terminos = () => {
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
                Términos y Condiciones
              </h1>

              <p className="text-muted-foreground mb-6">
                Última actualización: Enero 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Aceptación de los Términos
                </h2>
                <p className="text-muted-foreground">
                  Al acceder y utilizar los servicios de Olinky Software Solutions, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al servicio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Descripción del Servicio
                </h2>
                <p className="text-muted-foreground">
                  Olinky Software Solutions proporciona servicios de desarrollo de software, incluyendo pero no limitado a: desarrollo web, aplicaciones móviles, software a medida y automatizaciones con inteligencia artificial.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Propiedad Intelectual
                </h2>
                <p className="text-muted-foreground mb-4">
                  Todo el contenido, características y funcionalidad de nuestros servicios, incluyendo pero no limitado a texto, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, son propiedad de Olinky Software Solutions o sus licenciantes.
                </p>
                <p className="text-muted-foreground">
                  Una vez completado el pago de un proyecto, el cliente obtiene los derechos de uso del software desarrollado específicamente para él, según lo acordado en el contrato de servicio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Obligaciones del Cliente
                </h2>
                <p className="text-muted-foreground mb-4">
                  El cliente se compromete a:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Colaborar activamente en el desarrollo del proyecto</li>
                  <li>Respetar los plazos de revisión y feedback acordados</li>
                  <li>Realizar los pagos según lo acordado</li>
                  <li>No utilizar el software para fines ilegales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Pagos y Facturación
                </h2>
                <p className="text-muted-foreground">
                  Los términos de pago serán acordados en cada proyecto individual. Generalmente, requerimos un pago inicial del 50% antes de comenzar el desarrollo, con el saldo restante a pagar antes de la entrega final.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Garantía y Soporte
                </h2>
                <p className="text-muted-foreground">
                  Ofrecemos un período de garantía de 30 días después de la entrega final para corrección de errores. El soporte técnico adicional y las nuevas funcionalidades se cotizarán por separado.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Limitación de Responsabilidad
                </h2>
                <p className="text-muted-foreground">
                  Olinky Software Solutions no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Modificaciones
                </h2>
                <p className="text-muted-foreground">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Ley Aplicable
                </h2>
                <p className="text-muted-foreground">
                  Estos términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Contacto
                </h2>
                <p className="text-muted-foreground">
                  Para cualquier pregunta sobre estos Términos y Condiciones, contáctanos en:
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

export default Terminos;
