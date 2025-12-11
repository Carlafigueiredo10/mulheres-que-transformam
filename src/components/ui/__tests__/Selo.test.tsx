import { render, screen } from '@testing-library/react';
import Selo from '../Selo';

describe('Componente Selo', () => {
  it('deve renderizar selo Participante corretamente', () => {
    render(<Selo nivel="participante" />);

    expect(screen.getByText('Participante')).toBeInTheDocument();
  });

  it('deve renderizar selo Ativa corretamente', () => {
    render(<Selo nivel="ativa" />);

    expect(screen.getByText('Ativa')).toBeInTheDocument();
  });

  it('deve renderizar selo Inspiradora corretamente', () => {
    render(<Selo nivel="inspiradora" />);

    expect(screen.getByText('Inspiradora')).toBeInTheDocument();
  });

  it('deve aplicar tamanho pequeno quando size="sm"', () => {
    const { container } = render(<Selo nivel="participante" size="sm" />);

    // Verifica se contém classes de tamanho pequeno
    expect(container.firstChild).toHaveClass('px-2', 'py-1', 'text-xs');
  });

  it('deve aplicar tamanho médio quando size="md" (padrão)', () => {
    const { container } = render(<Selo nivel="participante" />);

    // Verifica se contém classes de tamanho médio
    expect(container.firstChild).toHaveClass('px-3', 'py-1.5', 'text-sm');
  });

  it('deve aplicar tamanho grande quando size="lg"', () => {
    const { container } = render(<Selo nivel="participante" size="lg" />);

    // Verifica se contém classes de tamanho grande
    expect(container.firstChild).toHaveClass('px-4', 'py-2', 'text-base');
  });

  it('não deve mostrar label quando showLabel=false', () => {
    render(<Selo nivel="participante" showLabel={false} />);

    expect(screen.queryByText('Participante')).not.toBeInTheDocument();
  });

  it('deve aplicar cores corretas para cada nível', () => {
    const { rerender, container } = render(<Selo nivel="participante" />);
    expect(container.firstChild).toHaveClass('bg-green-100', 'text-green-800');

    rerender(<Selo nivel="ativa" />);
    expect(container.firstChild).toHaveClass('bg-purple-100', 'text-purple-800');

    rerender(<Selo nivel="inspiradora" />);
    expect(container.firstChild).toHaveClass('bg-yellow-100', 'text-yellow-800');
  });
});
