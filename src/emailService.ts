export interface Destinatario {
  nome: string;
  email: string;
}
export function criarEnviarEmail<T>(apiEnviar: (email: string, assunto: string) => T): (usuario: Destinatario) => T {
  return function enviarEmail(usuario: Destinatario): T {
    return apiEnviar(usuario.email, 'Bem-vindo!');
  };
}
