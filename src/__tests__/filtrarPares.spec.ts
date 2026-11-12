import { filtrarPares } from '../filtrarPares';

describe('filtrarPares', () => {
  test.each([
    { entrada: [1, 2, 3, 4, 5, 6], esperado: [2, 4, 6] },
    { entrada: [1, 3, 5], esperado: [] },
    { entrada: [], esperado: [] },
    { entrada: [-4, -3, 0, 7], esperado: [-4, 0] }
  ])('deve retornar $esperado quando filtrar $entrada', ({ entrada, esperado }) => {
    // Arrange: entrada e esperado da tabela.
    // Act
    const resultado = filtrarPares(entrada);
    // Assert
    expect(resultado).toEqual(esperado);
  });
  it('deve conter 12 quando filtrar 10, 11 e 12', () => {
    // Arrange
    const entrada = [10, 11, 12];
    // Act
    const resultado = filtrarPares(entrada);
    // Assert
    expect(resultado).toContain(12);
  });
  it('deve manter quatro elementos quando todos forem pares', () => {
    // Arrange
    const entrada = [2, 4, 6, 8];
    // Act
    const resultado = filtrarPares(entrada);
    // Assert
    expect(resultado).toHaveLength(4);
  });
  it('deve excluir 2 quando só houver ímpares', () => {
    // Arrange
    const entrada = [1, 3, 5];
    // Act
    const resultado = filtrarPares(entrada);
    // Assert
    expect(resultado).not.toContain(2);
  });
  it('deve criar outro array quando filtrar sem modificar a entrada', () => {
    // Arrange
    const entrada = [2, 1, 2, 0];
    // Act
    const resultado = filtrarPares(entrada);
    // Assert
    expect(resultado).not.toBe(entrada);
    expect(resultado).toEqual([2, 2, 0]);
    expect(entrada).toEqual([2, 1, 2, 0]);
  });
});
