# Testes executados

Relação derivada do JSON real do Jest; cada item corresponde a uma execução parametrizada.

## ping.spec.ts

- [x] GET /ping deve retornar status 200 e corpo ok quando consultar a saúde da API
- [x] GET /ping deve retornar JSON quando consultar a saúde da API
- [x] GET /ping deve retornar 404 quando a rota não existir
- [x] GET /ping deve retornar 404 quando o método POST não estiver registrado em ping

## api.spec.ts

- [x] GET /saudacao/:nome deve retornar "Olá, Maria" quando o nome for "Maria"
- [x] GET /saudacao/:nome deve retornar "Olá, Ana Paula" quando o nome for "Ana Paula"
- [x] POST /soma deve retornar 5 quando somar 2 e 3
- [x] POST /soma deve retornar -3 quando somar -5 e 2
- [x] POST /soma deve retornar 0 quando somar 0 e 0
- [x] POST /soma deve retornar 0.30000000000000004 quando somar 0.1 e 0.2
- [x] POST /soma deve retornar 400 quando receber b ausente
- [x] POST /soma deve retornar 400 quando receber a inválido
- [x] POST /soma deve retornar 400 quando receber a ausente
- [x] POST /soma deve retornar 400 quando receber b inválido
- [x] POST /soma deve retornar 400 quando receber a nulo
- [x] POST /soma deve retornar 400 quando receber a booleano
- [x] POST /soma deve retornar 400 quando receber corpo vazio
- [x] POST /soma deve retornar 400 quando não receber um corpo JSON
- [x] POST /soma deve retornar 400 quando um número JSON exceder o limite finito: {"a":1e400,"b":3}
- [x] POST /soma deve retornar 400 quando um número JSON exceder o limite finito: {"a":2,"b":1e400}
- [x] Rota inexistente deve retornar 404 quando consultar uma rota não registrada

## montarOperacao.spec.ts

- [x] montarOperacao deve informar a operação quando montar uma subtração
- [x] montarOperacao deve retornar o objeto completo quando receber dois números
- [x] montarOperacao deve fornecer um resultado truthy quando a diferença não for zero
- [x] montarOperacao deve indicar ausência quando buscar um valor fora da operação
- [x] montarOperacao deve conter o primeiro operando quando montar os valores

## calcularFrete.spec.ts

- [x] calcularFrete deve rejeitar o peso quando receber 0
- [x] calcularFrete deve rejeitar o peso quando receber -1
- [x] calcularFrete deve rejeitar o peso quando receber NaN
- [x] calcularFrete deve rejeitar o peso quando receber Infinity
- [x] calcularFrete deve retornar R$ 10 quando o peso for 0.5 kg
- [x] calcularFrete deve retornar R$ 10 quando o peso for 1 kg
- [x] calcularFrete deve retornar R$ 12 quando o peso for 2 kg
- [x] calcularFrete deve retornar R$ 11 quando o peso for 1.5 kg
- [x] calcularFrete deve retornar R$ 18 quando o peso for 5 kg
- [x] calcularFrete deve retornar R$ 25 quando o peso for 5.01 kg
- [x] calcularFrete deve acrescentar R$ 5 quando o CEP começar com 9
- [x] calcularFrete deve lançar erro quando o CEP for "123"
- [x] calcularFrete deve lançar erro quando o CEP for ""
- [x] calcularFrete deve lançar erro quando o CEP for "abcdefgh"
- [x] calcularFrete deve lançar erro quando o CEP for null
- [x] calcularFrete deve lançar erro quando o CEP for undefined

## divide.spec.ts

- [x] divide deve retornar 5 quando dividir 10 por 2
- [x] divide deve retornar -5 quando dividir -10 por 2
- [x] divide deve retornar 0 quando dividir 0 por 5
- [x] divide deve retornar 3.5 quando dividir 7 por 2
- [x] divide deve lançar um erro quando o divisor for zero
- [x] divide deve informar a mensagem quando o divisor for zero
- [x] divide deve corresponder à expressão quando a mensagem mencionar zero
- [x] divide deve lançar Error quando o divisor for zero
- [x] divide deve executar sem erro quando dividir 10 por 5

## contador.spec.ts

- [x] contador deve retornar 1 quando incrementar uma vez
- [x] contador deve retornar 3 quando incrementar três vezes
- [x] contador deve começar em zero quando iniciar outro teste

## filtrarPares.spec.ts

- [x] filtrarPares deve retornar [2, 4, 6] quando filtrar [1, 2, 3, 4, 5, 6]
- [x] filtrarPares deve retornar [] quando filtrar [1, 3, 5]
- [x] filtrarPares deve retornar [] quando filtrar []
- [x] filtrarPares deve retornar [-4, 0] quando filtrar [-4, -3, 0, 7]
- [x] filtrarPares deve conter 12 quando filtrar 10, 11 e 12
- [x] filtrarPares deve manter quatro elementos quando todos forem pares
- [x] filtrarPares deve excluir 2 quando só houver ímpares
- [x] filtrarPares deve criar outro array quando filtrar sem modificar a entrada

## emailService.spec.ts

- [x] criarEnviarEmail deve retornar sucesso quando enviar o e-mail de boas-vindas
- [x] criarEnviarEmail deve chamar uma vez quando enviar para um usuário
- [x] criarEnviarEmail deve usar cada endereço quando enviar para dois usuários
- [x] criarEnviarEmail deve resolver sucesso quando a API de envio for assíncrona
- [x] criarEnviarEmail deve propagar o mesmo erro quando o envio falhar

## criarUsuario.spec.ts

- [x] criarUsuario deve gerar IDs distintos quando criar dois usuários
- [x] criarUsuario deve retornar o objeto completo quando receber nome e idade
- [x] criarUsuario deve possuir nome quando criar o usuário
- [x] criarUsuario deve preservar idade 30 quando receber esse valor
- [x] criarUsuario deve conter os campos solicitados quando comparar parcialmente
- [x] criarUsuario deve possuir nome truthy quando receber Maria

## asyncAwait.spec.ts

- [x] buscarDados com async/await deve retornar ok verdadeiro quando aguardar os dados
- [x] buscarDadosComErro deve rejeitar com a mensagem quando a busca falhar
- [x] buscarDadosComErro deve rejeitar com Error quando a busca falhar
- [x] buscarDadosComErro deve capturar Error quando aguardar a rejeição em try/catch

## calculo.spec.ts

- [x] soma deve retornar 5 quando somar 2 e 3
- [x] soma deve retornar 0 quando somar -1 e 1
- [x] soma deve retornar 0 quando somar 0 e 0
- [x] subtrai deve retornar 3 quando subtrair 5 e 2

## subtract.spec.ts

- [x] subtract deve retornar 6 quando subtrair dois positivos
- [x] subtract deve retornar -5 quando o subtraendo for maior
- [x] subtract deve retornar 7 quando subtrair zero
- [x] subtract deve retornar -3 quando subtrair dois negativos
- [x] subtract deve retornar 3 quando subtrair decimais

## promises.spec.ts

- [x] buscarDados com resolves deve resolver com o objeto completo quando buscar os dados
- [x] buscarDados com resolves deve possuir ok quando a promessa resolver
- [x] buscarDados com resolves deve conter ok verdadeiro quando a promessa resolver
- [x] buscarDados com resolves deve devolver Promise quando buscar os dados

## formatador.spec.ts

- [x] formatarNome deve retornar "Maria" quando o nome recebido for "maria"
- [x] formatarNome deve retornar "João" quando o nome recebido for " joão "
- [x] formatarNome deve retornar "Ana" quando o nome recebido for "ANA"
- [x] formatarNome deve retornar "" quando o nome recebido for ""

## mensagem.spec.ts

- [x] getMensagemBoasVindas deve gerar a mensagem quando receber Maria

## usuarioService.spec.ts

- [x] criarUsuarioService deve retornar o usuário quando o repositório encontrar o ID
- [x] criarUsuarioService deve retornar null quando o usuário não existir
- [x] criarUsuarioService deve aguardar o usuário quando o repositório for assíncrono

## sum.spec.ts

- [x] sum deve retornar 5 quando somar 2 e 3
