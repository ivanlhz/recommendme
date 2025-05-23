import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { mockExistingRecommendations } from '@/mocks/recommendation.mock'; // Necesario para que el componente HomePage funcione

// Mockear el componente Image de next/image para evitar errores en Jest
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ''} />;
  },
}));

describe('Prueba de integración - Página de inicio', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('debe renderizar el Hero Section con título, subtítulo y botones', async () => {
    expect(screen.getByRole('heading', { level: 1, name: /Potencia tu carrera con recomendaciones profesionales/i })).toBeInTheDocument();
    expect(screen.getByText(/Conecta con profesionales, obtén recomendaciones valiosas y destaca en tu industria./i)).toBeInTheDocument();
    
    const primaryButton = await screen.findAllByRole('link', { name: /Dar una recomendación/i });
    primaryButton.forEach(element => {
      expect(element).toHaveAttribute('href', '/recommendations');
    });


    const secondaryButton = screen.getByRole('link', { name: /Explorar mi red/i });
    expect(secondaryButton).toBeInTheDocument();
    expect(secondaryButton).toHaveAttribute('href', '/network');

    const heroImage = screen.getByRole('img', { name: /Red de profesionales conectados/i });
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', '/images/red-profesional.svg');
  });

  it('debe renderizar la sección de Características con título, subtítulo y tarjetas', () => {
    expect(screen.getByRole('heading', { name: /¿Por qué usar ProNet?/i })).toBeInTheDocument();
    expect(screen.getByText(/Nuestra plataforma te ayuda a construir tu reputación profesional y conectar con oportunidades./i)).toBeInTheDocument();

    const featureCards = screen.getAllByTestId('feature-card');
    expect(featureCards.length).toBe(3);
    expect(screen.getByText(/Recomendaciones verificadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Amplía tu red profesional/i)).toBeInTheDocument();
    expect(screen.getByText(/Destaca en tu búsqueda laboral/i)).toBeInTheDocument();
  });

  it('debe renderizar la sección de Testimonios con título, subtítulo, tarjetas y botón CTA', () => {
    expect(screen.getByRole('heading', { name: /Recomendaciones destacadas/i })).toBeInTheDocument();
    expect(screen.getByText(/Descubre lo que dicen los profesionales sobre sus colegas./i)).toBeInTheDocument();

    const testimonialCards = screen.getAllByTestId('testimonial-card');
    expect(testimonialCards.length).toBe(mockExistingRecommendations.length);

    const ctaButtonsInTestimonials = screen.getAllByRole('link', { name: /Dar una recomendación/i });
    const ctaButtonInTestimonials = ctaButtonsInTestimonials.find(button => button.closest('section')?.querySelector('h2')?.textContent === 'Recomendaciones destacadas');
    expect(ctaButtonInTestimonials).toBeInTheDocument();
    expect(ctaButtonInTestimonials).toHaveAttribute('href', '/recommendations');
  });

  it('debe renderizar la sección de CTA con título, subtítulo y botón', () => {
    expect(screen.getByRole('heading', { name: /Comienza a construir tu red profesional hoy/i })).toBeInTheDocument();
    expect(screen.getByText(/Únete a miles de profesionales que ya están aprovechando el poder de las recomendaciones./i)).toBeInTheDocument();

    const ctaButton = screen.getByRole('link', { name: /Crear cuenta gratuita/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/signup');
  });

  it('debe renderizar el Footer con el nombre de la empresa y enlaces', () => {
    expect(screen.getByText(/© \d{4} ProNet. Todos los derechos reservados./i)).toBeInTheDocument();
    
    expect(screen.getByRole('link', { name: /Sobre nosotros/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /Privacidad/i })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: /Términos/i })).toHaveAttribute('href', '/terms');
    expect(screen.getByRole('link', { name: /Contacto/i })).toHaveAttribute('href', '/contact');
  });
});