import request from 'supertest';
import app from '../app';

describe('GET /ping', () => {
  it('deve retornar status 200 e corpo ok quando consultar a saúde da API', async () => {
    // Arrange
    const cliente = request(app);
    // Act
    const resposta = await cliente.get('/ping');
    // Assert
    expect(resposta.status).toBe(200);
    expect(resposta.body).toEqual({ status: 'ok' });
  });
  it('deve retornar JSON quando consultar a saúde da API', async () => {
    // Arrange
    const cliente = request(app);
    // Act
    const resposta = await cliente.get('/ping');
    // Assert
    expect(resposta.status).toBe(200);
    expect(resposta.body).toEqual({ status: 'ok' });
    expect(resposta.headers['content-type']).toMatch(/application\/json/);
  });
  it('deve retornar 404 quando a rota não existir', async () => {
    // Arrange
    const cliente = request(app);
    // Act
    const resposta = await cliente.get('/rota-inexistente');
    // Assert
    expect(resposta.status).toBe(404);
    expect(resposta.body).toEqual({ erro: 'Rota não encontrada' });
  });
  it('deve retornar 404 quando o método POST não estiver registrado em ping', async () => {
    // Arrange
    const cliente = request(app);
    // Act
    const resposta = await cliente.post('/ping');
    // Assert
    expect(resposta.status).toBe(404);
    expect(resposta.body).toEqual({ erro: 'Rota não encontrada' });
  });
});
