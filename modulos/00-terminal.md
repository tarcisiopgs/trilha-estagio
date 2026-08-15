# Módulo 0 — Máquina, terminal e sistema de arquivos

**Depende de:** nada. É o começo.

## Objetivo

Ser autossuficiente na sua própria máquina: navegar, criar, mover, inspecionar e entender o que o terminal está reclamando quando alguma coisa não roda.

## Por que este módulo vem antes de tudo

Quase todo problema que trava um dev iniciante por horas é, na origem, um problema de terminal: o comando não é encontrado, o script não tem permissão, a variável de ambiente não está setada, a porta já está ocupada, o arquivo está em outro diretório. Nada disso é sobre programação — e tudo isso vai aparecer em todos os módulos seguintes.

Tem um segundo motivo, mais silencioso: quem não enxerga arquivo oculto no terminal não tem noção do que está mandando pro repositório. Por isso este módulo vem antes de Git, e não depois.

## O que estudar

**Navegação e sistema de arquivos**
- Caminho absoluto vs. relativo; o que são `.`, `..` e `~`
- Arquivo oculto: o que é, por que existe, como listar
- `cd`, `ls -la`, `mkdir`, `cp`, `mv`, `rm` — e por que `rm -rf` merece respeito

**Ler e procurar**
- `cat`, `less`, `head`, `tail` — e para que serve `tail -f`
- `grep`: achar texto dentro de arquivos
- `find`: achar arquivo por nome

**Encadear comandos**
- Pipe (`|`) e redirecionamento (`>`, `>>`)
- A ideia por trás: cada comando faz uma coisa, e você compõe

**Permissões**
- Ler o que significa `-rw-r--r--`
- `chmod +x` e a resposta para "por que o script não roda?"

**PATH e variáveis de ambiente**
- O que é o `PATH`, e por que aparece `command not found`
- `which`: descobrir onde o binário realmente está
- Exportar variável, listar as que existem, e por que elas somem quando você fecha o terminal
- O papel do `.zshrc` (ou `.bashrc`)

**Processos e portas**
- Descobrir o que está ocupando a porta 3000
- Matar um processo travado (`lsof`, `kill`)

**Versão de runtime**
- O que é um gerenciador de versão (nvm, mise, asdf) e **por que** ele existe. Só o conceito — você vai usar de verdade no módulo 5.

## Entregável

Um shell script pequeno e de fato útil. Escolha uma das duas ideias, ou proponha a sua:

- montar a estrutura de pastas do seu estudo, a partir de um diretório base
- fazer backup de um diretório, com a data no nome do arquivo gerado

O script precisa, obrigatoriamente, exercitar quatro coisas: **caminho**, **variável**, **permissão de execução** e **rodar de verdade** — não é pseudocódigo.

Guarde junto um arquivo de notas com o que você aprendeu, no formato "comando — o que faz — quando eu usaria". Esse arquivo é o seu, não é prova: escreva com as suas palavras, porque você vai voltar nele.

> O repositório só nasce no módulo 1, então neste módulo a entrega é ao vivo. O script e as notas entram como o primeiro commit do módulo seguinte.

## Passou quando

- [ ] Resolve uma lista de 10 tarefas no terminal, sem consultar, numa sessão de ~20 minutos comigo. Um dos itens será "esse script não roda, descubra por quê"
- [ ] Explica, com as suas palavras, por que acontece `command not found`
- [ ] Consegue dizer onde um binário está instalado e como o terminal o encontra
- [ ] O seu script roda na máquina de outra pessoa, não só na sua
- [ ] Descobre sozinho o que está ocupando uma porta e libera

## Onde estudar

- [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) — MIT, aulas 1 e 2. É o melhor material que existe para este módulo, e é curto
- `man <comando>` no seu próprio terminal (ou `<comando> --help`). Aprender a ler o manual **é** parte do módulo
- [Explainshell](https://explainshell.com/) — cole um comando inteiro e ele explica pedaço por pedaço. Ótimo para quando você copiar algo da internet sem entender

## Erros comuns nesta fase

- Copiar comando da internet e rodar sem ler. Se você não sabe o que faz, não roda — principalmente com `sudo` ou `rm`
- Achar que decorar comando é o objetivo. O objetivo é entender o modelo: arquivos, caminhos, permissões, processos. Comando você consulta
- Fugir do terminal para a interface gráfica quando aperta. É justamente aí que se aprende
