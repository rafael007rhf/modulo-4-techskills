import { sum } from '../sum';

describe('sum', () => {
  it('deve retornar 5 quando somar 2 e 3', () => {
    // Arrange
    const a = 2;
    const b = 3;
    // Act
    const resultado = sum(a, b);
    // Assert
    expect(resultado).toBe(5);
  });
});
