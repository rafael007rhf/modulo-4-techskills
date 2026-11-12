# Cobertura — medições reais

As medições foram executadas em 12/11/2026, com Node 24.20.0, Jest 30.5.2 e ts-jest 29.4.15. Os valores abaixo vêm dos arquivos coverage-summary.json, não dos exemplos dos PDFs.

| Medição | Suítes/testes | Statements | Branches | Functions | Lines |
| --- | --- | --- | --- | --- | --- |
| Inicial, atividades 2–7 | 8 / 43 | 97,22% (35/36) | 93,75% (15/16) | 100% (10/10) | 97,22% (35/36) |
| Após melhoria da atividade 8 | 8 / 47 | 100% (36/36) | 100% (16/16) | 100% (10/10) | 100% (36/36) |
| Final, atividades 2–17 | 17 / 99 | 100% (72/72) | 100% (24/24) | 100% (25/25) | 100% (69/69) |

A comparação direta é entre as duas primeiras linhas, que têm o mesmo código de produção. Houve aumento de **2,78 pontos percentuais** em instruções/linhas e **6,25 pontos percentuais** em ramos, sem mudança em funções. A última linha tem escopo maior, com novas rotas e módulos, e não deve ser usada como se tivesse o mesmo denominador inicial.

## Lacuna encontrada e correção

Não havia funções totalmente sem teste: 10/10 já eram chamadas. O arquivo de menor cobertura de ramos era calcularFrete.ts, com 13/14 = 92,85%; divide tinha ambos os ramos cobertos. A instrução da linha 6, que lança erro para peso não finito ou menor/igual a zero, não havia sido executada. Os testes iniciais já cobriam todas as linhas da tabela de frete, limites de 1 e 5 kg e CEP inválido; faltava a validação adicional de peso decidida na implementação.

Após a medição inicial foram escritos quatro casos novos para peso 0, -1, NaN e Infinity. Assim, a condição de erro e seus operandos foram exercitados e a linha 6 passou a ser coberta. A ausência dessa linha foi conferida no JSON de instrumentação e no relatório HTML inicial. Nenhum ramo ou linha de produção permanece não coberto na medição final.

## Como conferir os relatórios

- [Inicial: índice HTML](../evidencias/cobertura-inicial/lcov-report/index.html), [frete inicial](../evidencias/cobertura-inicial/lcov-report/calcularFrete.ts.html), [resumo JSON](../evidencias/cobertura-inicial/coverage-summary.json) e [log](../evidencias/cobertura-inicial.txt).
- [Após exercício 8: índice HTML](../evidencias/cobertura-apos-08/lcov-report/index.html), [resumo JSON](../evidencias/cobertura-apos-08/coverage-summary.json) e [log](../evidencias/cobertura-apos-08.txt).
- [Final: índice HTML](../evidencias/cobertura-final/lcov-report/index.html), [resumo JSON](../evidencias/cobertura-final/coverage-summary.json) e [log](../evidencias/cobertura-final.txt).

Abra index.html em um navegador e clique no nome de um arquivo para ver linhas e decisões. Cada relatório inclui o código fonte daquele estágio; por exemplo, o app inicial contém apenas /ping e 404, enquanto o final também tem saudação e soma. Os índices e os 8, 8 e 15 relatórios de fonte vinculados foram lidos e conferidos, conforme conferencia-entrega.txt.

Comandos usados: `npm test -- --coverage --coverageDirectory=evidencias/cobertura-inicial`; depois, o mesmo comando com `cobertura-apos-08`; na validação final, `cobertura-final`. `npm run test:coverage` gera um novo relatório em coverage/, sem sobrescrever as evidências históricas.

## Interpretação e limites

Statements mede instruções, branches mede alternativas de decisão, functions mede funções chamadas e lines mede linhas executadas. “Uncovered Line #s” aponta linhas sem execução. O transpiler pode gerar instruções adicionais, como nos reexports de calculo.ts; por isso os totais de instruções e linhas não precisam coincidir.

O piso global é 80/70/80/80 para statements/branches/functions/lines. Server.ts é excluído por ser apenas inicialização; testes são excluídos por não serem código de produção. Scripts e demonstrações também ficam fora do escopo src. Uma taxa de 100% não valida requisitos ausentes nem a força de todas as asserções. A mutação temporária de sum comprova concretamente que ao menos aquela regra defeituosa é detectada, sem pretender substituir uma campanha completa de teste de mutação.
