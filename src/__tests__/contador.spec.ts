import { incrementar, obterValor, reiniciar } from '../contador';

describe('contador', () => {
  beforeEach(() => { reiniciar(); });
  afterEach(() => { console.log('valor ao final do teste:', obterValor()); });
  it('deve retornar 1 quando incrementar uma vez', () => {
    // Arrange: contador reiniciado pelo beforeEach.
    // Act
    const resultado = incrementar();
    // Assert
    expect(resultado).toBe(1);
  });
  it('deve retornar 3 quando incrementar três vezes', () => {
    // Arrange: contador reiniciado pelo beforeEach.
    // Act
    incrementar();
    incrementar();
    const resultado = incrementar();
    // Assert
    expect(resultado).toBe(3);
  });
  it('deve começar em zero quando iniciar outro teste', () => {
    // Arrange: contador reiniciado pelo beforeEach.
    // Act
    const resultado = obterValor();
    // Assert
    expect(resultado).toBe(0);
  });
});
