# Atividade 5 — Estrutura de arquivos

Fonte: segundo PDF, páginas 4–5. Convenção única: funções em `src/*.ts` e suítes em `src/__tests__/*.spec.ts`. Isso facilita localizar testes, mantém o código separado e permite excluir todos os testes do build com uma regra. Usar testes ao lado do código também seria válido; a escolha aqui segue a organização solicitada.

`divide.ts` e `formatador.ts` têm arquivos de teste separados. O formatador remove espaços nas pontas, converte o nome para minúsculas em pt-BR e coloca o primeiro caractere em maiúscula.

| Entrada | Saída |
| --- | --- |
| maria | Maria |
| ␠joão␠ | João |
| ANA | Ana |
| string vazia | string vazia |

Execução conjunta real: `evidencias/atividade-05.txt`, **2 suítes e 13 testes**, considerando as variações de toThrow da atividade anterior.

## Comandos praticados

- `npm test`: suíte inteira; evidência em `testes-finais.txt`.
- `npx jest divide --runInBand`: filtro pelo caminho; evidência em `atividade-04.txt`.
- `npm run test:verbose`: executa com `--verbose`; log em `testes-verbose.txt`, complementado pela relação de nomes em `testes-detalhados.md` e pelo JSON real.
- `npx jest --watchAll --runInBand divide`: execução interativa, encerrada com q após duas rodadas aprovadas; evidência em `watch-uma-rodada.txt`. Foi usado watchAll porque o repositório de origem estava vazio e ainda não tinha um commit para comparar arquivos alterados. No uso cotidiano com histórico, `npx jest --watch` acompanha os arquivos alterados.

Em erro de descoberta, conferir `testMatch` e sufixo; em import quebrado, conferir `../divide` a partir de __tests__; em `describe is not defined`, executar pelo Jest e não diretamente por Node. O typecheck também verifica os imports.
