import { criarEnviarEmail } from '../emailService';

describe('criarEnviarEmail', () => {
  const apiEnviar = jest.fn();
  beforeEach(() => { jest.clearAllMocks(); });
  it('deve retornar sucesso quando enviar o e-mail de boas-vindas', () => {
    // Arrange
    apiEnviar.mockReturnValue(true);
    const enviarEmail = criarEnviarEmail(apiEnviar);
    const usuario = { nome: 'Maria', email: 'maria@exemplo.com' };
    // Act
    const resultado = enviarEmail(usuario);
    // Assert
    expect(resultado).toBe(true);
    expect(apiEnviar).toHaveBeenCalled();
    expect(apiEnviar).toHaveBeenCalledWith('maria@exemplo.com', 'Bem-vindo!');
    expect(apiEnviar).toHaveBeenCalledTimes(1);
  });
  it('deve chamar uma vez quando enviar para um usuário', () => {
    // Arrange
    apiEnviar.mockReturnValue(true);
    const enviarEmail = criarEnviarEmail(apiEnviar);
    // Act
    enviarEmail({ nome: 'João', email: 'joao@exemplo.com' });
    // Assert
    expect(apiEnviar).toHaveBeenCalledTimes(1);
  });
  it('deve usar cada endereço quando enviar para dois usuários', () => {
    // Arrange
    apiEnviar.mockReturnValue(true);
    const enviarEmail = criarEnviarEmail(apiEnviar);
    // Act
    enviarEmail({ nome: 'Maria', email: 'maria@exemplo.com' });
    enviarEmail({ nome: 'João', email: 'joao@exemplo.com' });
    // Assert
    expect(apiEnviar).toHaveBeenNthCalledWith(1, 'maria@exemplo.com', 'Bem-vindo!');
    expect(apiEnviar).toHaveBeenNthCalledWith(2, 'joao@exemplo.com', 'Bem-vindo!');
    expect(apiEnviar).toHaveBeenCalledTimes(2);
  });
  it('deve resolver sucesso quando a API de envio for assíncrona', async () => {
    // Arrange
    apiEnviar.mockResolvedValue(true);
    const enviarEmail = criarEnviarEmail(apiEnviar);
    // Act
    const promessa = enviarEmail({ nome: 'Maria', email: 'maria@exemplo.com' });
    // Assert
    await expect(promessa).resolves.toBe(true);
    expect(apiEnviar).toHaveBeenCalledTimes(1);
  });
  it('deve propagar o mesmo erro quando o envio falhar', async () => {
    // Arrange
    const erro = new Error('falha ao enviar e-mail');
    apiEnviar.mockRejectedValue(erro);
    const enviarEmail = criarEnviarEmail(apiEnviar);
    // Act
    const promessa = enviarEmail({ nome: 'Maria', email: 'maria@exemplo.com' });
    // Assert
    await expect(promessa).rejects.toBe(erro);
    expect(apiEnviar).toHaveBeenCalledWith('maria@exemplo.com', 'Bem-vindo!');
    expect(apiEnviar).toHaveBeenCalledTimes(1);
  });
});
