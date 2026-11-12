# Atividade 11 — Arrays

Fonte: terceiro PDF, página 6. `filtrarPares(numeros)` usa filter e preserva ordem, repetição e entrada original.

| Entrada | Resultado/verificação | Matcher |
| --- | --- | --- |
| [1,2,3,4,5,6] | [2,4,6] | toEqual |
| [1,3,5] | [] | toEqual |
| [] | [] | toEqual |
| [-4,-3,0,7] | [-4,0] | toEqual |
| [10,11,12] | contém 12 | toContain |
| [2,4,6,8] | quatro elementos | toHaveLength |
| [1,3,5] | não contém 2 | not.toContain |

Zero é par porque seu resto por 2 é zero. Negativos pares também satisfazem essa regra. Um teste adicional verifica que a entrada não foi alterada e que a saída é uma nova referência.

A demonstração `demonstracoes/arrays.demo.ts` compara a saída com `toBe([2,4])`. Ela foi executada e falhou de verdade: os arrays têm conteúdo igual e referências diferentes. `toBe` usa Object.is; `toEqual` compara recursivamente o conteúdo. Não se trata de toBe ser proibido para objetos: ele é adequado quando a intenção é conferir a mesma referência.

Evidências: `atividade-11.txt` (8 testes aprovados) e `falha-arrays-toBe.txt` (1 falha esperada). A demonstração fica fora do testMatch da suíte definitiva e pode ser reproduzida pelo script `npm run demo`.
