import { subtract } from '../subtract';

describe('subtract', () => {
  it('deve retornar 6 quando subtrair dois positivos', () => {
    // Arrange
    const a = 10;
    const b = 4;
    // Act
    const resultado = subtract(a, b);
    // Assert
    expect(resultado).toBe(6);
  });
  it('deve retornar -5 quando o subtraendo for maior', () => {
    // Arrange
    const a = 3;
    const b = 8;
    // Act
    const resultado = subtract(a, b);
    // Assert
    expect(resultado).toBe(-5);
  });
  it('deve retornar 7 quando subtrair zero', () => {
    // Arrange
    const a = 7;
    const b = 0;
    // Act
    const resultado = subtract(a, b);
    // Assert
    expect(resultado).toBe(7);
  });
  it('deve retornar -3 quando subtrair dois negativos', () => {
    // Arrange
    const a = -5;
    const b = -2;
    // Act
    const resultado = subtract(a, b);
    // Assert
    expect(resultado).toBe(-3);
  });
  it('deve retornar 3 quando subtrair decimais', () => {
    // Arrange
    const a = 5.5;
    const b = 2.5;
    // Act
    const resultado = subtract(a, b);
    // Assert
    expect(resultado).toBe(3);
  });
});
