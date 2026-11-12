import { buscarDados } from '../src/buscarDados';

it('demonstra a contagem de asserções sem aguardar a promessa', () => {
  expect.assertions(1);
  expect(buscarDados()).resolves.toEqual({ ok: true });
});
