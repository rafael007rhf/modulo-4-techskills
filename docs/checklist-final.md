# Checklist final por requisito

Os itens abaixo referem-se ao estado entregue e às evidências reais, não a estimativas.

## Primeiro PDF — atividades 1–3

- [x] Seis situações de e-commerce classificadas, cada uma com justificativa.
- [x] Pirâmide com topo, meio, base, quantidade relativa e custo; explicação da base mais larga.
- [x] Cinco perguntas teóricas e três perguntas do caso de regressão do cupom respondidas.
- [x] Projeto Node/TypeScript, Jest, ts-jest e @types/jest instalados e configurados.
- [x] testEnvironment node, transform TypeScript, scripts, tsconfig estrito e convenção justificada.
- [x] sum(2,3)=5; evidência inicial com exatamente 1 suíte e 1 teste.
- [x] Quatro perguntas de configuração respondidas; diagnóstico da tabela explicado.
- [x] subtract com tipagem e cinco casos exatos da tabela, um it por caso.
- [x] Comentários Arrange, Act e Assert, nomes descritivos e independência.
- [x] montarOperacao com operacao, valores e resultado.
- [x] toBe, toEqual, toBeTruthy, toBeNull e toContain demonstrados em contextos adequados.
- [x] Desafio de frete: todas as faixas, prefixo 9, erro de CEP e limites exatos de 1 e 5 kg.
- [x] Interpretação de CEP, peso fracionado e validação adicional documentadas.
- [x] Saídas reais das atividades 2 e 3 preservadas.

## Segundo PDF — atividades 4–8

- [x] divide com seis casos exatos da tabela e quatro variações de toThrow.
- [x] Callback no expect de erro; not.toThrow em divisão válida.
- [x] Quatro perguntas sobre exceções respondidas.
- [x] divide e formatarNome em arquivos separados, com suítes separadas.
- [x] Quatro casos exatos de formatarNome, incluindo espaços, maiúsculas e vazio.
- [x] Evidência de duas suítes juntas e comandos completo, filtrado, verbose e watch praticados.
- [x] Uma aplicação Express, app separado de server, Supertest e tipagens.
- [x] /ping: status, corpo, content-type, rota ausente e método POST não registrado.
- [x] Status e corpo verificados em todas as requisições; perguntas de integração respondidas.
- [x] criarUsuarioService com injeção, jest.fn, mockReturnValue e mockResolvedValue.
- [x] Usuário encontrado, ID correto, null, chamada única e async com await.
- [x] jest.clearAllMocks antes dos casos e explicação das limitações do mock.
- [x] Primeira cobertura medida antes dos quatro testes de melhoria.
- [x] Nenhuma função totalmente sem teste identificada honestamente; linha 6 de frete e ramo de erro localizados.
- [x] Índices HTML e relatórios de fonte conferidos; testes adicionais e segunda medição preservados.
- [x] Comparação real de statements, branches, functions e lines e cinco respostas teóricas.
- [x] Piso 80/70/80/80 configurado e exclusão de server justificada.

## Terceiro PDF — atividades 9–13

- [x] Problemas do teste original listados antes da versão refatorada na documentação.
- [x] Describe por função soma/subtrai, cenários independentes e nomes “deve ... quando ...”.
- [x] test.each com três casos de soma e correção do título incorreto do exemplo.
- [x] Quatro perguntas de boas práticas respondidas.
- [x] /saudacao/:nome e POST /soma adicionados ao app existente.
- [x] Sete cenários exatos de integração, incluindo nome com espaço e erros 400, todos com status e corpo.
- [x] filtrarPares com sete casos exatos, zero, negativos e matchers da tabela.
- [x] toBe versus toEqual demonstrado por falha real isolada e explicação.
- [x] criarUsuario com cinco matchers; antes sem ID aprovado e depois com ID e falha real do toEqual antigo.
- [x] Comparação parcial continua passando; expectativa completa corrigida e UUID verificado.
- [x] Contador com incrementar, obterValor e reiniciar.
- [x] Falha real sem hooks; beforeEach corrige; afterEach registra valores reais.
- [x] Um incremento, três incrementos e independência testados.
- [x] Blocos it invertidos no arquivo real, execução aprovada e restauração do arquivo.
- [x] Contador executado com --randomize e seed registrada.
- [x] Quatro perguntas sobre hooks e tabela de frequência respondidas.

## Terceiro PDF — atividades 14–17

- [x] buscarDados com Promise.resolve no estágio 14 e quatro verificações da tabela.
- [x] Função alterada temporariamente para ok:false e demonstrações reais sem await, com e sem assertions.
- [x] Diferença de runtime frente ao PDF registrada e demonstração adicional de promessa atrasada.
- [x] Explicação precisa de expect.assertions(1) e necessidade de aguardar a promessa.
- [x] Evolução para async, sucesso com await e buscarDadosComErro com mensagem exigida.
- [x] rejects.toThrow, tipo Error e try/catch com contagem de asserções.
- [x] Snapshot original gerado e conferido, mensagem alterada e falha real capturada.
- [x] Diff real preservado, snapshot conscientemente atualizado, nova aprovação e .snap incluído.
- [x] Três perguntas de snapshot respondidas; regras matemáticas usam expectativas explícitas.
- [x] criarEnviarEmail com dependência simulada, sem mensagens reais.
- [x] Sucesso, destinatário, assunto, chamada única, dois usuários e falha propagada.
- [x] mockReturnValue, mockResolvedValue, mockRejectedValue e limpeza entre casos.
- [x] Perguntas sobre retorno, interação, injeção e limites respondidas.

## Fechamento e entrega

- [x] Suíte completa aprovada: 17 suítes, 99 testes, 1 snapshot.
- [x] Cobertura final real: 100% em statements, branches, functions e lines.
- [x] Comandos normal, cobertura e verbose executados; nomes individuais preservados.
- [x] Suíte completa aleatória aprovada com seeds 1713 e 2026.
- [x] Todas as asserções definitivas exigidas em runtime; nenhum skip, todo ou only.
- [x] Imports e tipos conferidos por tsc --noEmit; build de produção aprovado.
- [x] Não há banco nem provedor de e-mail real; HTTP de integração permanece local ao processo de teste.
- [x] Mutação + para - em sum detectada por falha real e alteração revertida.
- [x] Não há testes propositalmente falhando no testMatch definitivo; demonstrações isoladas em configuração própria.
- [x] 17 documentos individuais, cobertura, decisões, índice de evidências e README incluídos.
- [x] Cópias originais dos PDFs com hashes preservadas.
- [x] ZIP inclui configurações, lockfile, snapshots, documentação e evidências; exclui node_modules, .git, dist e temporários.
- [x] Pacote extraído em pasta separada: npm ci, npm test e npm run typecheck aprovados, com 99 testes e 1 snapshot.

## Critérios de avaliação dos PDFs

| Material | Critérios originais | Onde conferir |
| --- | --- | --- |
| 1 | Classificação 25%; configuração 25%; casos 30%; AAA/nomeação 20% | docs/atividade-01 a 03, fontes e suítes iniciais |
| 2 | Erros 20%; estrutura 15%; integração 25%; mocks 25%; cobertura 15% | docs/atividade-04 a 08 e relatórios de cobertura |
| 3 | Organização 15%; API 20%; matchers 15%; hooks 15%; async 15%; snapshot/mocks 15%; AAA 5% | docs/atividade-09 a 17 e evidências de fechamento |

Os pesos foram usados para conferir abrangência; não se atribui uma nota acadêmica ao próprio projeto.
