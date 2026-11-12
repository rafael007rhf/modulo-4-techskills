# Atividade 17 — Mocks de funções

Fonte: terceiro PDF, páginas 14–16. `criarEnviarEmail(apiEnviar)` injeta a dependência e devolve enviarEmail(usuario), que delega `apiEnviar(usuario.email, 'Bem-vindo!')`. A tipagem genérica preserva retorno síncrono ou assíncrono. Não existe cliente SMTP nem credencial real.

| Cenário | Verificação |
| --- | --- |
| Sucesso síncrono | mockReturnValue(true), retorno true, e-mail e assunto corretos |
| Chamada única | toHaveBeenCalledTimes(1) |
| Dois usuários | toHaveBeenNthCalledWith para Maria e João, total 2 |
| Sucesso assíncrono | mockResolvedValue(true) e resolves.toBe(true) |
| Falha assíncrona | mockRejectedValue(erro), rejects.toBe(erro), argumentos e chamada única |

Foi escolhida propagação de erro: o consumidor recebe a mesma rejeição da API injetada, sem transformar uma falha em sucesso. A verificação por identidade do erro assegura essa decisão. ClearAllMocks limpa o histórico antes de cada caso e cada teste configura explicitamente o retorno do mock compartilhado.

## Perguntas

1. **Retorno versus chamada:** o retorno confirma a informação entregue ao consumidor; a chamada confirma a interação com o envio, seu destinatário, assunto e quantidade. Um retorno true fixo não comprovaria que a função de envio foi utilizada.
2. **Por que receber apiEnviar em vez de importá-la diretamente?** Permite isolar o teste, controlar sucesso e erro e substituir a integração sem alterar a função. A regra fica independente de fornecedor e configuração de e-mail.
3. **O que o mock não garante?** Não prova autenticação, disponibilidade do provedor, formato aceito pelo serviço real nem entrega na caixa postal. Um teste de integração controlado verifica o contrato externo, e a entrega efetiva depende de verificações adicionais do provedor.

Evidência: `evidencias/atividade-17.txt`, 1 suíte e 5 testes aprovados. O fechamento completo registra 17 suítes, 99 testes e 1 snapshot aprovados, com falha temporária de sum detectada e revertida e execução aleatória sem dependência de ordem.
