# Atividade 9 — Boas práticas

Fonte: terceiro PDF, páginas 2–3. Refatoração em `src/__tests__/calculo.spec.ts`. `calculo.ts` reexporta sum como soma e subtract como subtrai, reutilizando implementações existentes.

## Problemas do original

O nome “teste1” não explica a regra. Há três cenários de soma e um de subtração no mesmo teste, sem agrupamento. A primeira asserção que falha interrompe o bloco e impede avaliar as seguintes. Uma falha de subtração fica misturada a resultados de soma, tornando o diagnóstico menos preciso. Não há preparação e execução claramente separadas.

A versão entregue tem um describe para soma e outro para subtrai. Os três casos de soma (2+3=5, -1+1=0 e 0+0=0) usam `test.each` com objetos nomeados; o teste de subtrai verifica 5-2=3. Cada cenário possui comentários AAA.

Correção do exemplo: o PDF fornece os argumentos `(a, b, esperado)`, mas o título `'%i quando somar %i + %i'` consome os valores nessa mesma ordem e imprime o primeiro operando como se fosse o resultado. Foram utilizados `$esperado`, `$a` e `$b` para os nomes refletirem os dados corretos.

## Perguntas

1. **Por que o nome é qualidade?** Ele transforma o relatório em uma explicação do comportamento quebrado e reduz o esforço de manutenção.
2. **O que ocorre após a primeira asserção falhar?** A exceção interrompe aquele teste; asserções posteriores do mesmo bloco não executam. Outros testes continuam normalmente.
3. **Vantagem do describe por função:** organiza preparação e saída por responsabilidade, ajudando a localizar o problema e a aplicar hooks no escopo correto.
4. **Quando test.each é melhor?** Quando a mesma regra e asserção se repetem com entradas diferentes. Cenários com preparações ou responsabilidades distintas devem ficar em testes próprios.

Evidência: `evidencias/atividade-09.txt`, 1 suíte e 4 testes aprovados.
