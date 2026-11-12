import { criarUsuarioService } from '../usuarioService';

describe('criarUsuarioService', () => {
  beforeEach(() => { jest.clearAllMocks(); });
  it('deve retornar o usuário quando o repositório encontrar o ID', () => {
    // Arrange
    const usuario = { id: 1, nome: 'Maria', email: 'maria@exemplo.com' };
    const repositorio = { buscarPorId: jest.fn().mockReturnValue(usuario) };
    const service = criarUsuarioService(repositorio);
    // Act
    const resultado = service.buscarUsuario(1);
    // Assert
    expect(resultado).toEqual(usuario);
    expect(repositorio.buscarPorId).toHaveBeenCalled();
    expect(repositorio.buscarPorId).toHaveBeenCalledWith(1);
    expect(repositorio.buscarPorId).toHaveBeenCalledTimes(1);
  });
  it('deve retornar null quando o usuário não existir', () => {
    // Arrange
    const repositorio = { buscarPorId: jest.fn().mockReturnValue(null) };
    const service = criarUsuarioService(repositorio);
    // Act
    const resultado = service.buscarUsuario(99);
    // Assert
    expect(resultado).toBeNull();
    expect(repositorio.buscarPorId).toHaveBeenCalledWith(99);
    expect(repositorio.buscarPorId).toHaveBeenCalledTimes(1);
  });
  it('deve aguardar o usuário quando o repositório for assíncrono', async () => {
    // Arrange
    const usuario = { id: 2, nome: 'Ana', email: 'ana@exemplo.com' };
    const repositorio = { buscarPorId: jest.fn().mockResolvedValue(usuario) };
    const service = criarUsuarioService(repositorio);
    // Act
    const resultado = await service.buscarUsuario(2);
    // Assert
    expect(resultado).toEqual(usuario);
    expect(repositorio.buscarPorId).toHaveBeenCalledWith(2);
    expect(repositorio.buscarPorId).toHaveBeenCalledTimes(1);
  });
});
