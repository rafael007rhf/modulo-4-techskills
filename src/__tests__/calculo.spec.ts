import { soma, subtrai } from '../calculo';

describe('soma', () => {
  test.each([
    { a: 2, b: 3, esperado: 5 }, { a: -1, b: 1, esperado: 0 },
    { a: 0, b: 0, esperado: 0 }
  ])('deve retornar $esperado quando somar $a e $b', ({ a, b, esperado }) => {
    // Arrange: dados da tabela.
    // Act
    const resultado = soma(a, b);
    // Assert
    expect(resultado).toBe(esperado);
  });
});
describe('subtrai', () => {
  it('deve retornar 3 quando subtrair 5 e 2', () => {
    // Arrange
    const a = 5, b = 2;
    // Act
    const resultado = subtrai(a, b);
    // Assert
    expect(resultado).toBe(3);
  });
});
