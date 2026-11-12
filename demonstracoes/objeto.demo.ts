import { criarUsuario } from '../src/criarUsuario';

it('demonstra a comparação completa anterior à adição do ID', () => {
  const resultado = criarUsuario('Maria', 30);
  expect(resultado).toEqual({ nome: 'Maria', idade: 30 });
});
it('mantém a comparação parcial após a adição do ID', () => {
  const resultado = criarUsuario('Maria', 30);
  expect(resultado).toMatchObject({ nome: 'Maria', idade: 30 });
});
