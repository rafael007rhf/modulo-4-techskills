import { calcularFrete } from '../calcularFrete';

describe('calcularFrete', () => {
  test.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY])(
    'deve rejeitar o peso quando receber %p', (peso) => {
      // Arrange
      const cep = '01001000';
      // Act
      const executar = () => calcularFrete(cep, peso);
      // Assert
      expect(executar).toThrow('Peso deve ser um número finito maior que zero');
    }
  );
  test.each([
    { peso: 0.5, esperado: 10 }, { peso: 1, esperado: 10 },
    { peso: 2, esperado: 12 }, { peso: 1.5, esperado: 11 },
    { peso: 5, esperado: 18 }, { peso: 5.01, esperado: 25 }
  ])('deve retornar R$ $esperado quando o peso for $peso kg', ({ peso, esperado }) => {
    // Arrange
    const cep = '01001000';
    // Act
    const resultado = calcularFrete(cep, peso);
    // Assert
    expect(resultado).toBe(esperado);
  });
  it('deve acrescentar R$ 5 quando o CEP começar com 9', () => {
    // Arrange
    const cep = '90010-000', peso = 2;
    // Act
    const resultado = calcularFrete(cep, peso);
    // Assert
    expect(resultado).toBe(17);
  });
  test.each(['123', '', 'abcdefgh', null, undefined])(
    'deve lançar erro quando o CEP for %p', (cep) => {
      // Arrange
      const peso = 1;
      // Act
      const executar = () => calcularFrete(cep, peso);
      // Assert
      expect(executar).toThrow('CEP inválido ou ausente');
    }
  );
});
