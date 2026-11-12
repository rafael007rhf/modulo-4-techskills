# Atividade 1 — Tipos de testes

Fonte: primeiro PDF, páginas 2–3. O escopo efetivamente exercitado determina o tipo de teste.

## Classificação das seis situações

| Item | Situação | Tipo | Justificativa |
| --- | --- | --- | --- |
| a | calcularFrete retorna o valor pelo CEP | Unitário | Verifica uma função isolada, sem banco ou rede. |
| b | Salvar pedido no banco com status “Em processamento” | Integração | Verifica a colaboração do serviço com a persistência real. |
| c | Entrar no site, adicionar produtos, fazer login e concluir compra | End-to-end | Percorre o fluxo completo pela interface como o usuário. |
| d | Após a compra, disparar HTTP para o serviço de e-mail | Integração | Verifica a comunicação entre o módulo de compras e o serviço HTTP. |
| e | aplicarCupom devolve o desconto correto | Unitário | Isola a regra matemática do cupom. |
| f | POST /pedidos responde 201 e devolve o pedido | Integração | Exercita roteamento, processamento da requisição e geração da resposta juntos. |

Se d for apenas uma função delegando a um mock, será um teste unitário dessa delegação. A classificação acima considera a comunicação HTTP descrita no enunciado. A rota f sozinha não caracteriza um fluxo end-to-end pela interface.

## Pirâmide

| Nível | Tipo | Quantidade relativa | Custo |
| --- | --- | --- | --- |
| Topo | End-to-end | Poucos | Alto |
| Meio | Integração | Intermediária | Médio |
| Base | Unitário | Muitos | Baixo |

A base é larga porque funções isoladas permitem muitos cenários rápidos, baratos e fáceis de diagnosticar. Os fluxos completos custam mais para preparar e manter; por isso concentram os caminhos críticos. A pirâmide orienta a distribuição, sem exigir percentuais fixos.

## Cinco perguntas

1. **O que são testes automatizados e como diferem dos manuais?** São programas que executam uma ação e verificam o resultado esperado. Podem ser repetidos automaticamente; no teste manual uma pessoa executa e avalia os passos. Os dois se complementam, especialmente em exploração e usabilidade.
2. **O que é regressão e como evitar?** É a quebra de um comportamento que funcionava após uma mudança. Executar testes das regras existentes a cada alteração ajuda a detectar a quebra antes da entrega.
3. **Analogia da orquestra:** o teste unitário verifica um instrumento sozinho; o de integração verifica se diferentes instrumentos tocam juntos no tempo e na harmonia esperados.
4. **Dois benefícios:** detectar defeitos cedo, reduzindo o custo de correção, e permitir refatorar com retorno rápido sobre comportamentos preservados. Os testes também documentam exemplos executáveis.
5. **Por que qualidade faz parte do processo?** Requisitos claros, implementação, revisão e testes influenciam a qualidade desde o começo. Uma checagem apenas ao final descobre problemas quando corrigi-los já custa mais.

## Caso de regressão no cupom

Um teste unitário do cálculo do total com cupom encontraria primeiro a regra de desconto quebrada, desde que cobrisse a combinação alterada. Um teste de integração do checkout complementaria essa proteção. O teste deveria rodar durante o desenvolvimento e em cada commit/PR no CI, antes da publicação. Além de corrigir, a equipe deve reproduzir o bug em um teste de regressão, confirmar que ele falha na versão defeituosa e passa na corrigida, revisar limites e combinações de cupons e entender por que o cenário escapou.

Atividade teórica: não existe uma suíte artificial apenas para aumentar a contagem.
