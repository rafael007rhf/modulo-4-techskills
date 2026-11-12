# Atividade 10 — Projeto integrado

Fonte: terceiro PDF, páginas 4–5. As rotas foram adicionadas ao mesmo `src/app.ts` da atividade 6, mantendo /ping e a separação de server.ts. `express.json()` lê o corpo de POST /soma.

| Cenário exigido | Status | Corpo |
| --- | --- | --- |
| GET /saudacao/Maria | 200 | { mensagem: 'Olá, Maria' } |
| GET /saudacao/Ana%20Paula | 200 | { mensagem: 'Olá, Ana Paula' } |
| POST /soma { a: 2, b: 3 } | 200 | { resultado: 5 } |
| POST /soma { a: -5, b: 2 } | 200 | { resultado: -3 } |
| POST /soma { a: 2 } | 400 | { erro: 'Os campos a e b devem ser números finitos' } |
| POST /soma { a: 'x', b: 3 } | 400 | Mesma mensagem de validação |
| GET /rota-inexistente | 404 | { erro: 'Rota não encontrada' } |

Todos os cenários aguardam a requisição e verificam status e corpo. O nome com espaço é codificado por encodeURIComponent, e o Express decodifica o parâmetro. Os valores são validados sem converter strings numéricas em números. Ausência de corpo é tratada com `req.body ?? {}`.

Casos adicionais verificam zero, decimais, a ausente, b inválido, null, booleano, objeto vazio, corpo ausente e números JSON que excedem o limite finito do JavaScript. A soma usa a precisão numérica padrão do JavaScript; por isso 0.1 + 0.2 resulta em 0.30000000000000004, sem arredondamento monetário implícito.

Evidência real: `evidencias/atividade-10.txt`, 1 suíte e 17 testes aprovados. As quatro verificações de /ping permanecem em sua própria suíte.
