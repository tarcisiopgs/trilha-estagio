# Trilha de estágio

Esse repositório é o programa de estudo do seu estágio. Ele diz o que estudar, em que ordem e como a gente vai saber que você aprendeu de verdade.

O acompanhamento do seu progresso não fica aqui — fica no Todoist, no projeto que eu compartilhei com você. Lá é só o andamento: em que módulo você está e quando você me chama.

**Este repositório é a fonte da verdade.** O que estudar, o que entregar, como entregar e o "passou quando" de cada módulo estão aqui, e só aqui. Caso alguma coisa no Todoist pareça dizer outra coisa, o que vale é o que está escrito no módulo — e me avisa, que eu corrijo.

## Antes do módulo 0: a sua máquina

A trilha inteira assume um terminal Unix. macOS e Linux funcionam direto. **Caso você esteja no Windows, eu preciso que você instale o WSL antes de começar o módulo 0** — isso não é preferência minha, é pré-requisito.

O motivo é prático: `chmod`, `lsof`, `man`, `.bashrc`, permissão de arquivo, o Docker do módulo 9 — nada disso existe do mesmo jeito no PowerShell, e boa parte simplesmente não existe. Seguir a trilha no Windows puro faz você gastar as suas horas traduzindo comando em vez de entender o que o comando faz. E o pior nem é o tempo: é que você aprende um modelo que não bate com o que vai encontrar em servidor, em CI e em container, que é Linux em todos os casos.

Instalar é um comando só, no PowerShell aberto como administrador:

```powershell
wsl --install
```

Depois disso, **todo** o trabalho da trilha acontece dentro do WSL: terminal, arquivos, Git, editor. O VS Code tem a extensão "WSL", que te deixa editar normalmente pela janela do Windows com tudo rodando do lado Linux. Uma regra que evita dor de cabeça: guarde os projetos dentro do sistema de arquivos do Linux (`~/projetos`, por exemplo) e não em `/mnt/c/...` — do outro lado da fronteira as permissões se comportam de um jeito estranho e o disco fica lento.

Caso trave nessa parte, me chama na hora. Ambiente quebrado não é conteúdo de módulo, é pré-requisito, e não faz sentido você queimar tempo de estudo nisso.

## Como a trilha funciona

A trilha tem 10 módulos, numerados. A ordem não é sugestão, e eu queria deixar isso claro logo de cara: cada módulo depende do anterior. Não faz sentido você aprender Docker antes de ter um serviço rodando e um banco para conectar, do mesmo jeito que não faz sentido mexer com Git antes de saber o que é um arquivo oculto no terminal. Seguir a ordem é basicamente o que faz o seu tempo render.

Cada módulo tem cinco partes:

- **Objetivo** — o que você vai conseguir fazer no fim
- **O que estudar** — os assuntos, na ordem em que eles fazem sentido
- **Entregável** — o que você produz
- **Como entregar** — onde isso vai parar e o que eu preciso ver junto
- **Passou quando** — a lista objetiva que diz se acabou ou não

Sobre o "passou quando", tem um detalhe que mudou e que é importante: **todo item da lista é seu, e você consegue conferir cada um sozinho, antes de me chamar**. Eu não tenho item nenhum ali dentro. Onde antes estava escrito "você me explica", agora está escrito "está escrito na sua entrega" — e a diferença é grande, porque a segunda forma você verifica e a primeira só eu.

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

## Entrega é assíncrona, sempre

Nenhum módulo é entregue ao vivo. Isso é decisão consciente e vale para todos, do 0 ao 10: você entrega quando terminar, e não quando a gente conseguir marcar uma conversa. Você não fica bloqueado esperando a minha agenda, e eu consigo revisar com calma em vez de olhar por cima na hora.

Na prática o fluxo é esse, no quadro do Todoist:

| Coluna | O que significa | Quem move |
|---|---|---|
| **A fazer** | próximo da fila | você |
| **Recusadas** | eu revisei e devolvi; o comentário na tarefa diz o que faltou | eu |
| **Em progresso** | você começou | você |
| **Em revisão** | acabou, conferiu o "passou quando" inteiro e está me pedindo validação | você |
| **Feito** | eu revisei e aprovei | eu |

Ou seja: **"Em revisão" é o seu jeito de me chamar.** Não precisa mandar mensagem, não precisa esperar sábado, e não precisa pedir licença para mover — moveu, eu recebo. Enquanto eu não passar para "Feito", esse módulo ainda está aberto.

E ele pode voltar. Caso falte alguma coisa, eu movo para **Recusadas** e escrevo na tarefa exatamente o que faltou — nunca um "não passou" seco. Naturalmente isso não é castigo nem nota baixa: é o mesmo que acontece quando um PR volta com pedido de mudança, que é o dia a dia de qualquer time. Você corrige o que faltou e move de volta para "Em revisão".

**Onde a entrega fica, por módulo:**

- **Módulo 0** — comentário na própria tarefa do Todoist, sem anexar arquivo nenhum: o script fica instalado na sua máquina e as notas são suas. É o único módulo assim, porque nesse ponto você ainda não tem repositório (e é o módulo 1 que resolve isso). Caso você já tenha criado um repositório antes da hora, pode versionar o script por lá e só comentar o link.
- **Módulos 1 ao 10** — Pull Request no seu repositório, e o link do PR num comentário da tarefa.

Os nossos encontros continuam existindo, mas mudaram de função: eles são para **destravar, revisar junto e conversar sobre carreira** — não para entregar. Caso você chegue no encontro com o módulo já entregue, a gente usa o tempo para a parte boa, que é discutir as decisões que você tomou.

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

Eu preciso que você trave, no máximo, 40 minutos na mesma coisa. Passou disso, me chama — e me chama na hora, por mensagem, sem esperar o nosso encontro da semana. Ficar cinco dias parado num problema de 10 minutos é o desperdício mais caro que existe aqui.

E chegar dizendo "tentei A, B e C, a minha hipótese é X, mas não sei como testar" é um ótimo pedido de ajuda — bem diferente de "não está funcionando".

Fora isso, a autonomia é sua: você escolhe a ordem dentro do módulo, o horário, o ritmo e as ferramentas. O que eu preciso é do "passou quando" cumprido e da entrega no lugar combinado.
