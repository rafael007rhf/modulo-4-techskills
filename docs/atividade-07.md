# Atividade 7 — Simulação de banco

Fonte: segundo PDF, páginas 8–9. `criarUsuarioService(repositorio)` recebe uma interface com `buscarPorId(id)` e retorna `buscarUsuario(id)`, que delega uma vez ao repositório. A tipagem genérica preserva retorno síncrono ou Promise sem duplicar a regra.

Os testes em `usuarioService.spec.ts` cobrem o objeto encontrado com `mockReturnValue`, o ID correto, chamada registrada, exatamente uma chamada, ausência com retorno null e resultado assíncrono com `mockResolvedValue` e await. `jest.clearAllMocks()` é chamado antes de cada teste. Os repositórios são criados em cada cenário, evitando compartilhamento de implementações.

## Perguntas

1. **Retorno versus chamada:** comparar o retorno verifica o dado que o consumidor recebe; verificar a chamada confirma que a dependência foi utilizada, com o ID e a frequência esperados. Um serviço poderia devolver um objeto fixo sem consultar o repositório, passando apenas a primeira verificação.
2. **Por que receber o repositório?** A injeção de dependência permite substituir a persistência no teste e desacopla a regra da configuração do banco. O serviço não precisa criar conexões nem conhecer um fornecedor concreto.
3. **O que o mock não garante?** Não confirma SQL, esquema, autenticação, conectividade ou contrato de um banco real. Um teste de integração com infraestrutura controlada seria necessário para esses pontos.

ClearAllMocks limpa chamadas e resultados registrados, mas preserva implementações e valores configurados; resetAllMocks também reinicializa as implementações, e restoreAllMocks restaura spies. Na suíte de e-mail, que compartilha um mock, cada teste configura explicitamente sua implementação.

Execução real: `evidencias/atividade-07.txt`, 1 suíte e 3 testes, com múltiplas asserções relacionadas ao mesmo comportamento.
