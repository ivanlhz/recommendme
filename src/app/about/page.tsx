import { Metadata } from 'next';
import { BackButton } from '@/components/atoms/BackButton';

export const metadata: Metadata = {
  title: 'Acerca de RecommendMe',
  description: 'Conoce más sobre RecommendMe y nuestra misión',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <BackButton />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Acerca de RecommendMe</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-700 mb-6">
          En RecommendMe, creemos en el poder de las recomendaciones auténticas. Nuestra plataforma está diseñada para que profesionales de todo el mundo puedan compartir y recibir recomendaciones significativas que impulsen sus carreras.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">¿Por qué elegirnos?</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Plataforma intuitiva y fácil de usar</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Enfoque en la autenticidad de las recomendaciones</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Comunidad de profesionales verificados</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>Privacidad y seguridad como prioridad</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nuestro Equipo</h2>
        <p className="text-lg text-gray-700 mb-6">
          Detrás de RecommendMe hay un equipo apasionado por crear conexiones significativas en el mundo profesional. Estamos comprometidos con la innovación y la excelencia en todo lo que hacemos.
        </p>
      </section>
    </div>
  );
}
