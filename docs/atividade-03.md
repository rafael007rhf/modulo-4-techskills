# Atividade 3 — AAA e desafio de frete

Fonte: primeiro PDF, páginas 7–9. Código e testes em `src/subtract.ts`, `montarOperacao.ts`, `calcularFrete.ts` e suas suítes em `src/__tests__`.

## Subtração

| Entrada | Esperado |
| --- | --- |
| 10, 4 | 6 |
| 3, 8 | -5 |
| 7, 0 | 7 |
| -5, -2 | -3 |
| 5.5, 2.5 | 3 |

Cada linha possui seu próprio `it`, nome descritivo e comentários Arrange, Act e Assert. Arrange prepara os valores, Act executa a operação e Assert compara a saída com um valor esperado explícito.

`montarOperacao(10, 4)` retorna `{ operacao: 'subtração', valores: [10, 4], resultado: 6 }`. A operação escolhida é a subtração desta atividade. Os testes demonstram `toBe` no nome da operação, `toEqual` no objeto, `toBeTruthy` no resultado não zero, `toContain` nos operandos e `toBeNull` no resultado de uma busca ausente nos valores, normalizado com `?? null`. Zero pode ser um resultado válido e falsy; truthiness não substitui comparação matemática.

## Desafio opcional implementado

| Peso | CEP | Esperado |
| --- | --- | --- |
| 0,5 kg | 01001000 | R$ 10 |
| 1 kg, limite inferior | 01001000 | R$ 10 |
| 2 kg | 01001000 | R$ 12 |
| 1,5 kg | 01001000 | R$ 11 |
| 5 kg, limite superior | 01001000 | R$ 18 |
| 5,01 kg | 01001000 | R$ 25 |
| 2 kg | 90010-000 | R$ 17 |
| CEP curto, vazio, alfabético, null ou undefined | Inválido | Error |

CEP é uma string de oito dígitos, aceitando opcionalmente o hífen no padrão 00000-000. Não há consulta postal real nem confirmação de existência do endereço. O prefixo 9 recebe o acréscimo definido no enunciado.

O peso adicional é proporcional, sem arredondar para o próximo quilo: entre 1 e 5 kg, `10 + 2 * (peso - 1)`. Acima de 5 kg o frete base passa diretamente a R$ 25, preservando a tabela. Peso deve ser finito e maior que zero; rejeitar zero, negativo, NaN e infinito é uma decisão adicional para evitar entradas sem sentido físico. Esses quatro testes foram acrescentados na etapa 8, após medir a lacuna.

Evidência da primeira execução da atividade: `evidencias/atividade-03.txt`, com 4 suítes e 23 testes. A suíte final inclui também os quatro casos adicionais do exercício 8; o relatório final é a referência do estado entregue.
