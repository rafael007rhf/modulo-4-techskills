import { getMensagemBoasVindas } from '../mensagem';

describe('getMensagemBoasVindas', () => {
  it('deve gerar a mensagem quando receber Maria', () => {
    // Arrange
    const nome = 'Maria';
    // Act
    const mensagem = getMensagemBoasVindas(nome);
    // Assert
    expect(mensagem).toMatchSnapshot();
  });
});
