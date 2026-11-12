import { montarOperacao } from '../montarOperacao';

describe('montarOperacao', () => {
  it('deve informar a operação quando montar uma subtração', () => {
    // Arrange
    const a = 10, b = 4;
    // Act
    const resultado = montarOperacao(a, b);
    // Assert
    expect(resultado.operacao).toBe('subtração');
  });
  it('deve retornar o objeto completo quando receber dois números', () => {
    // Arrange
    const a = 10, b = 4;
    // Act
    const resultado = montarOperacao(a, b);
    // Assert
    expect(resultado).toEqual({ operacao: 'subtração', valores: [10, 4], resultado: 6 });
  });
  it('deve fornecer um resultado truthy quando a diferença não for zero', () => {
    // Arrange
    const a = 10, b = 4;
    // Act
    const resultado = montarOperacao(a, b);
    // Assert
    expect(resultado.resultado).toBeTruthy();
  });
  it('deve indicar ausência quando buscar um valor fora da operação', () => {
    // Arrange
    const operacao = montarOperacao(10, 4);
    // Act
    const resultado = operacao.valores.find((valor) => valor === 99) ?? null;
    // Assert
    expect(resultado).toBeNull();
  });
  it('deve conter o primeiro operando quando montar os valores', () => {
    // Arrange
    const a = 10, b = 4;
    // Act
    const resultado = montarOperacao(a, b);
    // Assert
    expect(resultado.valores).toContain(10);
  });
});
