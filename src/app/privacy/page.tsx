import { Metadata } from 'next';
import { BackButton } from '@/components/atoms/BackButton';

export const metadata: Metadata = {
  title: 'Política de Privacidad - RecommendMe',
  description: 'Lee nuestra política de privacidad para entender cómo manejamos tu información',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <BackButton />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Política de Privacidad</h1>
      
      <div className="prose lg:prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-gray-700 mb-6">
            Última actualización: 23 de mayo de 2025
          </p>
          <p className="text-gray-700 mb-6">
            En RecommendMe, valoramos y respetamos tu privacidad. Esta política explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando utilizas nuestro servicio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
          <p className="text-gray-700 mb-4">
            Podemos recopilar la siguiente información cuando usas nuestro servicio:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Información de registro (nombre, correo electrónico, etc.)</li>
            <li>Información de perfil (foto, biografía, experiencia laboral)</li>
            <li>Recomendaciones que envías o recibes</li>
            <li>Datos de uso y preferencias</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Cómo Usamos tu Información</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Proporcionar y mantener nuestro servicio</li>
            <li>Mejorar y personalizar la experiencia del usuario</li>
            <li>Comunicarnos contigo sobre actualizaciones y novedades</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Compartir Información</h2>
          <p className="text-gray-700 mb-4">
            No vendemos ni alquilamos tu información personal a terceros. Podemos compartir información en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Con tu consentimiento explícito</li>
            <li>Para cumplir con obligaciones legales</li>
            <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Tus Derechos</h2>
          <p className="text-gray-700 mb-4">
            Tienes derecho a:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Acceder a tu información personal</li>
            <li>Solicitar corrección o eliminación de tus datos</li>
            <li>Oponerte al procesamiento de tus datos</li>
            <li>Solicitar la portabilidad de tus datos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
          <p className="text-gray-700">
            Si tienes preguntas sobre esta política de privacidad, por favor contáctanos a través de nuestro formulario de contacto.
          </p>
        </section>
      </div>
    </div>
  );
}
