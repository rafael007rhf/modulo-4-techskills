# Atividade 2 — Configurando o Jest

Fonte: primeiro PDF, páginas 4–6. Implementação: `src/sum.ts`, `src/__tests__/sum.spec.ts`, `package.json`, `tsconfig.json` e `jest.config.js`.

O repositório estava vazio. Foi criado um projeto Node.js com TypeScript estrito. `sum(a: number, b: number): number` soma os argumentos. O primeiro teste confirma que 2 + 3 = 5, com comentários AAA.

A execução isolada real em `evidencias/atividade-02.txt` aprovou **1 suíte e 1 teste**. O comando registrado usa o próprio executável instalado do Jest, equivalente a `npx jest --runInBand --runTestsByPath src/__tests__/sum.spec.ts`. As execuções completas de `npm test` também estão preservadas.

## Perguntas

1. **Função do ts-jest:** transformar o TypeScript em JavaScript que o Jest executa, mantendo o mapeamento das linhas para os erros. A verificação completa de tipos também roda separadamente com `npm run typecheck`.
2. **Por que node e não jsdom?** As funções e a API usam o ambiente Node.js, sem DOM. jsdom simula APIs de navegador e não é necessário aqui.
3. **Pasta __tests__ ou teste ao lado?** Ambas são convenções do Jest. Foi adotado `src/__tests__/*.spec.ts`, que agrupa as suítes e separa visualmente os testes do código de produção. O import passa a usar `../sum`.
4. **E se o teste se chamar apenas sum.ts?** Ao lado do código, não será descoberto pela convenção usual. Dentro de __tests__, a descoberta padrão do Jest pode reconhecê-lo mesmo sem o sufixo. Neste projeto o `testMatch` é explicitamente restrito a `*.spec.ts`; portanto, `sum.ts` não será uma suíte em nenhum local.

## Configuração e diagnóstico

`createDefaultPreset().transform` configura o ts-jest e `testEnvironment: 'node'` seleciona o runtime. A configuração foi escrita explicitamente, equivalente à gerada por `npx ts-jest config:init`. Os scripts usam `--runInBand` para execuções acadêmicas reproduzíveis com poucos recursos. As versões instaladas estão fixadas no package-lock.

“No tests found” exige conferir o padrão do nome; “Cannot find module” exige conferir caminho e arquivo; erro de sintaxe TypeScript exige conferir o transform. `@types/jest` resolve os nomes na tipagem, mas não cria globais durante uma execução direta com Node: `describe` e `expect` são disponibilizados pelo Jest. Isso corrige a simplificação da tabela do PDF.
