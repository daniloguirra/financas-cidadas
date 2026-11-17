/* =========================================================
   Conteúdo da trilha: módulos, lições e perguntas do quiz.
   Para adicionar um módulo, basta incluir um novo objeto no array.
   "correta" é o índice (começando em 0) da opção certa.
   ========================================================= */

const MODULOS = [
  {
    id: 'orcamento',
    icone: 'orcamento',
    titulo: 'Orçamento pessoal',
    resumo: 'Descubra para onde vai seu dinheiro e aprenda a regra 50/30/20.',
    licao: [
      {
        titulo: 'O que é orçamento?',
        texto: `<p>Orçamento é um <strong>plano</strong> para o seu dinheiro: quanto entra (receitas) e quanto sai (despesas) em um mês.</p>
                <p>Sem orçamento, o dinheiro "some" e a gente não sabe explicar onde gastou. Com ele, você decide antes para onde cada real vai.</p>`,
      },
      {
        titulo: 'Passo 1: anote tudo',
        texto: `<p>Durante 30 dias, anote <strong>todos</strong> os gastos, até o cafezinho e a taxa de entrega. Pode ser em um caderno, no bloco de notas do celular ou em uma planilha.</p>
                <p>Os pequenos gastos do dia a dia são os que mais surpreendem no fim do mês.</p>`,
      },
      {
        titulo: 'Passo 2: separe fixos e variáveis',
        texto: `<ul>
                  <li><strong>Gastos fixos</strong>: têm o mesmo valor todo mês (aluguel, internet, mensalidade).</li>
                  <li><strong>Gastos variáveis</strong>: mudam de mês para mês (mercado, luz, lazer, delivery).</li>
                </ul>
                <p>É nos variáveis que normalmente dá para economizar mais rápido.</p>`,
      },
      {
        titulo: 'A regra 50/30/20',
        grafico: 'regra503020',
        texto: `<p>Uma forma simples de dividir a renda líquida (o que cai na conta):</p>
                <ul>
                  <li><strong>50% Necessidades</strong>: moradia, alimentação, transporte, saúde, contas básicas.</li>
                  <li><strong>30% Desejos</strong>: lazer, roupas, delivery, assinaturas.</li>
                  <li><strong>20% Futuro</strong>: reserva de emergência, investimentos e quitar dívidas.</li>
                </ul>
                <p class="dica">Se a renda é baixa, as necessidades podem passar de 50%, e tudo bem. O importante é guardar <strong>alguma coisa</strong> todo mês.</p>`,
      },
    ],
    quiz: [
      {
        pergunta: 'Qual é o primeiro passo para montar um orçamento?',
        opcoes: ['Fazer um empréstimo', 'Anotar todas as receitas e despesas', 'Cancelar todos os gastos com lazer', 'Abrir uma conta em outro banco'],
        correta: 1,
        explicacao: 'Sem saber quanto entra e quanto sai, não dá para planejar. Anotar tudo é sempre o primeiro passo.',
      },
      {
        pergunta: 'Qual destes é um gasto FIXO?',
        opcoes: ['Delivery no fim de semana', 'Conta de luz', 'Aluguel', 'Presente de aniversário'],
        correta: 2,
        explicacao: 'O aluguel costuma ter o mesmo valor todo mês. A conta de luz varia conforme o consumo.',
      },
      {
        pergunta: 'Pela regra 50/30/20, quanto de uma renda de R$ 2.000 deveria ir para o futuro (poupança e dívidas)?',
        opcoes: ['R$ 200', 'R$ 400', 'R$ 600', 'R$ 1.000'],
        correta: 1,
        explicacao: '20% de R$ 2.000 = R$ 400. Os outros valores seriam: R$ 1.000 para necessidades e R$ 600 para desejos.',
      },
      {
        pergunta: 'Assinatura de streaming entra em qual grupo da regra 50/30/20?',
        opcoes: ['Necessidades', 'Desejos', 'Futuro', 'Nenhum, não precisa anotar'],
        correta: 1,
        explicacao: 'Streaming é algo bom de ter, mas não é essencial para viver. Por isso entra em "Desejos".',
      },
      {
        pergunta: 'Sua renda é baixa e as necessidades já usam 70% dela. O que fazer?',
        opcoes: ['Desistir de organizar o dinheiro', 'Pegar empréstimo para chegar nos 50%', 'Tentar guardar um valor pequeno, mesmo que seja pouco', 'Parar de pagar as contas básicas'],
        correta: 2,
        explicacao: 'A regra é uma referência, não uma obrigação. Criar o hábito de guardar, mesmo com valores pequenos, é o que importa.',
      },
    ],
  },

  {
    id: 'juros',
    icone: 'cartao',
    titulo: 'Juros, crédito e cartão',
    resumo: 'Entenda por que algumas dívidas crescem tão rápido e como fugir delas.',
    licao: [
      {
        titulo: 'O que são juros?',
        grafico: 'bolaDeNeve',
        texto: `<p>Juros são o <strong>"aluguel" do dinheiro</strong>. Quando você pega dinheiro emprestado, paga juros ao banco. Quando você guarda dinheiro, recebe juros.</p>
                <p>Nos juros compostos, os juros de um mês viram parte da dívida e geram mais juros no mês seguinte: é a famosa <strong>"bola de neve"</strong>.</p>`,
      },
      {
        titulo: 'Os vilões: rotativo e cheque especial',
        texto: `<p>O <strong>rotativo do cartão</strong> (quando você paga só o mínimo da fatura) e o <strong>cheque especial</strong> estão entre os juros mais caros do Brasil.</p>
                <p>Desde 2024, a lei limita os juros e encargos do rotativo a <strong>100% do valor da dívida</strong>, mas isso ainda significa que uma dívida pode <strong>dobrar</strong>.</p>`,
      },
      {
        titulo: 'Compare antes de contratar',
        texto: `<p>Antes de pegar qualquer crédito, pergunte pelo <strong>CET (Custo Efetivo Total)</strong>. Ele soma juros, tarifas, seguros e impostos, e mostra quanto você realmente vai pagar.</p>
                <p>Em geral, do mais barato para o mais caro: consignado → empréstimo pessoal → parcelamento da fatura → cheque especial e rotativo.</p>`,
      },
      {
        titulo: 'Já estou endividado, e agora?',
        texto: `<ul>
                  <li>Liste todas as dívidas com valor, juros e parcelas.</li>
                  <li>Priorize as de <strong>juros mais altos</strong> (cartão e cheque especial).</li>
                  <li>Negocie: bancos e lojas costumam dar descontos em feirões de renegociação.</li>
                  <li>A <strong>Lei do Superendividamento</strong> (Lei 14.181/2021) garante o direito a um plano de pagamento que preserve o mínimo para viver. Procure o Procon.</li>
                </ul>`,
      },
    ],
    quiz: [
      {
        pergunta: 'O que acontece quando você paga só o valor MÍNIMO da fatura do cartão?',
        opcoes: ['O restante é perdoado', 'O restante entra no rotativo, com juros altíssimos', 'O banco cancela o cartão automaticamente', 'Nada, é a forma recomendada de pagar'],
        correta: 1,
        explicacao: 'O saldo que sobra vai para o crédito rotativo, uma das linhas de crédito mais caras do país.',
      },
      {
        pergunta: 'O que significa CET?',
        opcoes: ['Cadastro de Empréstimo Total', 'Custo Efetivo Total', 'Conta Especial de Transferência', 'Crédito Emergencial do Trabalhador'],
        correta: 1,
        explicacao: 'O Custo Efetivo Total mostra tudo o que você vai pagar: juros, tarifas, seguros e impostos. Use-o para comparar ofertas.',
      },
      {
        pergunta: 'Qual destas costuma ser a linha de crédito MAIS CARA?',
        opcoes: ['Empréstimo consignado', 'Financiamento imobiliário', 'Cheque especial', 'Empréstimo com garantia de imóvel'],
        correta: 2,
        explicacao: 'O cheque especial, junto com o rotativo do cartão, tem os juros mais altos. É para emergências de poucos dias, não para uso contínuo.',
      },
      {
        pergunta: 'Você tem duas dívidas: cartão de crédito e um consignado. Qual priorizar?',
        opcoes: ['O consignado, porque é descontado do salário', 'O cartão, porque tem juros mais altos', 'Tanto faz', 'Nenhuma, esperar prescrever'],
        correta: 1,
        explicacao: 'Quitar primeiro a dívida com juros mais altos faz você economizar mais dinheiro no total.',
      },
      {
        pergunta: 'Qual lei protege quem não consegue pagar as dívidas sem comprometer o mínimo para viver?',
        opcoes: ['Lei do Superendividamento', 'Lei do Inquilinato', 'Lei Maria da Penha', 'Lei de Acesso à Informação'],
        correta: 0,
        explicacao: 'A Lei 14.181/2021 (Superendividamento) garante a renegociação das dívidas preservando o mínimo existencial.',
      },
    ],
  },

  {
    id: 'reserva',
    icone: 'reserva',
    titulo: 'Poupança e reserva de emergência',
    resumo: 'Monte um "colchão" para imprevistos e pare de depender de empréstimos.',
    licao: [
      {
        titulo: 'Para que serve a reserva de emergência?',
        texto: `<p>É um dinheiro guardado <strong>só para imprevistos</strong>: perda do emprego, problema de saúde, conserto do carro ou da geladeira.</p>
                <p>Quem tem reserva não precisa recorrer a empréstimos caros quando algo dá errado.</p>`,
      },
      {
        titulo: 'Quanto guardar?',
        grafico: 'metaReserva',
        texto: `<p>O ideal é ter guardado o equivalente a <strong>3 a 6 meses</strong> do seu custo de vida essencial. Para autônomos e MEIs, cuja renda varia mais, o recomendado é até <strong>12 meses</strong>.</p>
                <p>Exemplo: se você gasta R$ 1.500 por mês com o essencial, a meta de 6 meses é R$ 9.000.</p>`,
      },
      {
        titulo: 'Pague-se primeiro',
        texto: `<p>O segredo é guardar <strong>assim que o dinheiro entra</strong>, e não o que sobra no fim do mês (porque quase nunca sobra).</p>
                <p>Programe uma transferência automática no dia do pagamento, mesmo que de R$ 20. O hábito vale mais do que o valor.</p>`,
      },
      {
        titulo: 'Onde guardar?',
        texto: `<p>A reserva precisa ser <strong>segura</strong> e com <strong>resgate rápido</strong>. Boas opções:</p>
                <ul>
                  <li>Contas e CDBs com liquidez diária que rendem 100% do CDI.</li>
                  <li>Tesouro Selic (título público).</li>
                </ul>
                <p>Evite ações, criptomoedas ou qualquer coisa que possa cair de valor justamente quando você precisar.</p>`,
      },
    ],
    quiz: [
      {
        pergunta: 'Para que serve a reserva de emergência?',
        opcoes: ['Comprar um celular novo', 'Cobrir imprevistos como desemprego ou doença', 'Viajar nas férias', 'Investir em ações'],
        correta: 1,
        explicacao: 'A reserva é só para emergências. Para objetivos como viagem ou celular, crie uma poupança separada.',
      },
      {
        pergunta: 'Seu custo essencial é R$ 1.200 por mês. Qual seria uma reserva de 6 meses?',
        opcoes: ['R$ 1.200', 'R$ 3.600', 'R$ 7.200', 'R$ 12.000'],
        correta: 2,
        explicacao: 'R$ 1.200 × 6 meses = R$ 7.200.',
      },
      {
        pergunta: 'O que significa "pague-se primeiro"?',
        opcoes: ['Pagar suas dívidas antes das contas', 'Guardar dinheiro assim que recebe, antes de gastar', 'Comprar algo para você antes de pagar as contas', 'Pedir o salário adiantado'],
        correta: 1,
        explicacao: 'Separar a poupança logo no dia do pagamento evita que o dinheiro seja gasto antes.',
      },
      {
        pergunta: 'Qual é um bom lugar para guardar a reserva de emergência?',
        opcoes: ['Criptomoedas', 'Ações de uma empresa', 'Tesouro Selic ou CDB com liquidez diária', 'Embaixo do colchão'],
        correta: 2,
        explicacao: 'A reserva precisa ser segura e poder ser resgatada rápido. Tesouro Selic e CDBs com liquidez diária cumprem esses requisitos.',
      },
      {
        pergunta: 'Por que autônomos e MEIs devem ter uma reserva MAIOR?',
        opcoes: ['Porque pagam mais impostos', 'Porque a renda deles varia mais de um mês para o outro', 'Porque é obrigatório por lei', 'Porque não podem ter conta em banco'],
        correta: 1,
        explicacao: 'Sem salário fixo, os meses fracos são mais comuns. Uma reserva maior dá segurança nesses períodos.',
      },
    ],
  },

  {
    id: 'golpes',
    icone: 'escudo',
    titulo: 'Proteção contra golpes',
    resumo: 'Reconheça os golpes mais comuns e proteja seu dinheiro.',
    licao: [
      {
        titulo: 'Regra de ouro',
        texto: `<p>O banco <strong>nunca</strong> liga, manda SMS ou WhatsApp pedindo:</p>
                <ul>
                  <li>senha, código de segurança ou token;</li>
                  <li>que você faça um Pix ou transferência "de teste" ou "para uma conta segura";</li>
                  <li>que você instale aplicativos de acesso remoto.</li>
                </ul>
                <p>Na dúvida, <strong>desligue</strong> e ligue você mesmo para o número oficial que está atrás do cartão.</p>`,
      },
      {
        titulo: 'Golpe do falso parente',
        grafico: 'alertaGolpe',
        texto: `<p>Alguém manda mensagem de um número novo dizendo: <em>"Oi mãe, troquei de número. Pode me fazer um Pix urgente?"</em></p>
                <p>Antes de qualquer transferência, <strong>ligue para o número antigo</strong> da pessoa ou faça uma pergunta que só ela saberia responder.</p>`,
      },
      {
        titulo: 'Promessas boas demais',
        texto: `<p>Desconfie de:</p>
                <ul>
                  <li>investimentos com "lucro garantido" muito acima do mercado;</li>
                  <li>esquemas em que você ganha para trazer novas pessoas (pirâmide financeira);</li>
                  <li>empréstimos que pedem um depósito antecipado para "liberar" o dinheiro;</li>
                  <li>links de promoções imperdíveis recebidos por mensagem.</li>
                </ul>`,
      },
      {
        titulo: 'Fui vítima, e agora?',
        texto: `<ul>
                  <li>Avise o banco <strong>imediatamente</strong> pelos canais oficiais. Para Pix, peça a abertura do <strong>MED (Mecanismo Especial de Devolução)</strong>.</li>
                  <li>Registre um boletim de ocorrência (pode ser online na maioria dos estados).</li>
                  <li>Troque as senhas e avise seus contatos se o golpe usou seu nome.</li>
                </ul>`,
      },
    ],
    quiz: [
      {
        pergunta: 'Alguém liga dizendo ser do seu banco e pede o código que chegou por SMS. O que fazer?',
        opcoes: ['Passar o código, já que é do banco', 'Desligar e ligar no número oficial do banco', 'Pedir o nome do atendente e passar o código', 'Passar só metade do código'],
        correta: 1,
        explicacao: 'O banco nunca pede códigos ou senhas. Desligue e entre em contato pelos canais oficiais.',
      },
      {
        pergunta: 'Um "filho" manda mensagem de um número novo pedindo um Pix urgente. Qual a atitude correta?',
        opcoes: ['Fazer o Pix rapidamente para ajudar', 'Ligar para o número antigo do filho para confirmar', 'Pedir que ele mande uma foto', 'Fazer um Pix menor para testar'],
        correta: 1,
        explicacao: 'Confirmar por outro canal (ligação para o número conhecido) é a forma mais segura de evitar o golpe do falso parente.',
      },
      {
        pergunta: 'Um investimento promete 10% de lucro garantido por mês. Isso é sinal de:',
        opcoes: ['Ótima oportunidade', 'Possível golpe ou pirâmide financeira', 'Investimento do governo', 'Poupança turbinada'],
        correta: 1,
        explicacao: 'Nenhum investimento sério garante retornos tão altos. Promessas assim são um forte sinal de golpe.',
      },
      {
        pergunta: 'Uma financeira pede um depósito antecipado para "liberar" seu empréstimo. Isso é:',
        opcoes: ['Normal, é uma taxa obrigatória', 'Golpe: instituições sérias não cobram para liberar crédito', 'Exigência do Banco Central', 'Seguro do empréstimo'],
        correta: 1,
        explicacao: 'Cobrar antes de liberar o empréstimo é um golpe clássico. Instituições sérias descontam as tarifas do próprio valor liberado.',
      },
      {
        pergunta: 'Você caiu num golpe via Pix. O que pedir ao banco?',
        opcoes: ['Um novo cartão', 'A abertura do MED (Mecanismo Especial de Devolução)', 'Aumento do limite', 'Nada, Pix não tem como recuperar'],
        correta: 1,
        explicacao: 'O MED permite que o banco tente bloquear e devolver valores de Pix feitos em casos de golpe. Quanto antes avisar, melhor.',
      },
    ],
  },

  {
    id: 'empreender',
    icone: 'loja',
    titulo: 'Empreender e formalizar (MEI)',
    resumo: 'Transforme o bico em negócio: preço justo, controle e formalização.',
    licao: [
      {
        titulo: 'Separe o dinheiro do negócio',
        texto: `<p>O erro mais comum de quem empreende é misturar o dinheiro da casa com o do negócio. Assim fica impossível saber se está tendo lucro.</p>
                <p>Tenha uma conta (ou pelo menos uma carteira digital) só para o negócio e defina um <strong>"salário"</strong> fixo para você retirar todo mês.</p>`,
      },
      {
        titulo: 'Como calcular o preço',
        grafico: 'composicaoPreco',
        texto: `<p>Preço não é chute. Ele precisa cobrir:</p>
                <ul>
                  <li><strong>Custo dos materiais</strong> (ingredientes, embalagem, matéria-prima);</li>
                  <li><strong>Custos fixos</strong> divididos pela produção (gás, luz, internet, transporte);</li>
                  <li><strong>Seu tempo de trabalho</strong>;</li>
                  <li><strong>Lucro</strong>, que é o que permite o negócio crescer.</li>
                </ul>
                <p>Se você vende pelo preço do custo, está trabalhando de graça.</p>`,
      },
      {
        titulo: 'O que é o MEI?',
        texto: `<p>O <strong>Microempreendedor Individual</strong> é a forma mais simples de formalizar um pequeno negócio. A abertura é <strong>gratuita</strong> pelo Portal do Empreendedor (gov.br/mei).</p>
                <p>O MEI paga uma guia mensal fixa (o DAS), de valor baixo, que inclui a contribuição ao INSS. Há um limite de faturamento anual. Confira o valor atual no Portal do Empreendedor.</p>`,
      },
      {
        titulo: 'Vantagens de formalizar',
        texto: `<ul>
                  <li><strong>CNPJ</strong>: pode emitir nota fiscal e vender para empresas.</li>
                  <li><strong>INSS</strong>: aposentadoria, auxílio-doença e salário-maternidade.</li>
                  <li>Acesso a <strong>crédito</strong> com juros menores e conta PJ.</li>
                  <li>Mais credibilidade com clientes e fornecedores.</li>
                </ul>
                <p class="dica">O Sebrae oferece cursos e orientação gratuitos para quem quer empreender.</p>`,
      },
    ],
    quiz: [
      {
        pergunta: 'Por que separar o dinheiro do negócio do dinheiro pessoal?',
        opcoes: ['Porque é proibido misturar', 'Para saber se o negócio está realmente dando lucro', 'Para pagar menos impostos', 'Não precisa separar'],
        correta: 1,
        explicacao: 'Quando tudo se mistura, você não sabe quanto o negócio gera de verdade nem quanto pode retirar.',
      },
      {
        pergunta: 'Qual destes itens NÃO deve faltar no cálculo do preço de venda?',
        opcoes: ['O preço do concorrente apenas', 'O valor do seu tempo de trabalho', 'A opinião dos amigos', 'O preço que você pagaria'],
        correta: 1,
        explicacao: 'Seu tempo tem valor. Um preço justo cobre materiais, custos fixos, seu trabalho e ainda gera lucro.',
      },
      {
        pergunta: 'Quanto custa abrir um MEI pelo Portal do Empreendedor?',
        opcoes: ['R$ 500', 'Um salário mínimo', 'É gratuito', 'Depende do contador'],
        correta: 2,
        explicacao: 'A formalização como MEI pelo portal oficial (gov.br/mei) é gratuita. Cuidado com sites que cobram por isso.',
      },
      {
        pergunta: 'Qual benefício o MEI tem ao pagar o DAS em dia?',
        opcoes: ['Isenção de todas as contas', 'Cobertura do INSS (aposentadoria, auxílio-doença etc.)', 'Empréstimo sem juros', 'Salário do governo'],
        correta: 1,
        explicacao: 'O DAS inclui a contribuição previdenciária, que garante acesso aos benefícios do INSS.',
      },
      {
        pergunta: 'Você vende bolos a R$ 30, mas cada um custa R$ 30 em ingredientes, gás e embalagem. Isso significa:',
        opcoes: ['Lucro de R$ 30', 'Você está trabalhando de graça', 'O preço está ótimo', 'Deveria vender mais barato'],
        correta: 1,
        explicacao: 'Se o preço só cobre os custos, não sobra nada para pagar seu trabalho nem para o lucro.',
      },
    ],
  },

  {
    id: 'direitos',
    icone: 'banco',
    titulo: 'Serviços financeiros e seus direitos',
    resumo: 'Conheça serviços gratuitos e ferramentas oficiais que todo cidadão pode usar.',
    licao: [
      {
        titulo: 'Conta bancária gratuita',
        texto: `<p>Todo banco é obrigado a oferecer uma conta com <strong>pacote de serviços essenciais gratuito</strong>, com um número mínimo de saques, transferências e extratos sem cobrança.</p>
                <p>Se você paga tarifa e usa pouco a conta, peça ao banco para mudar para o pacote essencial. Contas digitais também costumam ser gratuitas.</p>`,
      },
      {
        titulo: 'Pix',
        texto: `<p>O Pix é <strong>gratuito para pessoas físicas</strong>, funciona 24 horas e cai na hora. É uma ótima alternativa a TED, DOC e boletos.</p>
                <p>Use o recurso de <strong>limite noturno</strong> e cadastre contatos de confiança para aumentar a segurança.</p>`,
      },
      {
        titulo: 'Ferramentas do Banco Central',
        texto: `<ul>
                  <li><strong>Registrato</strong>: mostra todas as suas dívidas, contas e chaves Pix em qualquer banco. Útil para descobrir contas ou empréstimos feitos no seu nome.</li>
                  <li><strong>Valores a Receber</strong>: consulta se você (ou um familiar falecido) tem dinheiro esquecido em bancos.</li>
                </ul>
                <p>Ambos são gratuitos e acessados com a conta gov.br.</p>`,
      },
      {
        titulo: 'Onde reclamar',
        texto: `<ul>
                  <li><strong>SAC e Ouvidoria</strong> do próprio banco (primeiro passo).</li>
                  <li><strong>Consumidor.gov.br</strong>: plataforma pública onde as empresas respondem reclamações.</li>
                  <li><strong>Procon</strong>: orientação e defesa do consumidor.</li>
                  <li><strong>Banco Central</strong>: recebe reclamações contra instituições financeiras.</li>
                </ul>`,
      },
    ],
    quiz: [
      {
        pergunta: 'Os bancos são obrigados a oferecer:',
        opcoes: ['Cartão de crédito para todos', 'Um pacote de serviços essenciais gratuito', 'Empréstimo sem juros', 'Cheque especial ilimitado'],
        correta: 1,
        explicacao: 'Pelas regras do Banco Central, toda conta corrente pode ter um pacote de serviços essenciais sem tarifa.',
      },
      {
        pergunta: 'Para pessoas físicas, o Pix é:',
        opcoes: ['Pago por transferência', 'Gratuito', 'Só funciona em horário comercial', 'Só para valores acima de R$ 100'],
        correta: 1,
        explicacao: 'O Pix é gratuito para pessoas físicas e funciona 24 horas por dia, 7 dias por semana.',
      },
      {
        pergunta: 'Qual ferramenta mostra todas as dívidas e contas no seu nome em qualquer banco?',
        opcoes: ['Registrato', 'Serasa Premium', 'Carteira de Trabalho Digital', 'Receita Federal'],
        correta: 0,
        explicacao: 'O Registrato, do Banco Central, é gratuito e mostra seus relacionamentos com todas as instituições financeiras.',
      },
      {
        pergunta: 'Como descobrir se você tem dinheiro esquecido em algum banco?',
        opcoes: ['Ligando para todos os bancos', 'Pelo sistema Valores a Receber, do Banco Central', 'Pagando um despachante', 'Não tem como descobrir'],
        correta: 1,
        explicacao: 'O sistema Valores a Receber é gratuito e oficial. Desconfie de sites ou mensagens que cobram para fazer essa consulta.',
      },
      {
        pergunta: 'O banco cobrou uma tarifa indevida e o SAC não resolveu. Onde reclamar?',
        opcoes: ['Nas redes sociais apenas', 'Consumidor.gov.br, Procon ou Banco Central', 'Em lugar nenhum, tem que aceitar', 'Na delegacia'],
        correta: 1,
        explicacao: 'Depois do SAC e da ouvidoria, você pode recorrer ao Consumidor.gov.br, ao Procon ou registrar reclamação no Banco Central.',
      },
    ],
  },
];
