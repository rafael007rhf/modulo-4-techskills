export interface UsuarioRepositorio {
  id: number;
  nome: string;
  email: string;
}
export interface Repositorio<T> {
  buscarPorId(id: number): T;
}
export function criarUsuarioService<T extends UsuarioRepositorio | null | Promise<UsuarioRepositorio | null>>(
  repositorio: Repositorio<T>
): { buscarUsuario(id: number): T } {
  return {
    buscarUsuario(id: number): T {
      return repositorio.buscarPorId(id);
    }
  };
}
