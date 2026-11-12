# Decisões técnicas e fidelidade aos materiais

Foram lidas integralmente as 37 páginas dos três PDFs fornecidos. As cópias originais estão em materiais/, com hashes SHA-256 em evidencias/fontes-sha256.json. Seus enunciados são fontes de requisitos acadêmicos; a execução foi autorizada pela solicitação do usuário. Não houve instrução de apagar trabalho anterior, enviar e-mails reais ou usar banco externo.

| Documento | Páginas | Atividades |
| --- | --- | --- |
| atividades_testes_automatizados_jest.pdf | 9 | 1–3 |
| exercicios_4_a_8_jest_erros_estrutura_integracao_mocks_cobertura.pdf | 12 | 4–8 |
| exercicios_9_a_17_jest_boas_praticas_a_mocks.pdf | 16 | 9–17 |

## Adaptações justificadas

1. **TypeScript em todos os exercícios:** os PDFs 2 e 3 permitem trocar .js por .ts. Foram mantidos ts-jest, testes em __tests__ e tipagem estrita.
2. **Versões e ambiente:** Node 24.20.0; requisitos publicados no projeto: Node >=22 e npm. TypeScript 5.9.3 foi escolhido dentro da faixa suportada pelo ts-jest 29.4.15, com Jest 30.5.2. O package-lock fixa dependências transitivas. Referências oficiais consultadas: [Jest](https://jestjs.io/docs/configuration) e [instalação do ts-jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation).
3. **Configuração explícita:** jest.config.js foi escrito com createDefaultPreset, equivalente ao scaffold do ts-jest; não se depende de um gerador interativo.
4. **Nomes de test.each:** uso de objetos e placeholders nomeados corrige a inversão entre operandos e esperado no título do exemplo do exercício 9.
5. **Frete:** CEP em string, oito dígitos com hífen opcional; validação sintática sem serviço postal. Adicional de peso proporcional, sem teto por quilo fracionado. Peso não finito ou <=0 é rejeitado. A regra de prefixo 9 foi preservada como especificação do exercício.
6. **Montar operação:** representa a subtração praticada na atividade 3. O caso nulo demonstra busca sem correspondência na estrutura, em vez de mudar o retorno normal da função apenas para acomodar um matcher.
7. **Supertest e portas:** não há listen manual nem servidor persistente de teste na porta 3000. A biblioteca pode usar listener efêmero interno; o PDF simplifica esse detalhe.
8. **Erros HTTP:** respostas 400 e 404 têm mensagens JSON explícitas. Números devem ser finitos; strings numéricas não são convertidas. Precisão de ponto flutuante segue JavaScript, sem regra monetária extra.
9. **Mocks:** serviço de usuário e envio de e-mail preservam retornos síncronos e assíncronos por tipagem genérica. E-mail propaga a rejeição original. Nenhum banco ou provedor de e-mail real foi utilizado.
10. **Evolução de objetos:** a etapa sem ID foi executada, seguida da adição real de UUID e da falha do teste antigo; a versão final adapta a expectativa completa e mantém a parcial. IDs não dependem de um contador global.
11. **Promises sem await:** os processos falharam com rejeição não tratada, em vez da aprovação sugerida pelo PDF. Foi preservado o observado. Uma promessa atrasada adicional demonstrou a falta de asserções ao término do teste. expect.assertions não aguarda trabalho assíncrono.
12. **Snapshot:** o texto final aceito é “Seja bem-vindo”. A saída atual do Jest usa Snapshot/Received para a string; um patch gerado pelo Git entre as cópias efetivas também preserva o diff com - e +. O snapshot verifica o mesmo conteúdo que um toBe literal poderia verificar; sua distinção é a expectativa em arquivo versionado.
13. **Descoberta de testes:** o testMatch explícito exige .spec.ts. A afirmação de que um arquivo chamado sum.ts nunca é descoberto precisa considerar a convenção padrão de __tests__; a documentação da atividade 2 explica a diferença.
14. **Globals de Jest:** @types/jest fornece tipos, mas quem disponibiliza describe/expect na execução é o runner. Rodar o teste diretamente por Node continua incorreto mesmo com os tipos instalados.
15. **Cobertura:** a comparação antes/depois da etapa 8 usa o mesmo código fonte. O relatório final de escopo ampliado é separado. Server.ts é o único módulo de produção excluído; ele só inicia a aplicação.
16. **Watch:** foi usada a variante --watchAll, apropriada ao repositório inicialmente sem commits, em terminal interativo com encerramento por q. A ordem aleatória foi executada com seeds registradas.
17. **Entrega e Git:** o repositório foi clonado para outputs/modulo-4-techskills e a entrega inclui projeto e ZIP local, sem node_modules no arquivo. Após receber a entrega validada, o usuário solicitou o push para o GitHub. A publicação usa a branch main do repositório indicado, incluindo fontes, testes, documentação, PDFs e evidências, sem node_modules ou arquivos temporários.
18. **Avisos da instalação:** o npm ci da cópia extraída reportou 20 alertas de dependências; a consulta separada com npm audit --omit=dev reportou zero para produção. Os avisos transitivos das ferramentas de desenvolvimento foram preservados no log. Não foi aplicado audit fix --force, que propunha versões antigas incompatíveis com o Jest escolhido. Isso não impede os testes, mas permanece uma limitação da árvore de ferramentas instalada na data da entrega.

As contagens ilustrativas dos PDFs não foram adotadas como meta artificial. Os critérios foram cobertos por casos com asserções reais, e a conferência global impede testes definitivos sem asserções. A cobertura de 100% não é uma garantia de correção completa.
