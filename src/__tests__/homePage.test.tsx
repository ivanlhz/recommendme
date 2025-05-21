import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('should render the main heading', () => {
    render(<Home />);
    const heading = screen.getByText('RecommendMe');
    expect(heading).toBeInTheDocument();
  });

  it('should render the "Encuentra Algo Nuevo" card title', () => {
    render(<Home />);
    const cardTitle = screen.getByText('Encuentra Algo Nuevo');
    expect(cardTitle).toBeInTheDocument();
  });

  it('should render the "Buscar Recomendaciones" button', () => {
    render(<Home />);
    const searchButton = screen.getByRole('button', { name: /Buscar Recomendaciones/i });
    expect(searchButton).toBeInTheDocument();
  });
});
