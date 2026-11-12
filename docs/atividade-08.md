# Atividade 8 — Cobertura de código

Fonte: segundo PDF, páginas 10–12. Comparação quantitativa e relatórios em [cobertura.md](cobertura.md).

A primeira execução real de `npm test -- --coverage`, antes de acrescentar os testes de melhoria, tinha 8 suítes e 43 testes. Nenhuma função estava totalmente sem teste: **10 de 10 funções** já haviam sido chamadas. A lacuna real era o lançamento de erro na linha 6 de `calcularFrete.ts`, para peso inválido; esse arquivo tinha a menor cobertura de ramos: **92,85% (13/14)**. Não se copiaram as lacunas fictícias de formatador/usuarioService apresentadas como exemplo no PDF.

Foram acrescentados casos para peso zero, negativo, NaN e infinito. Com o mesmo código de produção, 8 suítes e 47 testes atingiram 100% em todas as métricas. Os relatórios HTML preservam inclusive o código correspondente ao estágio medido. A suíte final ampliada nas atividades 9–17 possui seu próprio relatório, com denominadores diferentes.

## Perguntas

1. **Instruções versus ramos:** statements mede instruções executadas; branches mede alternativas de decisão percorridas, incluindo condições e expressões lógicas instrumentadas. Executar somente uma divisão válida deixa sem exercício o caminho de divisor zero.
2. **Por que 100% não significa ausência de defeitos?** Executar uma linha não prova que a asserção está correta, que todos os dados relevantes foram cobertos ou que a especificação está completa.
3. **O que a cobertura nunca aponta?** Não determina sozinha que o resultado esperado é correto, nem identifica uma funcionalidade exigida mas ausente do código. Também não substitui avaliações de usabilidade, segurança ou desempenho.
4. **Por que excluir arquivos?** `server.ts` apenas inicia o listener e não contém regra de negócio; testar seu efeito por import atrapalharia o isolamento. Testes e ferramentas de demonstração não são código de produção e não entram no denominador.
5. **Qual piso e por quê?** Statements 80%, branches 70%, functions 80% e lines 80%, conforme referência do enunciado. É um limite mínimo para impedir perda grande de proteção, sem tratar a porcentagem como garantia de qualidade. Nesta entrega o resultado observado ficou acima do piso.

`collectCoverageFrom` inclui todo o código de produção em src, mesmo módulos não importados. Os relatórios HTML inicial e posterior foram conferidos em conjunto com seus arquivos de dados e a marcação da linha não coberta. Uma asserção mínima por teste é exigida em runtime por `expect.hasAssertions()`.
