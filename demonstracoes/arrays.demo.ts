import { filtrarPares } from '../src/filtrarPares';

it('demonstra a falha de toBe quando comparar arrays distintos', () => {
  // Arrange
  const entrada = [1, 2, 3, 4];
  // Act
  const resultado = filtrarPares(entrada);
  // Assert: propositalmente errado; isolado da suíte final.
  expect(resultado).toBe([2, 4]);
});
