export function calcularFrete(cep: string | null | undefined, peso: number): number {
  if (typeof cep !== 'string' || !/^\d{5}-?\d{3}$/.test(cep)) {
    throw new Error('CEP inválido ou ausente');
  }
  if (!Number.isFinite(peso) || peso <= 0) {
    throw new Error('Peso deve ser um número finito maior que zero');
  }
  let valor: number;
  if (peso <= 1) {
    valor = 10;
  } else if (peso <= 5) {
    valor = 10 + 2 * (peso - 1);
  } else {
    valor = 25;
  }
  return valor + (cep.startsWith('9') ? 5 : 0);
}
