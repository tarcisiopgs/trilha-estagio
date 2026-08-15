# Módulo 1 — Git e GitHub

**Depende de:** módulo 0 (caminho, arquivo oculto, terminal)

## Objetivo

Usar Git como canal de entrega do seu trabalho, dentro do fluxo que se usa em equipe: branch, histórico legível, Pull Request, review, merge.

## Por que este módulo vem tão cedo

Git não é conteúdo, é infraestrutura. Sem ele você não entrega nenhum exercício dos módulos seguintes e eu não consigo acompanhar nada. Todo o resto da trilha passa por aqui.

E tem uma parte que só se aprende fazendo: **Pull Request não é sobre baixar código, é sobre pedir revisão.** É um pedido para juntar o seu trabalho ao trabalho dos outros, e ele existe para que alguém olhe antes. Você vai abrir dezenas deles.

## O que estudar

**O modelo mental — antes dos comandos**
- Os três estados: *working directory*, *staging area*, *commit*
- Por que a ordem é `add → commit → push`, e o que exatamente cada passo faz. Se você entender os três estados, nunca mais vai precisar decorar essa ordem: ela vira consequência
- O que é o repositório remoto e o que é `origin`

**O básico do dia a dia**
- `init`, `clone`, `status`, `diff`, `add`, `commit`, `log`
- `push`, `pull`, `fetch` — e a diferença entre `pull` e `fetch`

**O que não vai para o repositório**
- `.gitignore`: como funciona e o que colocar nele
- Por que `.env`, credencial, `node_modules` e build nunca entram
- Como é grave: um segredo commitado continua no histórico mesmo depois de apagado do arquivo. Apagar não basta

**Branches**
- Criar, trocar (`switch`), listar
- Uma branch por tarefa: por que, e por que ela deve ser curta
- `merge`: o que acontece de fato

**Conflito**
- O que é um conflito de merge, e por que ele não é erro nem culpa de ninguém: são duas pessoas mexendo nas mesmas linhas, e o Git está pedindo uma decisão humana
- Como ler os marcadores de conflito e resolver
- **Provoque um de propósito.** Você precisa ter visto isso com calma antes de topar com um sob pressão

**Pull Request**
- Abrir, escrever a descrição, pedir review
- Responder a comentário de review, e como atualizar a branch depois de mudar
- O que faz um bom PR: pequeno, com uma coisa só, e com descrição que explica o **porquê** — o *o quê* o diff já mostra

**Quando você errar**
- `restore` para desfazer alteração não commitada
- `reset` no básico: voltar commit sem perder o trabalho
- `commit --amend`: corrigir o último commit
- A regra de ouro: **quase tudo no Git é reversível.** Antes de apagar a pasta e clonar de novo, pergunta

## Entregável

1. **Seu repositório de estudo criado**, com `README.md`, `.gitignore` e as notas e o script do módulo 0
2. **Pelo menos um Pull Request completo**: aberto por você, revisado por mim, com **uma rodada de mudança pedida e atendida**, e mergeado
3. **Um conflito provocado e resolvido**, com o que aconteceu documentado na descrição do PR

O item 2 não é formalidade. Passar por "seu código voltou com pedido de mudança, e você mexeu sem começar do zero" é o objetivo real do módulo.

## Passou quando

- [ ] A `main` não tem nenhum commit feito direto nela
- [ ] Nenhum `.env` ou credencial aparece em ponto algum do histórico — a gente confere no histórico, não só no estado atual
- [ ] Você explica, em uma frase cada, o que `add`, `commit` e `push` fazem, e o que acontece se pular um deles
- [ ] Resolveu um conflito de verdade, sem apagar a pasta e clonar de novo
- [ ] Abriu, atualizou depois de review e mergeou um PR
- [ ] O histórico é legível: nada de `ajustes`, `fix`, `wip`, `teste2`

## Onde estudar

- [Pro Git](https://git-scm.com/book/pt-br/v2) — capítulos 2 e 3. Gratuito, oficial, e tem tradução em português
- [Learn Git Branching](https://learngitbranching.js.org/?locale=pt_BR) — visual e interativo; a melhor forma de entender branch e merge sem quebrar nada de verdade
- [Documentação do GitHub sobre Pull Requests](https://docs.github.com/pt/pull-requests)

## Erros comuns nesta fase

- Commitar uma vez por dia, com tudo junto. Commit é ponto de salvamento: pequeno e com uma ideia só
- Mensagem de commit que descreve o arquivo em vez da mudança
- Ter medo de branch e trabalhar tudo na `main` "pra não complicar". É o contrário: branch é o que te deixa errar em paz
- Quando dá conflito, apagar a pasta e clonar de novo. Funciona uma vez, e te deixa sem saber resolver para sempre
