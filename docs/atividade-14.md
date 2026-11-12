# Atividade 14 — Promises

Fonte: terceiro PDF, página 10. No estágio inicial, buscarDados retornava `Promise.resolve({ ok: true })`. A execução `atividade-14.txt` aprovou os quatro casos: resolves.toEqual, resolves.toHaveProperty('ok'), resolves.toMatchObject e toBeInstanceOf(Promise). O teste que inspeciona a instância também aguarda a promessa para concluir seu ciclo.

Na atividade 15 a mesma função foi evoluída para async, preservando esses testes e o contrato. Não foram mantidas duas implementações de produção com o mesmo nome.

## Demonstração real da ausência de await

A função real foi temporariamente alterada para devolver `{ ok: false }`. Executou-se a versão incorreta do PDF sem await, seguida da versão com expect.assertions(1). Nos dois processos, **o código de saída foi 1**: o Node 24/Jest 30 encerrou por uma rejeição não tratada da asserção. Os logs completos estão em `promise-sem-await.txt` e `promise-sem-await-com-assertions.txt`. A implementação foi restaurada em finally.

O PDF sugere que a versão sem await passaria silenciosamente. Isso não foi o resultado deste ambiente, e não foi fabricada uma aprovação para coincidir com o exemplo. A ausência de await continua incorreta: o teste não entrega ao runner a promessa cuja conclusão deveria controlar, podendo produzir falhas tardias, atribuição incorreta ou falsos positivos em outros agendamentos.

Para tornar visível o papel da contagem, uma terceira demonstração usa uma promessa que resolve corretamente após 30 ms, sem await e com expect.assertions(1). O Jest terminou o teste antes da resolução e reportou **uma asserção esperada, zero executadas**, em `promise-atrasada-com-assertions.txt`.

`expect.assertions(1)` verifica o número exato de asserções executadas no teste; não conta a si próprio e não aguarda promises. Quando uma resolução imediata executa sua asserção em uma microtask a tempo, essa contagem pode ser satisfeita mesmo sem await. Portanto ela complementa, mas nunca substitui, await ou o retorno da cadeia de asserção ao Jest. Os testes definitivos aguardam todas as asserções assíncronas.
