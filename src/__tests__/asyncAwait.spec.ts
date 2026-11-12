import { buscarDados, buscarDadosComErro } from '../buscarDados';

describe('buscarDados com async/await', () => {
  it('deve retornar ok verdadeiro quando aguardar os dados', async () => {
    // Arrange
    expect.assertions(1);
    // Act
    const resultado = await buscarDados();
    // Assert
    expect(resultado).toEqual({ ok: true });
  });
});
describe('buscarDadosComErro', () => {
  it('deve rejeitar com a mensagem quando a busca falhar', async () => {
    // Arrange
    const promessa = buscarDadosComErro();
    // Act / Assert
    await expect(promessa).rejects.toThrow('falha ao buscar dados');
  });
  it('deve rejeitar com Error quando a busca falhar', async () => {
    // Arrange
    const promessa = buscarDadosComErro();
    // Act / Assert
    await expect(promessa).rejects.toBeInstanceOf(Error);
  });
  it('deve capturar Error quando aguardar a rejeição em try/catch', async () => {
    // Arrange
    expect.assertions(1);
    try {
      // Act
      await buscarDadosComErro();
    } catch (erro: unknown) {
      // Assert
      expect(erro).toBeInstanceOf(Error);
    }
  });
});
