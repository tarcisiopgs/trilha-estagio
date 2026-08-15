# Trilha de estágio

Esse repositório é o programa de estudo do seu estágio. Ele diz o que estudar, em que ordem e como a gente vai saber que você aprendeu de verdade.

O acompanhamento do seu progresso não fica aqui — fica no Todoist, no projeto que eu compartilhei com você. Aqui mora o conteúdo.

## Como a trilha funciona

A trilha tem 10 módulos, numerados. A ordem não é sugestão, e eu queria deixar isso claro logo de cara: cada módulo depende do anterior. Não faz sentido você aprender Docker antes de ter um serviço rodando e um banco para conectar, do mesmo jeito que não faz sentido mexer com Git antes de saber o que é um arquivo oculto no terminal. Seguir a ordem é basicamente o que faz o seu tempo render.

Cada módulo tem quatro partes:

- **Objetivo** — o que você vai conseguir fazer no fim
- **O que estudar** — os assuntos, na ordem em que eles fazem sentido
- **Entregável** — o que você produz e me manda
- **Passou quando** — a lista objetiva que diz se acabou ou não

Você não avança de módulo por tempo decorrido. Avança quando o "passou quando" estiver inteiro cumprido. Caso leve mais tempo do que a gente imaginou, tudo bem — o problema mesmo seria avançar sem a base.

## O mapa

| # | Módulo | Depende de |
|---|---|---|
| 0 | [Máquina, terminal e sistema de arquivos](modulos/00-terminal.md) | — |
| 1 | [Git e GitHub](modulos/01-git.md) | 0 |
| 2 | [Ler, rastrear e depurar código](modulos/02-depuracao.md) | 0 |
| 3 | [HTTP e APIs na prática](modulos/03-http-e-apis.md) | 0, 2 |
| 4 | [Dados e SQL](modulos/04-dados-e-sql.md) | 2 |
| 5 | [JavaScript e TypeScript pra valer](modulos/05-javascript-typescript.md) | 2 |
| 6 | [Frontend com React](modulos/06-react.md) | 3, 5 |
| 7 | [Backend com Node](modulos/07-backend-node.md) | 3, 4, 5 |
| 8 | [Testes automatizados](modulos/08-testes.md) | 7 |
| 9 | [Ambiente, Docker e deploy](modulos/09-ambiente-docker-deploy.md) | 0, 4, 7 |
| 10 | [Aprofundamento](modulos/10-aprofundamento.md) | 9 |

Os módulos 0 a 9 têm conteúdo fechado. O 10 é diferente de propósito: nele você escolhe a direção e escreve a própria proposta, e a gente decide junto.

Um aviso para quem for ler tudo de uma vez: os módulos do fim vão parecer distantes agora, e tudo bem. O que importa é o módulo em que você está — o mapa completo está aqui só para você saber para onde a coisa vai.

## A esteira: a gente vai trabalhar como se trabalha

O conteúdo aqui é estudo, mas o **jeito de entregar é o de trabalho real**. Isso é de propósito. No meu ponto de vista, metade do que a gente aprende num primeiro emprego não é linguagem nem framework — é o processo em volta.

A partir do módulo 1 você tem um repositório seu, que é o seu caderno, e a gente trabalha assim:

- nada vai direto na `main`
- cada módulo vira uma issue
- cada entrega é uma branch e um Pull Request
- eu reviso o seu PR, e nada é mergeado sem review
- caso eu peça alguma mudança, você atualiza a mesma branch e responde o comentário

Por mais que pareça burocracia no começo, não é. Você vai abrir dezenas de PRs até o fim do estágio, e naturalmente isso vira reflexo — que é exatamente o que se espera de quem chega numa equipe.

**A cerimônia cresce junto com você.** Não é tudo desde o primeiro dia:

| A partir do módulo | O que entra |
|---|---|
| 1 | repositório, branch, PR, review |
| 2 | issue antes do PR; a descrição diz o que ficou faltando |
| 4 | revisão cruzada entre vocês, além da minha |
| 6 | CI rodando lint e teste no PR — o verde vira pré-requisito do meu review |
| 8 | CI sério, e deploy entra na conversa |

## Três regras que valem a trilha inteira

**1. Documentação oficial, em inglês.** Sempre que existir, eu preciso que a sua fonte seja a documentação oficial do projeto, e não vídeo dublado ou resumo de blog. Inglês técnico não se estuda em módulo separado, ele se aprende lendo todo dia — e em três meses de uso diário a diferença é enorme. Vídeo e curso servem, sim, mas depois que você já tiver tentado a documentação.

**2. Commit e Pull Request em inglês. Comentário e conversa em português.** Mesma lógica da regra anterior, e inclusive é assim que funciona na maioria dos times.

**3. Você não sobe código que não sabe explicar.** Pode usar IA, sem problema nenhum — mas depois de ter formado a sua hipótese, e pedindo explicação em vez de código pronto. O teste é simples: caso eu pergunte no review "por que você fez assim?", você precisa saber responder. Se não souber, aquilo ainda não é seu, tá? O módulo 2 existe justamente para resolver isso.

## Quando travar

Eu preciso que você trave, no máximo, 40 minutos na mesma coisa. Passou disso, me chama. E chegar dizendo "tentei A, B e C, a minha hipótese é X, mas não sei como testar" é um ótimo pedido de ajuda — bem diferente de "não está funcionando".
