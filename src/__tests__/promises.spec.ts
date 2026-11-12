import { buscarDados } from '../buscarDados';

describe('buscarDados com resolves', () => {
  it('deve resolver com o objeto completo quando buscar os dados', async () => {
    // Arrange
    expect.assertions(1);
    // Act
    const promessa = buscarDados();
    // Assert
    await expect(promessa).resolves.toEqual({ ok: true });
  });
  it('deve possuir ok quando a promessa resolver', async () => {
    // Arrange
    const promessa = buscarDados();
    // Act / Assert
    await expect(promessa).resolves.toHaveProperty('ok');
  });
  it('deve conter ok verdadeiro quando a promessa resolver', async () => {
    // Arrange
    const promessa = buscarDados();
    // Act / Assert
    await expect(promessa).resolves.toMatchObject({ ok: true });
  });
  it('deve devolver Promise quando buscar os dados', async () => {
    // Arrange / Act
    const promessa = buscarDados();
    // Assert
    expect(promessa).toBeInstanceOf(Promise);
    await promessa;
  });
});
