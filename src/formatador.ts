export function formatarNome(nome: string): string {
  const limpo = nome.trim().toLocaleLowerCase('pt-BR');
  return limpo.charAt(0).toLocaleUpperCase('pt-BR') + limpo.slice(1);
}
