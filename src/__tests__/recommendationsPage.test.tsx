import { render, screen, fireEvent } from '@testing-library/react';
import RecommendationsPage from '../app/recommendations/page';

// Mock de los componentes para evitar errores de renderizado
jest.mock('../components/molecules/UserProfile', () => {
  return {
    UserProfile: ({ name, position, company }: any) => (
      <div data-testid="user-profile">
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{company}</p>
      </div>
    )
  };
});

jest.mock('../components/molecules/RecommendationForm', () => {
  return {
    RecommendationForm: ({ onSubmit }: any) => {
      const handleSubmit = () => {
        onSubmit('Esta es una recomendación de prueba que cumple con el mínimo de caracteres requeridos.');
      };
      
      return (
        <div data-testid="recommendation-form">
          <h2>Escribe una recomendación</h2>
          <textarea 
            data-testid="recommendation-textarea" 
            placeholder="Escribe tu recomendación profesional (mínimo 50 caracteres)..."
          />
          <button 
            data-testid="submit-button" 
            onClick={handleSubmit}
          >
            Enviar Recomendación
          </button>
        </div>
      );
    }
  };
});

jest.mock('../components/molecules/RecommendationItem', () => {
  return {
    RecommendationItem: ({ author, content }: any) => (
      <div data-testid="recommendation-item">
        <p>{content}</p>
        <div>
          <p>{author.name}</p>
          <p>{author.position} en {author.company}</p>
        </div>
      </div>
    )
  };
});

// Mock de los datos de recomendaciones
jest.mock('../mocks/recommendation.mock', () => {
  return {
    mockTargetUser: {
      name: 'Alex Mitchell',
      position: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      avatarUrl: '/images/avatars/alex-mitchell.jpg'
    },
    mockExistingRecommendations: [
      {
        id: '1',
        author: {
          name: 'Sarah Johnson',
          position: 'Product Manager',
          company: 'InnovateTech',
          avatarUrl: '/images/avatars/sarah-johnson.jpg'
        },
        content: 'Alex es un excepcional frontend developer que constantemente entrega trabajo de alta calidad.',
        date: new Date('2025-03-15')
      },
      {
        id: '2',
        author: {
          name: 'Michael Chen',
          position: 'Tech Lead',
          company: 'WebFlow Solutions',
          avatarUrl: '/images/avatars/michael-chen.jpg'
        },
        content: 'Tuve el placer de trabajar con Alex en varios proyectos.',
        date: new Date('2025-03-10')
      }
    ]
  };
});

// Mock de console.log para evitar salida en consola durante las pruebas
const originalConsoleLog = console.log;
const mockConsoleLog = jest.fn();

describe('Prueba de integración - Página de recomendaciones', () => {
  beforeEach(() => {
    console.log = mockConsoleLog;
  });

  afterEach(() => {
    console.log = originalConsoleLog;
    jest.clearAllMocks();
  });

  it('debe renderizar el perfil del usuario correctamente', () => {
    render(<RecommendationsPage />);
    
    // Verificar que se muestra el perfil del usuario
    const userProfileSection = screen.getByTestId('user-profile');
    expect(userProfileSection).toBeInTheDocument();
    
    // Verificar que se muestra el nombre y cargo del usuario
    const userName = screen.getByText('Alex Mitchell');
    expect(userName).toBeInTheDocument();
  });

  it('debe renderizar el formulario de recomendaciones correctamente', () => {
    render(<RecommendationsPage />);
    
    // Verificar que se muestra el formulario de recomendaciones
    const recommendationForm = screen.getByTestId('recommendation-form');
    expect(recommendationForm).toBeInTheDocument();
    
    // Verificar que se muestra el área de texto y el botón de envío
    const textArea = screen.getByTestId('recommendation-textarea');
    expect(textArea).toBeInTheDocument();
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
  });

  it('debe renderizar las recomendaciones existentes correctamente', () => {
    render(<RecommendationsPage />);
    
    // Verificar que se muestran las tarjetas de recomendaciones
    const recommendationItems = screen.getAllByTestId('recommendation-item');
    expect(recommendationItems.length).toBe(2);
    
    // Verificar que se muestra al menos una recomendación con su autor
    const recommendationAuthor = screen.getByText('Sarah Johnson');
    expect(recommendationAuthor).toBeInTheDocument();
  });

  it('debe permitir enviar una nueva recomendación', () => {
    render(<RecommendationsPage />);
    
    // Encontrar el botón de envío y hacer clic
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    // Verificar que se llamó a console.log (simulando el envío)
    expect(mockConsoleLog).toHaveBeenCalled();
  });
});
