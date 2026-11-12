# Atividade 13 — beforeEach e afterEach

Fonte: terceiro PDF, páginas 8–9. O módulo contador expõe incrementar, obterValor e reiniciar, com estado em memória.

A demonstração sem hooks executou dois incrementos esperando 1 em ambos. O primeiro passou e o segundo recebeu 2, pois a variável do módulo não foi reiniciada. Evidência real: `falha-contador-sem-hooks.txt`.

A suíte definitiva usa beforeEach(reiniciar), três testes independentes (um incremento, três incrementos e valor inicial zero) e afterEach que registra o valor final. `atividade-13.txt` preserva os logs 1, 3 e 0. O afterEach observa o valor; a restauração necessária para cada cenário ocorre no beforeEach.

A ordem dos três blocos it foi invertida no arquivo real, a suíte passou, e o arquivo foi restaurado em finally. A versão invertida foi preservada em `contador-ordem-invertida.source.txt` e a execução em `contador-ordem-invertida.txt`, com valores finais 0, 3 e 1. A execução aleatória com seed 1317 também aprovou os três testes; a suíte inteira foi randomizada com outras seeds no fechamento.

## Hooks

| Hook | Frequência |
| --- | --- |
| beforeAll | Uma vez antes dos testes no bloco |
| beforeEach | Antes de cada teste |
| afterEach | Depois de cada teste |
| afterAll | Uma vez após os testes no bloco |

## Perguntas

1. **Problema do estado compartilhado:** o resultado passa a depender de chamadas anteriores, impedindo executar um teste isoladamente ou mudar a ordem com confiança.
2. **beforeAll versus beforeEach:** beforeAll prepara uma vez; não restaura o contador entre casos. beforeEach fornece o mesmo ponto de partida a cada teste.
3. **E se mudar a ordem de testes dependentes?** Podem falhar, passar indevidamente ou produzir valores diferentes. A correção é isolar o estado e não escolher uma ordem conveniente.
4. **Recurso para limpar em afterEach:** restaurar um spy com jest.restoreAllMocks, desfazer timers falsos, remover um arquivo temporário ou encerrar um recurso criado pelo teste.
