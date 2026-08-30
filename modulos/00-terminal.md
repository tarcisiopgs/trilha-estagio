# Módulo 0 — Máquina, terminal e sistema de arquivos

**Depende de:** nada. É o começo.

> **Antes de qualquer coisa:** caso você esteja no Windows, instale o WSL primeiro. Está explicado no [README](../README.md#antes-do-módulo-0-a-sua-máquina). Sem isso, metade desse módulo simplesmente não existe na sua máquina.

## Objetivo

Você ser autossuficiente na sua própria máquina: navegar, criar, mover, inspecionar e entender o que o terminal está reclamando quando alguma coisa não roda.

## Por que esse módulo vem antes de tudo

Quase todo problema que trava alguém no começo é, na origem, um problema de terminal: o comando não é encontrado, o script não tem permissão, a variável de ambiente não está setada, a porta já está ocupada, o arquivo está em outro diretório. Ou seja, nada disso é sobre programação — e tudo isso vai aparecer em todos os módulos seguintes.

Tem um segundo motivo, mais silencioso: quem não enxerga arquivo oculto no terminal não tem noção do que está mandando para o repositório. Por isso eu botei esse módulo antes de Git, e não depois.

## O que estudar

**Navegação e sistema de arquivos**
- Caminho absoluto e caminho relativo; o que são `.`, `..` e `~`
- Arquivo oculto: o que é, por que existe, como listar
- `cd`, `ls -la`, `mkdir`, `cp`, `mv`, `rm` — e por que o `rm -rf` merece respeito

**Ler e procurar**
- `cat`, `less`, `head`, `tail` — e para que serve o `tail -f`
- `grep`: achar texto dentro de arquivos
- `find`: achar arquivo por nome

**Encadear comandos**
- Pipe (`|`) e redirecionamento (`>`, `>>`)
- A ideia por trás disso: cada comando faz uma coisa só, e você compõe

**Permissões**
- Ler o que significa `-rw-r--r--`
- `chmod +x`, que é a resposta para a pergunta "por que o script não roda?"

**PATH e variáveis de ambiente**
- O que é o `PATH` e por que aparece `command not found`
- `which`: descobrir onde o binário realmente está
- Exportar variável, listar as que existem, e por que elas somem quando você fecha o terminal
- O papel do `.bashrc` (ou `.zshrc`)

**Processos e portas**
- Descobrir o que está ocupando a porta 3000
- Matar um processo travado (`lsof`, `kill`)

**Versão de runtime**
- O que é um gerenciador de versão (nvm, mise, asdf) e, principalmente, **por que** ele existe. Aqui é só o conceito — você vai usar de verdade no módulo 5.

## Entregável

São três coisas: um script instalado, um exercício de diagnóstico e o seu arquivo de notas.

### 1. Um comando seu, instalado na sua máquina

Eu preciso que você escreva um script pequeno e que seja de fato útil para você. Algumas ideias: um backup de diretório com a data no nome, algo como `estudo-2026-08-25.tar.gz`; ou um script que monta a estrutura de pastas do seu estudo. Pode propor a sua também — e **caso você já tenha escrito algum, aproveita ele** em vez de começar do zero.

A parte que importa aqui não é o que o script faz, é **como ele fica instalado**:

- o script mora em `~/bin/`
- ele tem permissão de execução
- `~/bin` está no seu `PATH`, configurado no `.bashrc` (ou `.zshrc`), e não só exportado na mão
- você chama ele **pelo nome, de qualquer diretório**, sem `bash` na frente e sem `./`
- o diretório de origem vem de fora do script: por argumento, ou por uma variável de ambiente com um padrão sensato

Repare que esse desenho exercita as quatro coisas do módulo de um jeito que não dá para escapar: sem `chmod +x` ele não roda, sem `PATH` ele não é encontrado, sem tratar caminho direito ele quebra quando você chama de outra pasta, e sem variável você não consegue mudar a origem sem editar o código.

Uma dica que vale ouro aqui: teste com um diretório que tenha **espaço no nome**. É o erro número um de quem está começando com shell.

### 2. "Esse script não roda, descubra por quê"

O script abaixo tem **três defeitos**. Copie ele para a sua máquina, faça rodar, e registre nas notas qual era cada defeito e como você descobriu:

```bash
#! /usr/bin/env bash
DESTINO=$HOME/meus arquivos/saida
mkdir -p $DESTINO
cp *.txt $DESTINO
echo "copiei tudo para $DESTINO"
```

Não vale só consertar no olho e seguir. O que eu quero ler é o caminho: qual foi a mensagem de erro, o que ela te disse, e o que você fez a partir dela.

### 3. O arquivo de notas

Um arquivo com o que você foi aprendendo, no formato "comando — o que faz — quando eu usaria". Escreve com as suas palavras mesmo, que é para você voltar nele depois.

**Esse arquivo é seu.** Ele não vai para o repositório e você não precisa me mandar — é um diário, um exercício mental. O que eu preciso é só de um comentário curto na tarefa dizendo o que você registrou nele.

Além dos comandos, é para esse arquivo ter, escrito, as respostas para estas quatro perguntas:

1. Por que acontece `command not found`? O que o terminal fez antes de desistir?
2. Onde está instalado um binário que você usa todo dia (escolha um), como você descobriu, e por que o terminal consegue achar ele
3. O que estava ocupando a porta 3000 na sua máquina, como você descobriu e como você liberou
4. Por que uma variável exportada no terminal some quando você fecha a janela, e o que fazer para ela não sumir

Na pergunta 3, caso não tenha nada ocupando a porta, ocupe você mesmo: sobe qualquer coisa nela, acha o processo, mata. É esse o exercício.

**A pergunta 3 é a única que eu quero ver colada na tarefa**, com a saída dos comandos junto. As outras três ficam com você: elas se respondem lendo, e essa só se responde operando.

## Como entregar

Esse é o único módulo que não entrega por Pull Request, porque o repositório só nasce no módulo 1.

A entrega é **um comentário na tarefa do módulo 0, no Todoist**. Não precisa anexar arquivo nenhum: o script fica instalado na sua máquina e as notas são suas. O comentário precisa ter três coisas.

**Primeira:** a sua resposta da pergunta 3 acima — o que estava ocupando a porta 3000, como você descobriu e como você liberou — com a saída dos comandos colada.

**Segunda:** a saída destes dois comandos:

```bash
which backup-estudo
```

```bash
cd /tmp && backup-estudo ~/algum-diretorio; echo "saiu com: $?"
```

(troque `backup-estudo` pelo nome que você deu ao seu script)

**Terceira:** poucas linhas dizendo o que você registrou no seu arquivo de notas. Não precisa listar comando por comando.

Feito isso, você mesmo confere o "passou quando" abaixo, marca os itens no Todoist e move a tarefa para **Em revisão**. Aí é comigo.

Caso você já tenha criado um repositório antes da hora, pode versionar o script por lá e só comentar o link na tarefa.

## Passou quando

Todos os itens abaixo são seus para conferir, antes de me chamar:

- [ ] `which <nome-do-seu-script>` devolve um caminho dentro de `~/bin`
- [ ] O script roda pelo nome, a partir de um diretório qualquer (teste a partir de `/tmp`), e `echo $?` devolve `0` logo depois
- [ ] `ls -l ~/bin/<nome-do-seu-script>` mostra o `x` nas permissões
- [ ] Funciona também num terminal **novo**, aberto do zero — ou seja, o `PATH` está no arquivo de perfil e não só na sessão atual
- [ ] O script funciona com um diretório que tem espaço no nome
- [ ] O script faz o que promete: depois de rodar, dá para ver o efeito dele no disco
- [ ] O script quebrado do item 2 foi corrigido, roda, e as notas dizem quais eram os três defeitos e como você chegou em cada um
- [ ] As notas existem na sua máquina, no formato "comando — o que faz — quando eu usaria", e o comentário na tarefa diz, em poucas linhas, o que você registrou nelas
- [ ] O comentário na tarefa responde a pergunta 3 — o que estava ocupando a porta 3000, como você descobriu e como liberou — com a saída dos comandos colada, mais a saída dos dois comandos de instalação

## Onde estudar

- [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) — do MIT, aulas 1 e 2. É o melhor material que existe para esse módulo, e inclusive é curto
- `man <comando>` no seu próprio terminal (ou `<comando> --help`). Aprender a ler o manual **faz parte** do módulo
- [Explainshell](https://explainshell.com/) — você cola um comando inteiro e ele explica pedaço por pedaço. Ótimo para quando você copiar alguma coisa da internet sem entender direito

## Erros comuns nessa fase

- Copiar comando da internet e rodar sem ler. Caso você não saiba o que ele faz, não roda — principalmente com `sudo` ou `rm`
- Achar que decorar comando é o objetivo. O objetivo é entender o modelo: arquivos, caminhos, permissões, processos. Comando a gente consulta
- Fugir para a interface gráfica quando aperta. É justamente aí que se aprende
- Escrever o script, achar que está pronto e não rodar até o fim. Rodar é parte de escrever, e não a etapa seguinte
