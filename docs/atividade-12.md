# Atividade 12 — Objetos

Fonte: terceiro PDF, página 7. `src/criarUsuario.ts` começou retornando apenas nome e idade. Foram executados cinco testes: objeto completo com toEqual; existência de nome com toHaveProperty; idade exatamente 30 com toHaveProperty('idade', 30); campos parciais com toMatchObject; nome truthy com toBeTruthy. Os cinco passaram em `atividade-12-antes-id.txt`.

Depois a função foi alterada para incluir `id: randomUUID()`, da biblioteca nativa node:crypto. Os mesmos testes foram executados: **1 falhou e 4 passaram**, em `atividade-12-apos-id-falha.txt`. A comparação completa esperava somente dois campos e recebeu um terceiro. O toMatchObject continuou passando porque exige apenas o subconjunto informado.

No contrato final, toEqual inclui `id: expect.any(String)`, preservando a comparação de todos os campos sem fixar um UUID aleatório. Um sexto teste verifica o formato UUID v4 e IDs distintos entre usuários. Não há contador global de IDs nem dependência da ordem dos testes.

## Quando usar cada matcher

Use toEqual quando a forma completa faz parte do contrato e campos extras também devem ser detectados. Use toMatchObject quando a responsabilidade é conferir um subconjunto e permitir evolução de outros campos. Ambos verificam valores nos campos informados; uma comparação parcial não deve omitir propriedades essenciais à regra de negócio.

Evidências adicionais: `atividade-12-final.txt` tem 6 testes aprovados; `falha-objeto-com-id.txt` reproduz em demonstração isolada a falha completa e a aprovação parcial no mesmo processo. A suíte final não contém a expectativa antiga incorreta.
