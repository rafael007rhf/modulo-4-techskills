import { divide } from '../divide';

describe('divide', () => {
  test.each([
    { a: 10, b: 2, esperado: 5 }, { a: -10, b: 2, esperado: -5 },
    { a: 0, b: 5, esperado: 0 }, { a: 7, b: 2, esperado: 3.5 }
  ])('deve retornar $esperado quando dividir $a por $b', ({ a, b, esperado }) => {
    // Arrange: dados da tabela.
    // Act
    const resultado = divide(a, b);
    // Assert
    expect(resultado).toBe(esperado);
  });
  it('deve lançar um erro quando o divisor for zero', () => {
    // Arrange
    const executar = () => divide(10, 0);
    // Act / Assert
    expect(executar).toThrow();
  });
  it('deve informar a mensagem quando o divisor for zero', () => {
    // Arrange
    const executar = () => divide(10, 0);
    // Act / Assert
    expect(executar).toThrow('divisão por zero');
  });
  it('deve corresponder à expressão quando a mensagem mencionar zero', () => {
    // Arrange
    const executar = () => divide(10, 0);
    // Act / Assert
    expect(executar).toThrow(/zero/);
  });
  it('deve lançar Error quando o divisor for zero', () => {
    // Arrange
    const executar = () => divide(10, 0);
    // Act / Assert
    expect(executar).toThrow(Error);
  });
  it('deve executar sem erro quando dividir 10 por 5', () => {
    // Arrange
    const executar = () => divide(10, 5);
    // Act / Assert
    expect(executar).not.toThrow();
  });
});
