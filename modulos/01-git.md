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

1. **O seu repositório de estudo criado**, com `README.md`, `.gitignore` e o script do módulo 0
2. **Pelo menos um Pull Request completo**: aberto por você, revisado por mim, com **uma rodada de mudança pedida e atendida**, e mergeado no fim
3. **Um conflito provocado e resolvido**, com o que aconteceu documentado na descrição do PR

O item 2 não é formalidade, tá? Passar pela experiência de "o meu código voltou com pedido de mudança, e eu mexi sem começar do zero" é o objetivo real desse módulo.

## Como entregar

É nesse módulo que o seu repositório nasce, então a primeira entrega tem um passo a mais:

1. Crie o repositório no GitHub (pode ser privado) e **me adicione como colaborador**
2. Faça o trabalho do entregável em branches, com Pull Request — nada direto na `main`
3. Cole o link do repositório e dos PRs num comentário da tarefa do módulo 1
4. Confira o "passou quando" abaixo, item por item, e mova a tarefa para **Em revisão**

Do módulo 2 em diante o passo 1 some e o resto continua igual até o fim da trilha.

**A partir daqui vale a divisão que a gente segue até o módulo 10:** o Pull Request é a entrega e o Todoist é a conversa. A prova de que a coisa funciona vai colada no corpo do PR; no comentário da tarefa vão o link e o que você quiser me explicar ou perguntar.

**Como organizar o repositório.** Uma pasta por módulo, com o número na frente para elas ficarem em ordem:

```
seu-repo/
├── README.md
├── .gitignore
├── 00-terminal/        ← o script do módulo 0 mora aqui
├── 01-git/
├── 02-depuracao/
└── ...
```

Não precisa criar as dez de uma vez — cada uma nasce no módulo dela. O que eu quero evitar é o repositório virar uma pilha de arquivos soltos na raiz, porque em três meses nem você vai achar as coisas.

**Um detalhe do script do módulo 0:** sobe ele com `git add` e `git push`, e não pela interface web do GitHub. A web não carrega a permissão de execução, e o arquivo chega lá sem o `x`. Quem clonar o seu repositório depois — eu, por exemplo — vai receber um script que não roda.

**A prova deste módulo.** Cole no corpo do PR a saída destes três comandos:

```bash
git log --oneline main
git log --all --oneline -- '*.env*'
git ls-files -s 00-terminal/
```

O primeiro mostra que nada foi direto na `main`, o segundo que nenhum `.env` passou pelo histórico, e o terceiro mostra o modo do arquivo: `100755` é o script com permissão de execução, `100644` é sem.

## Passou quando

Todos os itens abaixo são seus para conferir, antes de me chamar:

- [ ] `git log --oneline main` não mostra nenhum commit feito direto na `main` — tudo que está lá chegou por merge de PR
- [ ] `git log --all --oneline -- '*.env*'` não devolve nada, e o `.gitignore` já cobre `.env` desde o primeiro commit
- [ ] A descrição de um dos seus PRs explica, em uma frase cada, o que `add`, `commit` e `push` fazem e o que acontece se você pular um deles
- [ ] Existe um PR com conflito de verdade resolvido, e a descrição conta o que conflitou e como você resolveu
- [ ] Pelo menos um PR foi aberto, recebeu pedido de mudança, foi atualizado **na mesma branch** e mergeado depois
- [ ] `git log --oneline` inteiro é legível: nenhuma mensagem é `ajustes`, `fix`, `wip` ou `teste2`
- [ ] O `README.md` do repositório diz o que é aquele repositório e como ele está organizado
- [ ] O script do módulo 0 está versionado lá dentro, e `git ls-files -s` mostra ele como `100755` — ou seja, a permissão de execução sobreviveu ao commit
## Onde estudar

- [Pro Git](https://git-scm.com/book/pt-br/v2) — capítulos 2 e 3. É gratuito, é oficial e inclusive tem tradução em português
- [Learn Git Branching](https://learngitbranching.js.org/?locale=pt_BR) — visual e interativo. Na minha opinião é a melhor forma de entender branch e merge sem quebrar nada de verdade
- [Documentação do GitHub sobre Pull Requests](https://docs.github.com/pt/pull-requests)

## Erros comuns nessa fase

- Commitar uma vez por dia, com tudo junto. Commit é ponto de salvamento: pequeno e com uma ideia só
- Mensagem de commit que descreve o arquivo em vez de descrever a mudança
- Ter medo de branch e fazer tudo na `main` "para não complicar". É o contrário: branch é o que deixa você errar em paz
- Quando dá conflito, apagar a pasta e clonar de novo. Funciona uma vez, e deixa você sem saber resolver para sempre
