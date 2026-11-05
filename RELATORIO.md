# Relatório · Controle de Gastos

Nome:
Modelo usado: Big Pickle (OpenCode)

## Passo 1 · AGENTS.md
1.1 O que o /init descobriu sozinho sobre o projeto?
Resposta: Identificou que o projeto usa React e Vite e ainda estava com a página padrão, sem as funcionalidades de controle de gastos. Também identificou os arquivos principais, os comandos disponíveis e o uso de JavaScript/JSX.

1.2 Qual regra você adicionou ao AGENTS.md e por quê?
Resposta: Adicionei a regra para não criar nem editar o RELATORIO.md, para manter minhas respostas da atividade sob meu controle. Também deixei as instruções de código e comunicação em português.

## Passo 2 · Estrutura
2.1 Quais arquivos o plano criou ou alterou?
Resposta: O plano propôs criar FormularioGasto.jsx, ListaGastos.jsx e TotalGastos.jsx em src/components e alterar App.jsx, App.css e index.css.

2.2 Qual regra do AGENTS.md você viu sendo aplicada?
Resposta: Vi a regra de criar um componente por arquivo, usar nomes e textos em português e não instalar bibliotecas novas.

## Missão 1 · Adicionar
M1.1 Como o app trata "12,50" com vírgula? Quem decidiu isso: você ou o agente?
Resposta: Eu pedi para o app aceitar valores com vírgula, como "12,50", e o agente decidiu como fazer esse tratamento no código.

M1.2 Quantas tool calls a missão usou?
Resposta: Não registrei o número exato de tool calls durante a missão.

## Missão 2 · Total
M2.1 Quanto deu 0,10 + 0,20 no app?
Resposta: Deu R$ 0,30.

M2.2 Por que 0.1 + 0.2 não dá exatamente 0.3 no JavaScript?
Resposta: Porque números decimais como 0.1 e 0.2 não são representados exatamente em ponto flutuante binário. O app soma valores em centavos inteiros para evitar esse problema no total.

## Missão 3 · Remover
M3.1 O agente mudou algo que você não pediu? O quê?
Resposta: Além do botão, o plano incluiu estilos para hover e foco e um aria-label para acessibilidade.

M3.2 Como o código sabe qual gasto remover?
Resposta: Cada gasto tem um id. O app filtra a lista pelo id e mantém os outros gastos.

## Missão 4 · Filtrar
M4.1 Qual foi o seu prompt da tentativa B?
Resposta: Planeje adicionar um filtro por categoria acima da lista de gastos, com as opções “Todas”, “Alimentação”, “Transporte”, “Lazer” e “Outros”. A lista deve mostrar apenas os gastos da categoria selecionada e o total deve somar somente os gastos visíveis. Se eu adicionar um gasto de outra categoria enquanto o filtro estiver ativo, mantenha o filtro e não inclua esse gasto na lista nem no total filtrado. A opção “Todas” deve mostrar todos os gastos e somar o total geral.

M4.2 Qual tentativa gerou o melhor plano, A ou B? Por quê?
Resposta: A tentativa B gerou o melhor plano porque especificou a posição do filtro, as categorias, o conteúdo da lista e como o total deveria funcionar.

## Bônus · Salvar
B.1 Onde o localStorage guarda os dados?
Resposta: No armazenamento local do navegador, associado ao site e ao perfil do navegador que estou usando.

B.2 Por que os gastos não aparecem em outro navegador?
Resposta: Porque o localStorage fica neste navegador e neste perfil; sem um servidor ou sincronização, outro navegador não tem acesso a esses dados.

## Reflexão final
R.1 Sem olhar o código, explique como um dos seus componentes recebe e altera os gastos.
Resposta: O App mantém a lista de gastos e a envia para a lista. Quando adiciono um gasto, o formulário avisa o App; quando removo, a lista envia o id do gasto para o App, que atualiza a lista.

R.2 Em que momento você aceitou algo sem entender?
Resposta: Em alguns momentos aceitei detalhes da solução proposta pelo agente antes de entender todos eles. Conferir o diff e testar o comportamento me ajudou a entender melhor as decisões.

R.3 Quais decisões foram suas e quais foram do agente?
Resposta: Eu defini as funcionalidades, os prompts e os casos que queria testar. O agente propôs os planos e implementou o código; eu revisei os resultados e decidi o que executar.

R.4 O que continuaria valendo se você trocasse o modelo?
Resposta: Os requisitos, as regras do AGENTS.md, os casos de teste e a necessidade de revisar o código continuariam valendo. Outro modelo poderia escrever o código de outra forma, mas ainda teria que atender esses critérios.