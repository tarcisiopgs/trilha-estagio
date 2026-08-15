# Módulo 1 — Git e GitHub

**Depende de:** módulo 0 (caminho, arquivo oculto, terminal)

## Objetivo

Você usar Git como canal de entrega do seu trabalho, dentro do fluxo que se usa em equipe: branch, histórico legível, Pull Request, review, merge.

## Por que esse módulo vem tão cedo

Git não é bem conteúdo, é infraestrutura. Sem ele você não entrega nenhum exercício dos módulos seguintes e eu não consigo acompanhar nada. Ou seja, todo o resto da trilha passa por aqui.

E tem uma parte que, sendo bem honesto, só se aprende fazendo: **Pull Request não é sobre baixar código, é sobre pedir revisão.** É um pedido para juntar o seu trabalho ao trabalho dos outros, e ele existe justamente para que alguém olhe antes. Você vai abrir dezenas deles.

## O que estudar

**O modelo mental — antes dos comandos**
- Os três estados: *working directory*, *staging area* e *commit*
- Por que a ordem é `add → commit → push`, e o que exatamente cada passo faz. Caso você entenda os três estados, naturalmente nunca mais vai precisar decorar essa ordem: ela vira consequência
- O que é o repositório remoto e o que é o `origin`

**O básico do dia a dia**
- `init`, `clone`, `status`, `diff`, `add`, `commit`, `log`
- `push`, `pull`, `fetch` — e a diferença entre o `pull` e o `fetch`

**O que não vai para o repositório**
- `.gitignore`: como funciona e o que colocar nele
- Por que `.env`, credencial, `node_modules` e build nunca entram
- E o quanto isso é sério: um segredo commitado continua no histórico mesmo depois de você apagar do arquivo. Apagar não basta

**Branches**
- Criar, trocar (`switch`), listar
- Uma branch por tarefa: por que, e por que ela deve ser curta
- `merge`: o que acontece de fato ali

**Conflito**
- O que é um conflito de merge e por que ele não é erro nem culpa de ninguém: são duas branches mexendo nas mesmas linhas, e o Git pedindo que alguém decida qual versão vale
- Como ler os marcadores de conflito e resolver
- **Eu preciso que você provoque um de propósito.** Você tem que ter visto isso com calma antes de topar com um sob pressão

**Pull Request**
- Abrir, escrever a descrição, pedir review
- Responder a comentário de review e atualizar a branch depois de mudar
- O que faz um bom PR: pequeno, com uma coisa só, e com descrição que explica o **porquê** — o *o quê* o diff já mostra

**Quando você errar**
- `restore` para desfazer alteração que ainda não foi commitada
- `reset` no básico: voltar commit sem perder o trabalho
- `commit --amend`: corrigir o último commit
- E a regra de ouro: **quase tudo no Git é reversível.** Antes de apagar a pasta e clonar de novo, me pergunta

## Entregável

1. **O seu repositório de estudo criado**, com `README.md`, `.gitignore` e as notas e o script do módulo 0
2. **Pelo menos um Pull Request completo**: aberto por você, revisado por mim, com **uma rodada de mudança pedida e atendida**, e mergeado no fim
3. **Um conflito provocado e resolvido**, com o que aconteceu documentado na descrição do PR

O item 2 não é formalidade, tá? Passar pela experiência de "o meu código voltou com pedido de mudança, e eu mexi sem começar do zero" é o objetivo real desse módulo.

## Passou quando

- [ ] A `main` não tem nenhum commit feito direto nela
- [ ] Nenhum `.env` ou credencial aparece em ponto algum do histórico — a gente confere no histórico, não só no estado atual
- [ ] Explica, em uma frase cada, o que `add`, `commit` e `push` fazem, e o que acontece se pular um deles
- [ ] Resolveu um conflito de verdade, sem apagar a pasta e clonar de novo
- [ ] Abriu, atualizou depois do review e mergeou um PR
- [ ] O histórico é legível: nada de `ajustes`, `fix`, `wip`, `teste2`

## Onde estudar

- [Pro Git](https://git-scm.com/book/pt-br/v2) — capítulos 2 e 3. É gratuito, é oficial e inclusive tem tradução em português
- [Learn Git Branching](https://learngitbranching.js.org/?locale=pt_BR) — visual e interativo. Na minha opinião é a melhor forma de entender branch e merge sem quebrar nada de verdade
- [Documentação do GitHub sobre Pull Requests](https://docs.github.com/pt/pull-requests)

## Erros comuns nessa fase

- Commitar uma vez por dia, com tudo junto. Commit é ponto de salvamento: pequeno e com uma ideia só
- Mensagem de commit que descreve o arquivo em vez de descrever a mudança
- Ter medo de branch e fazer tudo na `main` "para não complicar". É o contrário: branch é o que deixa você errar em paz
- Quando dá conflito, apagar a pasta e clonar de novo. Funciona uma vez, e deixa você sem saber resolver para sempre
