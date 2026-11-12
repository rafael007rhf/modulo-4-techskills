# Atividade 4 — Testando erros

Fonte: segundo PDF, páginas 2–3. Implementação em `src/divide.ts` e `src/__tests__/divide.spec.ts`.

| Caso do PDF | Verificação |
| --- | --- |
| divide(10, 2) | 5 com toBe |
| divide(10, 0) | Error com “divisão por zero” |
| divide(-10, 2) | -5 |
| divide(0, 5) | 0 |
| divide(7, 2) | 3.5 |
| divide(10, 5) | not.toThrow |

As quatro variações de erro estão em testes separados: `toThrow()` aceita qualquer lançamento; `toThrow('divisão por zero')` exige a mensagem contendo esse texto; `toThrow(/zero/)` compara a mensagem com uma expressão regular; `toThrow(Error)` exige o tipo Error. Verificar mensagem e tipo em conjunto dá mais precisão do que uma verificação genérica.

## Perguntas

1. **Por que passar uma função ao expect?** A callback adia a chamada até o matcher executá-la e capturar a exceção. Em `expect(divide(10, 0))`, o JavaScript lança o erro antes de chamar expect.
2. **E se não lançar?** `toThrow` falha: o comportamento esperado não ocorreu.
3. **Por que verificar a mensagem?** Ajuda a distinguir o erro de domínio esperado de um erro incidental, como um acesso inválido. Uma mensagem por substring ainda não garante igualdade completa; uma regex ancorada pode exigir isso.
4. **Quando usar not.toThrow?** Para demonstrar que uma entrada válida não aciona a proteção de erro, como dividir 10 por 5. Também é necessário conferir os valores de retorno em outros casos.

Execução real: `evidencias/atividade-04.txt`, 1 suíte e 9 testes aprovados; os casos extras correspondem às quatro formas de verificar o mesmo caminho de erro.
