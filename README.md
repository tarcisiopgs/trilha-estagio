# Trilha de estágio

Este repositório é o programa de estudo do estágio. Ele diz **o que estudar, em que ordem e como a gente sabe que você aprendeu**.

O acompanhamento do seu progresso não fica aqui — fica no Todoist, no projeto compartilhado entre você e eu. Aqui fica o conteúdo.

## Como a trilha funciona

A trilha tem 10 módulos, numerados. A ordem não é sugestão: cada módulo depende do anterior. Docker não faz sentido antes de você ter um serviço rodando e um banco pra conectar; Git não faz sentido antes de você saber o que é um arquivo oculto no terminal. Seguir a ordem é o que faz o tempo render.

Cada módulo tem quatro partes:

- **Objetivo** — o que você vai conseguir fazer no fim
- **O que estudar** — os assuntos, na ordem em que fazem sentido
- **Entregável** — o que você produz e me manda
- **Passou quando** — a lista objetiva que diz se acabou ou não

Você não avança de módulo por tempo decorrido. Avança quando o "passou quando" está inteiro cumprido. Se levar mais tempo que o previsto, tudo bem — o problema seria avançar sem a base.

## O mapa

| # | Módulo | Depende de |
|---|---|---|
| 0 | [Máquina, terminal e sistema de arquivos](modulos/00-terminal.md) | — |
| 1 | [Git e GitHub](modulos/01-git.md) | 0 |
| 2 | [Ler, rastrear e depurar código](modulos/02-depuracao.md) | 0 |
| 3 | [HTTP e APIs na prática](modulos/03-http-e-apis.md) | 0, 2 |
| 4 | [Dados e SQL](modulos/04-dados-e-sql.md) | 2 |
| 5 | JavaScript e TypeScript pra valer | 2 |
| 6 | Frontend com React | 3, 5 |
| 7 | Backend com Node | 3, 4, 5 |
| 8 | Testes automatizados | 7 |
| 9 | Ambiente, Docker e deploy | 0, 4, 7 |
| 10 | Aprofundamento | 9 |

Os módulos 5 a 10 são publicados conforme você chegar perto deles.

## A esteira: você vai trabalhar como se trabalha

O conteúdo é estudo, mas o **jeito de entregar é o de trabalho real**. Isso é de propósito: metade do que se aprende num primeiro emprego não é linguagem, é o processo em volta dela.

A partir do módulo 1 você tem um repositório próprio — o seu caderno — e ele funciona assim:

- nada vai direto na `main`
- cada módulo vira uma issue
- cada entrega é uma branch e um Pull Request
- eu reviso o PR; nada é mergeado sem review
- se eu pedir mudança, você atualiza a mesma branch e responde o comentário

Não é burocracia. É que você vai abrir dezenas de PRs até o fim do estágio, e no fim isso terá virado reflexo — que é exatamente o que se espera de quem chega numa equipe.

**A cerimônia cresce junto com você.** Não é tudo desde o dia um:

| A partir do módulo | O que entra |
|---|---|
| 1 | repositório, branch, PR, review |
| 2 | issue antes do PR; a descrição diz o que ficou faltando |
| 4 | revisão cruzada entre os estagiários, além da minha |
| 6 | CI rodando lint e teste no PR — o verde vira pré-requisito do meu review |
| 8 | CI sério, e deploy entra na conversa |

## Três regras que valem a trilha inteira

**1. Documentação oficial, em inglês.** Sempre que existir, a fonte é a documentação oficial do projeto, não vídeo dublado nem resumo de blog. Inglês técnico não se estuda em módulo separado — se aprende lendo todo dia, e em três meses de uso a diferença é enorme. Vídeo e curso servem, mas depois de você ter tentado a documentação.

**2. Commit e Pull Request em inglês. Comentário e conversa em português.** Mesma lógica da regra anterior, e é assim que funciona na maioria dos times.

**3. Você não sobe código que não sabe explicar.** Pode usar IA — mas depois de ter formado uma hipótese, e pedindo explicação em vez de código pronto. O teste é simples: se eu perguntar no review "por que você fez assim?", você precisa saber responder. Se não souber, ainda não é seu, e o módulo 2 existe justamente para resolver isso.

## Quando travar

Trave por, no máximo, 40 minutos numa mesma coisa. Passou disso, me chama. Chegar com "tentei A, B e C, minha hipótese é X, não sei como testar" é um ótimo pedido de ajuda — e é bem diferente de "não funciona".
