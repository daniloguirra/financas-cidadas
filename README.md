# Finanças Cidadãs – Trilha de Educação Financeira (ODS 8)

Projeto de Extensão **"Agir local e pensar global: atuação multidisciplinar"**
Temática: **Inclusão Econômica e Acesso a Serviços Financeiros (ODS 8)**

## Objetivo
Oferecer uma trilha de aprendizagem gratuita, curta e gamificada, sem cadastro, para que cidadãos (famílias de baixa renda, trabalhadores informais, jovens e pequenos empreendedores) aprendam a organizar o dinheiro, evitar dívidas e golpes, formalizar seus negócios e conhecer seus direitos como consumidores de serviços financeiros.

## Como funciona
1. A trilha tem **6 módulos**, liberados em sequência.
2. Cada módulo tem uma **lição curta** (4 telas) e um **quiz com 5 perguntas**.
3. Cada resposta mostra na hora se está certa e **explica o porquê**.
4. É preciso acertar **70%** (4 de 5) para concluir o módulo e ganhar a medalha.
5. Cada acerto vale **10 pontos**. Vale o melhor resultado de cada módulo.
6. Ao concluir tudo, o participante emite um **certificado** com o próprio nome, que pode ser impresso ou salvo em PDF.

## Módulos
| # | Módulo | Conteúdo |
|---|--------|----------|
| 1 | Orçamento pessoal | Receitas x despesas, gastos fixos e variáveis, regra 50/30/20 |
| 2 | Juros, crédito e cartão | Juros compostos, rotativo, cheque especial, CET, Lei do Superendividamento |
| 3 | Poupança e reserva de emergência | Quanto guardar, "pague-se primeiro", onde investir a reserva |
| 4 | Proteção contra golpes | Falsa central, falso parente, pirâmides, MED do Pix |
| 5 | Empreender e formalizar (MEI) | Separar finanças, formação de preço, MEI e seus benefícios |
| 6 | Serviços financeiros e direitos | Conta com serviços essenciais gratuitos, Pix, Registrato, Valores a Receber, onde reclamar |

## Privacidade
O progresso fica salvo apenas no navegador do usuário (`localStorage`). Nenhum dado é enviado para servidores.

## Como executar
Abra o arquivo `index.html` em qualquer navegador. Não é preciso instalar nada.

Para publicar gratuitamente, suba a pasta para um repositório no GitHub e ative o **GitHub Pages**.

## Como editar o conteúdo
Todo o conteúdo (lições e perguntas) fica em `js/conteudo.js`. Para criar um módulo novo, copie um bloco existente e altere os textos. Em cada pergunta, `correta` é o índice da alternativa certa (0 = A, 1 = B...).

## Tecnologias
HTML5, CSS3 e JavaScript puro (sem bibliotecas externas). Ícones, ilustrações e gráficos são SVG desenhados no próprio projeto, com a cor oficial do ODS 8 (#A21942). O site é responsivo (funciona no celular), tem modo escuro automático e boa acessibilidade.

## Estrutura
```
financas-cidadas/
├── index.html
├── css/style.css
├── js/icones.js     ← logo, ícones e ilustração
├── js/graficos.js   ← gráficos das lições
├── js/conteudo.js   ← lições e perguntas
├── js/app.js        ← lógica da trilha, quiz e certificado
└── README.md
```
