# Atividade 6 — Integração HTTP

Fonte: segundo PDF, páginas 6–7. Uma única aplicação em `src/app.ts`; `src/server.ts` somente inicia o servidor. Os testes importam app, nunca server.

| Requisição | Status | Corpo/cabeçalho |
| --- | --- | --- |
| GET /ping | 200 | { status: 'ok' } |
| GET /ping | 200 | Mesmo corpo e Content-Type application/json |
| GET /rota-inexistente | 404 | { erro: 'Rota não encontrada' } |
| POST /ping | 404 | { erro: 'Rota não encontrada' } |

Os quatro testes aguardam o Supertest e verificam status e corpo. O segundo também verifica o tipo de conteúdo. O middleware final mantém o 404 em JSON para permitir um contrato de erro claro.

## Perguntas

1. **Por que integração?** A requisição atravessa o roteamento Express e a serialização da resposta, exercitando componentes juntos, em vez de chamar uma função matemática isolada.
2. **E se listen estivesse dentro do app?** Apenas importar a aplicação abriria um servidor persistente, poderia causar conflito na porta 3000 e manter o processo de testes aberto. Separar os módulos evita esse efeito colateral.
3. **Por que toEqual no corpo?** A resposta JSON é desserializada em um novo objeto. toBe compara a referência; toEqual compara os campos recursivamente.

Precisão técnica sobre o PDF: não é necessário iniciar um servidor manualmente nem reservar a porta fixa 3000 nos testes. Entretanto, Supertest pode criar internamente um listener HTTP temporário em porta efêmera para `request(app)`. Portanto “sem abrir porta” é uma simplificação pedagógica, não ausência literal de sockets. Não há chamada a serviços externos reais.

Execução: `evidencias/atividade-06.txt`, 1 suíte e 4 testes. A aplicação foi ampliada na atividade 10, preservando /ping.
