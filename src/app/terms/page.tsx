import { Metadata } from 'next';
import { BackButton } from '@/components/atoms/BackButton';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - RecommendMe',
  description: 'Términos y condiciones de uso de RecommendMe',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <BackButton />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Términos y Condiciones</h1>
      
      <div className="prose lg:prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-gray-700 mb-6">
            Última actualización: 23 de mayo de 2025
          </p>
          <p className="text-gray-700 mb-6">
            Al acceder y utilizar RecommendMe (el "Servicio"), aceptas cumplir con estos Términos de Servicio ("Términos"). Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al Servicio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Uso del Servicio</h2>
          <p className="text-gray-700 mb-4">
            Al utilizar RecommendMe, aceptas:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Proporcionar información precisa y actualizada</li>
            <li>Mantener la confidencialidad de tu cuenta y contraseña</li>
            <li>No utilizar el Servicio para fines ilegales o no autorizados</li>
            <li>No interferir ni interrumpir la seguridad del Servicio</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Contenido del Usuario</h2>
          <p className="text-gray-700 mb-4">
            Eres responsable del contenido que publiques en RecommendMe, incluyendo recomendaciones y comentarios. Al publicar contenido, garantizas que:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Eres el propietario o tienes los derechos necesarios para compartir el contenido</li>
            <li>El contenido no infringe derechos de terceros</li>
            <li>El contenido no es difamatorio, ofensivo o ilegal</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Limitación de Responsabilidad</h2>
          <p className="text-gray-700 mb-4">
            RecommendMe se proporciona "tal cual" y "según disponibilidad". No garantizamos que:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>El Servicio sea ininterrumpido o esté libre de errores</li>
            <li>Los resultados obtenidos del uso del Servicio sean precisos o confiables</li>
            <li>La calidad de cualquier producto, servicio, información u otro material obtenido cumpla con tus expectativas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Modificaciones</h2>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos sobre cambios importantes publicando los nuevos Términos en esta página.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
          <p className="text-gray-700">
            Si tienes alguna pregunta sobre estos Términos, por favor contáctanos a través de nuestro formulario de contacto.
          </p>
        </section>
      </div>
    </div>
  );
}
