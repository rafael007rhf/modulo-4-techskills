# Atividade 15 — Async e await

Fonte: terceiro PDF, página 11. A função buscarDados foi reescrita com async e retorna `{ ok: true }`. Por ser async, seu retorno externo é Promise. `buscarDadosComErro()` lança Error('falha ao buscar dados'), que se converte em rejeição da Promise.

A suíte `asyncAwait.spec.ts` verifica o objeto depois de await, a rejeição com rejects.toThrow('falha ao buscar dados'), o tipo com rejects.toBeInstanceOf(Error) e a captura por try/catch com expect.assertions(1). São 4 testes aprovados em `atividade-15.txt`.

No try/catch, a asserção ocorre dentro do catch. Se a função deixasse de rejeitar, o catch não executaria e um teste sem contagem poderia passar sem verificar nada. A contagem exige uma asserção e detecta esse falso positivo. A configuração global também exige ao menos uma asserção nos testes definitivos.

`await expect(promessa).rejects...` é mais direto para esse caso e falha se a promessa resolver. Try/catch é útil quando é necessário inspecionar ou realizar várias ações com o erro. O erro capturado é tipado como unknown; não se assume um formato sem verificar. A diferença entre erro síncrono e rejeição é respeitada: toThrow com callback para divide; rejects para a função async.

| Situação | Forma |
| --- | --- |
| Resolução | await expect(fn()).resolves.toEqual(valor) |
| Rejeição com mensagem | await expect(fn()).rejects.toThrow(mensagem) |
| Valor simples de async | const r = await fn(); expect(r).toBe(valor) |
| Tipo do erro | await expect(fn()).rejects.toBeInstanceOf(Error) |
