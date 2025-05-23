import { HeroSection } from "@/components/molecules/HeroSection";
import { FeaturesSection } from "@/components/molecules/FeaturesSection";
import { TestimonialsSection } from "@/components/molecules/TestimonialsSection";
import { CtaSection } from "@/components/molecules/CtaSection";
import { Footer } from "@/components/molecules/Footer";
import { mockExistingRecommendations } from "@/mocks/recommendation.mock";

import { Header } from "@/components/organisms/Header"; 

export default function Home() {
  const features = [
    {
      title: "Recomendaciones verificadas",
      description: "Todas las recomendaciones son de profesionales reales que han trabajado contigo, garantizando credibilidad."
    },
    {
      title: "Amplía tu red profesional",
      description: "Conecta con profesionales de tu industria y descubre nuevas oportunidades de colaboración."
    },
    {
      title: "Destaca en tu búsqueda laboral",
      description: "Las recomendaciones positivas aumentan significativamente tus posibilidades de conseguir entrevistas."
    }
  ];

  const footerLinks = [
    { label: "Sobre nosotros", href: "/about" },
    { label: "Privacidad", href: "/privacy" },
    { label: "Términos", href: "/terms" },
    { label: "Contacto", href: "/contact" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection 
        title="Potencia tu carrera con recomendaciones profesionales"
        subtitle="Conecta con profesionales, obtén recomendaciones valiosas y destaca en tu industria."
        primaryButtonText="Dar una recomendación"
        primaryButtonLink="/recommendations"
        secondaryButtonText="Explorar mi red"
        secondaryButtonLink="/network"
        imageSrc="/images/red-profesional.svg"
      />

      <FeaturesSection 
        title="¿Por qué usar ProNet?"
        subtitle="Nuestra plataforma te ayuda a construir tu reputación profesional y conectar con oportunidades."
        features={features}
      />

      <TestimonialsSection 
        title="Recomendaciones destacadas"
        subtitle="Descubre lo que dicen los profesionales sobre sus colegas."
        testimonials={mockExistingRecommendations}
        ctaText="Dar una recomendación"
        ctaLink="/recommendations"
      />

      <CtaSection 
        title="Comienza a construir tu red profesional hoy"
        subtitle="Únete a miles de profesionales que ya están aprovechando el poder de las recomendaciones."
        buttonText="Crear cuenta gratuita"
        buttonLink="/signup"
      />

      <Footer 
        companyName="ProNet"
        tagline="Conectando profesionales desde 2025"
        links={footerLinks}
      />
    </div>
  );
}
