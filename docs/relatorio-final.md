# Relatório final

Entrega preparada em 12/11/2026 para o repositório rafael007rhf/modulo-4-techskills, inicialmente vazio.

## Resultado

As 17 atividades estão implementadas, incluindo a teoria, todas as linhas das tabelas dos três PDFs e o desafio opcional de frete. Há uma aplicação Express reutilizada pelas atividades 6 e 10, dependências de banco e e-mail simuladas por injeção, testes de estado e assíncronos e um snapshot versionável.

A validação real aprovou **17 suítes, 99 testes e 1 snapshot**, com zero falhas e zero testes pendentes. A cobertura final foi **100% statements, 100% branches, 100% functions e 100% lines**, respectivamente 72/72 instruções, 24/24 ramos, 25/25 funções e 69/69 linhas. A atividade 1 é teórica e não foi convertida em um teste artificial. A contagem de arquivos de suíte ser 17 é consequência da organização adotada, sem significar uma suíte por atividade.

Typecheck e build de produção passaram. A execução completa foi randomizada com seeds 1713 e 2026; o contador também foi invertido manualmente e randomizado com seed 1317. Todos os testes definitivos devem executar pelo menos uma asserção, por exigência global em runtime. Não há skip, todo ou only na suíte entregue.

O pacote foi extraído em uma pasta separada, instalado com npm ci e verificado novamente: 17 suítes, 99 testes e 1 snapshot aprovados, além de typecheck sem erros. Os logs dessa instalação e execução estão em evidencias/.

## Estrutura e evidências

Fontes em src, 17 suítes em src/__tests__, snapshot em __snapshots__, 17 respostas individuais em docs, exemplos pedagógicos em demonstracoes e ferramentas em scripts. A árvore completa e os comandos estão no README.

Os resultados normal, verbose e aleatório, cobertura inicial/intermediária/final, evolução do usuário sem/com ID, falha de arrays, contador sem hooks, promises sem await, sequência de snapshot, patch e mutação revertida estão preservados em evidencias. O índice docs/evidencias.md detalha cada arquivo. Três relatórios HTML com fontes e dados JSON/LCOV permitem auditar as medições.

## Decisões

Frete proporcional por quilo adicional, CEP sintaticamente válido com hífen opcional, peso finito positivo, UUID nativo para usuários e rejeição de e-mail propagada ao consumidor. Nomes de test.each foram corrigidos para refletir o esperado. A demonstração de promise sem await falhou por rejeição não tratada neste runtime; não foi registrada uma aprovação fictícia. A mensagem final de snapshot aceita é “Seja bem-vindo”. Supertest pode abrir um listener interno efêmero, apesar da simplificação “sem porta” do PDF. A fundamentação completa está em docs/decisoes-tecnicas.md.

A comparação de cobertura da etapa 8 preserva o mesmo código: 97,22/93,75/100/97,22 passou a 100/100/100/100 após quatro testes adicionais de peso inválido. O relatório final tem escopo maior e é apresentado separadamente.

## Localização

- Projeto: outputs/modulo-4-techskills, relativo à pasta desta conversa.
- Compactado: outputs/modulo-4-techskills-entrega.zip, ao lado do projeto.
- A raiz do ZIP é modulo-4-techskills/; instalar com npm ci após extrair.
- Não foram incluídos node_modules, .git, dist ou temporários no ZIP.
- Publicação na branch main de https://github.com/rafael007rhf/modulo-4-techskills solicitada pelo usuário após a entrega local validada.
