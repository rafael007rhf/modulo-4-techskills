# Atividade 16 — Snapshot testing

Fonte: terceiro PDF, páginas 12–13. Código em mensagem.ts e teste em mensagem.spec.ts. O snapshot definitivo está em `src/__tests__/__snapshots__/mensagem.spec.ts.snap` e faz parte da entrega.

## Sequência executada

1. A função retornava “Olá, Maria! Bem-vindo à nossa plataforma.”. O Jest gerou o snapshot original: `snapshot-01-original.txt` e `snapshot-original.snap.txt`.
2. O conteúdo gravado foi conferido: uma string, sob a chave do teste de Maria.
3. O texto foi alterado intencionalmente para “Olá, Maria! Seja bem-vindo à nossa plataforma.”.
4. O teste executado sem atualização falhou: `snapshot-02-diff.txt`. O Jest atual mostrou Snapshot e Received; o patch real entre os arquivos gravados está em `snapshot-diff.patch`.
5. A mudança adiciona “Seja” e muda o B de “Bem” para b. O nome Maria e o restante do texto permanecem.
6. A alteração de texto foi aceita como evolução pedagógica deliberada; executou-se `-u`: `snapshot-03-atualizado.txt`.
7. Nova execução com `--ci`, sem permitir atualização: 1 teste e 1 snapshot aprovados em `snapshot-04-confirmado.txt`.

A mensagem final usa “Seja bem-vindo”. Os testes das regras matemáticas e HTTP usam expectativas explícitas, sem snapshots substituindo regras de negócio.

## Perguntas

1. **O que o snapshot verifica que toBe não verificaria?** Para esta string, ambos podem verificar exatamente o mesmo conteúdo; não há uma propriedade adicional detectada pelo snapshot. A diferença é que a expectativa fica gravada e versionada em arquivo separado, o que facilita revisar saídas extensas e seus diffs. toBe com uma string literal também detectaria a alteração.
2. **Por que versionar .snap?** A expectativa aprovada precisa acompanhar o código para que outras máquinas e o CI comparem com a mesma referência; sem o arquivo não existe essa base compartilhada.
3. **Risco de -u por hábito:** aprovar silenciosamente uma regressão, substituindo a expectativa justamente pelo resultado defeituoso. Deve-se ler o diff e avaliar se a mudança de comportamento é desejada.

Snapshots são úteis para saídas estáveis, textos e estruturas extensas. São inadequados para relógio e IDs aleatórios sem normalização, e não substituem asserções específicas das regras de negócio.
