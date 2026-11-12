import { randomUUID } from 'node:crypto';

export interface Usuario {
  id: string;
  nome: string;
  idade: number;
}
export function criarUsuario(nome: string, idade: number): Usuario {
  return { id: randomUUID(), nome, idade };
}
