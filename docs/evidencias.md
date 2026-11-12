# Índice de evidências

Todas as saídas de execução foram capturadas de comandos reais. Logs originais do Jest/Node permanecem no idioma emitido pela ferramenta; documentação e explicações estão em português. Não foram usados os totais ilustrativos dos PDFs como resultados do projeto.

## Execuções das atividades

| Atividade | Evidência em evidencias/ | Resultado no estágio |
| --- | --- | --- |
| 1 | Respostas em docs/atividade-01.md | Teórica |
| 2 | atividade-02.txt | 1 suíte, 1 teste |
| 3 | atividade-03.txt | 4 suítes, 23 testes |
| 4 | atividade-04.txt | 1 suíte, 9 testes |
| 5 | atividade-05.txt e watch-uma-rodada.txt | 2 suítes, 13 testes; watch encerrado com q |
| 6 | atividade-06.txt | 1 suíte, 4 testes |
| 7 | atividade-07.txt | 1 suíte, 3 testes |
| 8 | cobertura-inicial.txt e cobertura-apos-08.txt | 43 → 47 testes |
| 9 | atividade-09.txt | 4 testes |
| 10 | atividade-10.txt | 17 testes |
| 11 | atividade-11.txt | 8 testes |
| 12 | atividade-12-antes-id.txt, atividade-12-apos-id-falha.txt, atividade-12-final.txt | 5 aprovados → 1 falha/4 aprovados → 6 aprovados |
| 13 | atividade-13.txt, contador-ordem-invertida.txt, contador-ordem-aleatoria.txt | 3 testes aprovados em cada execução |
| 14 | atividade-14.txt | 4 testes |
| 15 | atividade-15.txt | 4 testes |
| 16 | snapshot-01-original.txt até snapshot-04-confirmado.txt | Geração, falha, atualização e aprovação |
| 17 | atividade-17.txt | 5 testes |

Os registros de estágio não são uma soma para a contagem final: algumas funções são exercitadas em mais de uma etapa. O JSON final é a referência única para 17 suítes e 99 casos.

## Falhas pedagógicas isoladas

| Arquivo | O que comprovou |
| --- | --- |
| falha-arrays-toBe.txt | Arrays de mesmo conteúdo têm referências distintas |
| falha-objeto-com-id.txt | toEqual antigo falha e toMatchObject continua passando |
| falha-contador-sem-hooks.txt | Segundo incremento recebe 2 em vez de 1 |
| promise-sem-await.txt | Asserção sem await causa rejeição não tratada neste runtime |
| promise-sem-await-com-assertions.txt | Acrescentar contagem não conserta o await ausente |
| promise-atrasada-com-assertions.txt | Contagem detecta 0 asserções antes de a promessa tardia resolver |
| snapshot-02-diff.txt | Snapshot divergente foi rejeitado |
| snapshot-diff.patch | Diff real entre o arquivo original e o atualizado |
| mutacao-sum-detectada.txt | Trocar + por - produz -1 e o teste falha |
| mutacao-sum-revertida.txt | Regra restaurada e teste aprovado |

As falhas são esperadas somente nas demonstrações selecionadas por jest.demo.config.js ou nas alterações temporárias do script. `npm run demo` verifica os códigos de saída esperados, restaura os arquivos temporários com finally e aceita deliberadamente a mudança de mensagem do exercício 16. Não execute esse comando ao mesmo tempo que outra sessão de Jest. Ele renova as evidências dessas demonstrações; não recria a história da primeira medição de cobertura, preservada separadamente.

## Validação final e dados

- testes-finais.txt: execução completa de npm test.
- resultados-finais.json: resultado estruturado da última execução completa com cobertura, contendo nomes e status de todos os casos.
- testes-verbose.txt e testes-detalhados.md: nomes de todos os testes; o segundo é derivado diretamente do JSON.
- testes-randomize-1713.txt e randomize-2026.txt: suíte completa aprovada com seeds 1713 e 2026.
- contador-ordem-invertida.source.txt: arquivo realmente usado na execução manualmente invertida, depois restaurado.
- tipos.txt e build.txt: tsc sem erros e compilação de produção.
- conferencia-entrega.txt: checagem dos relatórios, documentos, totais e reversão de mutações.
- instalacao-limpa.txt, teste-pacote-extraido.txt e tipos-pacote-extraido.txt: instalação real com npm ci após extrair o pacote em pasta separada, seguida de 17 suítes/99 testes/1 snapshot aprovados e typecheck sem erros.
- cobertura-inicial/, cobertura-apos-08/ e cobertura-final/: HTML, LCOV, JSON completo e resumo.
- snapshot-original.snap.txt e snapshot-atualizado.snap.txt: cópias dos snapshots efetivamente gerados.
- fontes-sha256.json: hashes dos PDFs originais preservados em materiais/.
- auditoria-producao.json: consulta real de npm audit --omit=dev; nenhuma vulnerabilidade de produção reportada nessa consulta.

Os logs gerados por registrar.cjs incluem comando equivalente, data UTC, versão Node e código de saída. Os logs capturados diretamente pelo PowerShell preservam a chamada npm. Os horários UTC podem ser convertidos para São Paulo subtraindo três horas na data da execução.
