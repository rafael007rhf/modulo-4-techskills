import { criarUsuario } from '../criarUsuario';

describe('criarUsuario', () => {
  it('deve gerar IDs distintos quando criar dois usuários', () => {
    // Arrange
    const nome = 'Maria', idade = 30;
    // Act
    const primeiro = criarUsuario(nome, idade);
    const segundo = criarUsuario(nome, idade);
    // Assert
    expect(primeiro.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    expect(segundo.id).not.toBe(primeiro.id);
  });
  it('deve retornar o objeto completo quando receber nome e idade', () => {
    // Arrange
    const nome = 'Maria', idade = 30;
    // Act
    const resultado = criarUsuario(nome, idade);
    // Assert
    expect(resultado).toEqual({ id: expect.any(String), nome: 'Maria', idade: 30 });
  });
  it('deve possuir nome quando criar o usuário', () => {
    // Arrange
    const nome = 'Maria', idade = 30;
    // Act
    const resultado = criarUsuario(nome, idade);
    // Assert
    expect(resultado).toHaveProperty('nome');
  });
  it('deve preservar idade 30 quando receber esse valor', () => {
    // Arrange
    const nome = 'Maria', idade = 30;
    // Act
    const resultado = criarUsuario(nome, idade);
    // Assert
    expect(resultado).toHaveProperty('idade', 30);
  });
  it('deve conter os campos solicitados quando comparar parcialmente', () => {
    // Arrange
    const nome = 'Maria', idade = 30;
    // Act
    const resultado = criarUsuario(nome, idade);
    // Assert
    expect(resultado).toMatchObject({ nome: 'Maria', idade: 30 });
  });
  it('deve possuir nome truthy quando receber Maria', () => {
    // Arrange
    const nome = 'Maria', idade = 30;
    // Act
    const resultado = criarUsuario(nome, idade);
    // Assert
    expect(resultado.nome).toBeTruthy();
  });
});
