import request from 'supertest';
import app from '../app';

describe('GET /saudacao/:nome', () => {
  test.each([
    { nome: 'Maria', mensagem: 'Olá, Maria' },
    { nome: 'Ana Paula', mensagem: 'Olá, Ana Paula' }
  ])('deve retornar "$mensagem" quando o nome for "$nome"', async ({ nome, mensagem }) => {
    // Arrange
    const caminho = '/saudacao/' + encodeURIComponent(nome);
    // Act
    const resposta = await request(app).get(caminho);
    // Assert
    expect(resposta.status).toBe(200);
    expect(resposta.body).toEqual({ mensagem });
  });
});
describe('POST /soma', () => {
  test.each([
    { a: 2, b: 3, resultado: 5 }, { a: -5, b: 2, resultado: -3 },
    { a: 0, b: 0, resultado: 0 }, { a: 0.1, b: 0.2, resultado: 0.30000000000000004 }
  ])('deve retornar $resultado quando somar $a e $b', async ({ a, b, resultado }) => {
    // Arrange
    const corpo = { a, b };
    // Act
    const resposta = await request(app).post('/soma').send(corpo);
    // Assert
    expect(resposta.status).toBe(200);
    expect(resposta.body).toEqual({ resultado });
  });
  test.each([
    { caso: 'b ausente', corpo: { a: 2 } },
    { caso: 'a inválido', corpo: { a: 'x', b: 3 } },
    { caso: 'a ausente', corpo: { b: 3 } },
    { caso: 'b inválido', corpo: { a: 2, b: '3' } },
    { caso: 'a nulo', corpo: { a: null, b: 3 } },
    { caso: 'a booleano', corpo: { a: true, b: 3 } },
    { caso: 'corpo vazio', corpo: {} }
  ])('deve retornar 400 quando receber $caso', async ({ corpo }) => {
    // Arrange: corpo inválido da tabela.
    // Act
    const resposta = await request(app).post('/soma').send(corpo);
    // Assert
    expect(resposta.status).toBe(400);
    expect(resposta.body).toEqual({ erro: 'Os campos a e b devem ser números finitos' });
  });
  it('deve retornar 400 quando não receber um corpo JSON', async () => {
    // Arrange
    const cliente = request(app);
    // Act
    const resposta = await cliente.post('/soma');
    // Assert
    expect(resposta.status).toBe(400);
    expect(resposta.body).toEqual({ erro: 'Os campos a e b devem ser números finitos' });
  });
  test.each([
    { corpo: '{"a":1e400,"b":3}' }, { corpo: '{"a":2,"b":1e400}' }
  ])('deve retornar 400 quando um número JSON exceder o limite finito: $corpo', async ({ corpo }) => {
    // Arrange
    const cliente = request(app);
    // Act
    const resposta = await cliente.post('/soma').type('json').send(corpo);
    // Assert
    expect(resposta.status).toBe(400);
    expect(resposta.body).toEqual({ erro: 'Os campos a e b devem ser números finitos' });
  });
});
describe('Rota inexistente', () => {
  it('deve retornar 404 quando consultar uma rota não registrada', async () => {
    // Arrange
    const caminho = '/rota-inexistente';
    // Act
    const resposta = await request(app).get(caminho);
    // Assert
    expect(resposta.status).toBe(404);
    expect(resposta.body).toEqual({ erro: 'Rota não encontrada' });
  });
});
