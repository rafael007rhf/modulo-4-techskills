import { subtract } from './subtract';

export function montarOperacao(a: number, b: number): {
  operacao: string; valores: [number, number]; resultado: number;
} {
  return { operacao: 'subtração', valores: [a, b], resultado: subtract(a, b) };
}
