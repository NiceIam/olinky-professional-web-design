import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Cookies = () => {
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
                Política de Cookies
              </h1>

              <p className="text-muted-foreground mb-6">
                Última actualización: Enero 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  ¿Qué son las Cookies?
                </h2>
                <p className="text-muted-foreground">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Tipos de Cookies que Utilizamos
                </h2>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                  Cookies Esenciales
                </h3>
                <p className="text-muted-foreground mb-4">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web. Sin ellas, el sitio no funcionaría correctamente. Incluyen:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Cookies de sesión para mantener tu navegación</li>
                  <li>Cookies de seguridad para prevenir fraudes</li>
                  <li>Cookies de preferencias básicas</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                  Cookies de Rendimiento
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Páginas más visitadas</li>
                  <li>Errores encontrados</li>
                  <li>Tiempo de carga de páginas</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                  Cookies de Funcionalidad
                </h3>
                <p className="text-muted-foreground">
                  Permiten recordar las elecciones que haces para proporcionar características mejoradas y personalizadas, como tu idioma preferido o la región en la que te encuentras.
                </p>

                <h3 className="text-xl font-medium text-foreground mt-6 mb-3">
                  Cookies de Marketing
                </h3>
                <p className="text-muted-foreground">
                  Se utilizan para rastrear visitantes en sitios web con el objetivo de mostrar anuncios relevantes y atractivos. También limitan el número de veces que ves un anuncio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Control de Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  Puedes controlar y/o eliminar las cookies según tus preferencias. Puedes eliminar todas las cookies que ya están en tu dispositivo y configurar la mayoría de los navegadores para que no las acepten. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites el sitio.
                </p>
                <p className="text-muted-foreground">
                  Para gestionar las cookies en tu navegador, consulta la sección de ayuda del mismo:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                  <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Cookies de Terceros
                </h2>
                <p className="text-muted-foreground">
                  En algunos casos, utilizamos cookies de terceros de confianza. La siguiente sección detalla qué cookies de terceros podrías encontrar en este sitio:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio</li>
                  <li><strong>Redes sociales:</strong> Para compartir contenido en plataformas sociales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Actualizaciones de esta Política
                </h2>
                <p className="text-muted-foreground">
                  Podemos actualizar esta política de cookies de vez en cuando. Te recomendamos revisar esta página periódicamente para estar informado sobre cómo utilizamos las cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Contacto
                </h2>
                <p className="text-muted-foreground">
                  Si tienes preguntas sobre nuestra política de cookies, contáctanos en:
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

export default Cookies;
