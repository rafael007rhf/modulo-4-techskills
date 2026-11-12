import { incrementar } from '../src/contador';

describe('Contador sem beforeEach', () => {
  it('deve retornar 1 após um incremento', () => {
    expect(incrementar()).toBe(1);
  });
  it('deve retornar 1 após um incremento novamente', () => {
    expect(incrementar()).toBe(1);
  });
});
