# Módulo 4 — Testes automatizados com Jest

Projeto acadêmico que implementa as 17 atividades dos três PDFs fornecidos, incluindo respostas teóricas, desafio de frete, testes unitários, integração HTTP, mocks, promises, hooks e snapshot. Os materiais originais estão em materiais/; as decisões sobre exemplos ambíguos estão em [docs/decisoes-tecnicas.md](docs/decisoes-tecnicas.md).

## Resultado verificado

Em 12/11/2026: **17 suítes, 99 testes e 1 snapshot aprovados**. Cobertura final: **100% de statements, branches, functions e lines**. TypeScript e build aprovados. A suíte também passou com ordem aleatória nas seeds 1713 e 2026. Uma troca temporária de + por - em sum foi detectada e revertida. Os números são reais e podem ser conferidos em [evidências](docs/evidencias.md) e [cobertura](docs/cobertura.md).

A entrega compactada também foi extraída em outra pasta: npm ci, os mesmos 99 testes e a verificação de tipos passaram sem depender do node_modules da pasta de desenvolvimento.

Cobertura mede execução, não ausência de defeitos. O resultado é restrito aos cenários e ao código entregues.

## Tecnologias e requisitos

Node.js >=22, npm, TypeScript 5.9.3, Jest 30.5.2, ts-jest 29.4.15, Express 5.3.0, Supertest 7.3.2 e respectivas tipagens. A execução registrada usou Node 24.20.0 e npm 11.19.0 no Windows. Não é necessário instalar banco de dados nem configurar um serviço de e-mail.

## Instalar e executar

Extraia o ZIP e abra um terminal na pasta modulo-4-techskills. Instale as versões do lockfile:

~~~sh
npm ci
npm test
npm run typecheck
~~~

Outros comandos:

~~~sh
npm run test:coverage
npm run test:verbose
npm run test:random
npx jest --runInBand divide
npx jest --watchAll
npm run build
npm start
~~~

O relatório novo de cobertura é gerado em `coverage/lcov-report/index.html`. Os relatórios históricos da entrega ficam em `evidencias/cobertura-inicial`, `cobertura-apos-08` e `cobertura-final` e não são sobrescritos pelo script normal de cobertura. O piso global é 80% statements, 70% branches, 80% functions e 80% lines. Server.ts é excluído por apenas iniciar o listener.

WatchAll funciona também na pasta extraída sem histórico Git. Em um repositório com commits, npx jest --watch permite acompanhar apenas os arquivos alterados.

Após build e start, a aplicação atende na porta 3000. GET /ping retorna `{ "status": "ok" }`; GET /saudacao/Maria retorna `{ "mensagem": "Olá, Maria" }`; POST /soma recebe números a e b e devolve resultado. Os testes importam app diretamente e não iniciam o servidor persistente de server.ts.

## Organização

~~~text
modulo-4-techskills/
├── src/
│   ├── sum.ts, subtract.ts, montarOperacao.ts, calcularFrete.ts
│   ├── divide.ts, formatador.ts, calculo.ts, filtrarPares.ts
│   ├── criarUsuario.ts, usuarioService.ts, emailService.ts
│   ├── contador.ts, buscarDados.ts, mensagem.ts
│   ├── app.ts, server.ts
│   └── __tests__/
│       ├── 17 arquivos *.spec.ts
│       └── __snapshots__/mensagem.spec.ts.snap
├── demonstracoes/              # exemplos errados, isolados da suíte definitiva
├── scripts/                    # captura, demonstrações e conferência
├── docs/
│   ├── atividade-01.md ... atividade-17.md
│   ├── cobertura.md, evidencias.md, checklist-final.md
│   ├── decisoes-tecnicas.md, relatorio-final.md
├── evidencias/                 # logs reais, JSON, diffs e relatórios HTML/LCOV
├── materiais/                  # três PDFs originais
├── jest.config.js, jest.demo.config.js
├── tsconfig.json, tsconfig.build.json
├── package.json, package-lock.json
└── .gitignore
~~~

Os testes usam AAA, nomes descritivos e um describe por responsabilidade. A preparação global exige ao menos uma asserção executada por teste. A compilação de produção exclui testes e demonstrações.

## As 17 atividades

| Nº | Implementação e documentação |
| --- | --- |
| 1 | [Tipos de testes, pirâmide e regressão de cupom](docs/atividade-01.md) |
| 2 | [Configuração TypeScript/Jest e sum](docs/atividade-02.md) |
| 3 | [Subtract, AAA, matchers e desafio de frete](docs/atividade-03.md) |
| 4 | [Divide, exceções e quatro formas de toThrow](docs/atividade-04.md) |
| 5 | [Organização e formatarNome](docs/atividade-05.md) |
| 6 | [Integração de /ping com Supertest](docs/atividade-06.md) |
| 7 | [Repositório simulado por injeção](docs/atividade-07.md) |
| 8 | [Cobertura antes/depois e piso mínimo](docs/atividade-08.md) |
| 9 | [Refatoração de soma/subtrai e test.each](docs/atividade-09.md) |
| 10 | [Saudação e soma HTTP: sete cenários e extensões](docs/atividade-10.md) |
| 11 | [Arrays e comparação por conteúdo](docs/atividade-11.md) |
| 12 | [Objetos, UUID e comparação parcial](docs/atividade-12.md) |
| 13 | [Contador, hooks e independência de ordem](docs/atividade-13.md) |
| 14 | [Promises e demonstração do await ausente](docs/atividade-14.md) |
| 15 | [Async/await, rejeições e try/catch](docs/atividade-15.md) |
| 16 | [Snapshot original, diff e atualização revisada](docs/atividade-16.md) |
| 17 | [Mock de envio de e-mail e propagação de erro](docs/atividade-17.md) |

## Reproduzir as demonstrações

~~~sh
npm run demo
npm test
~~~

O primeiro comando roda processos isolados com falhas intencionais, verifica seus códigos de saída, restaura alterações temporárias e mantém a evolução deliberada da mensagem “Seja bem-vindo”. Não o execute ao mesmo tempo que outra sessão de Jest. Os exemplos errados têm extensão .demo.ts e configuração própria; não entram em npm test. O segundo comando confirma o estado definitivo aprovado. As medições históricas da etapa 8 não são reconstituídas artificialmente pelo demo.

A execução atual sem await terminou com rejeição não tratada, ao contrário da aprovação sugerida no PDF; isso foi registrado sem alterar os logs para imitar o material. Todos os detalhes estão no documento da atividade 14.

## Entrega

A pasta completa e o ZIP incluem lockfile, configurações, fontes, testes, snapshot, documentação, PDFs e evidências. Node_modules, .git, dist, coverage temporário e arquivos de trabalho ficam fora do ZIP. A entrega foi preparada a partir do [repositório indicado](https://github.com/rafael007rhf/modulo-4-techskills), com publicação na branch main solicitada pelo usuário após a validação local.

Leia o [relatório final](docs/relatorio-final.md), o [checklist](docs/checklist-final.md) e o [índice de evidências](docs/evidencias.md) para revisar a entrega.
