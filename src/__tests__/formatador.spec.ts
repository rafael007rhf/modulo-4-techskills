import { formatarNome } from '../formatador';

describe('formatarNome', () => {
  test.each([
    { nome: 'maria', esperado: 'Maria' }, { nome: ' joão ', esperado: 'João' },
    { nome: 'ANA', esperado: 'Ana' }, { nome: '', esperado: '' }
  ])('deve retornar "$esperado" quando o nome recebido for "$nome"', ({ nome, esperado }) => {
    // Arrange: nome e esperado vêm da tabela.
    // Act
    const resultado = formatarNome(nome);
    // Assert
    expect(resultado).toBe(esperado);
  });
});
