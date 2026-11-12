import { buscarDados } from '../src/buscarDados';

it('demonstra o resultado sem await com a implementação incorreta', () => {
  expect(buscarDados()).resolves.toEqual({ ok: true });
});
