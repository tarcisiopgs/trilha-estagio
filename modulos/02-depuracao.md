# Módulo 2 — Ler, rastrear e depurar código

**Depende de:** módulo 0

## Objetivo

Descobrir o que um código faz e por que ele quebrou — por investigação, não por tentativa e erro, e sem recorrer a ajuda externa antes de ter uma hipótese própria.

## Por que este módulo existe

Este é, disparado, o módulo mais importante da trilha inteira.

Programar é, na prática, passar a maior parte do tempo entendendo código que já existe e descobrindo por que algo não funciona. Quem depura bem aprende qualquer linguagem sozinho; quem não depura fica travado para sempre, em qualquer linguagem, e vira dependente de alguém que desentrave.

A diferença entre um dev que evolui rápido e um que empaca quase nunca é quanto ele sabe. É o que ele faz nos primeiros cinco minutos depois que o erro aparece.

## O que estudar

**Rastrear código na mão (dry run)**
- Simular a execução no papel, linha a linha, com uma tabela de variáveis
- Uma coluna por variável, uma linha por iteração. Sem rodar, sem `console.log`
- Parece coisa de faculdade e é a habilidade que mais separa quem entende do que só reconhece

**Ler a mensagem de erro — de verdade**
- Qual arquivo, qual linha, o que a mensagem literalmente diz
- Stack trace: ler de baixo para cima, e achar a primeira linha que é código **seu**
- Erros comuns e o que costumam significar de fato:
  - `undefined is not a function` — você chamou algo que não existe, geralmente por nome errado ou import faltando
  - `cannot read property 'x' of undefined` — o objeto não chegou; o problema está *antes*, não na linha do erro
  - `ReferenceError` vs. `TypeError` — a coisa não existe, ou existe e é de outro tipo

**Investigar**
- `console.log` bem colocado: logue o **valor e o tipo**, e identifique o log
- Debugger de verdade: breakpoint, *step over*, *step into*, inspecionar o escopo — no navegador e no editor. Um breakpoint mostra em um minuto o que dez `console.log` mostram em vinte
- **Isolar:** reduzir até o menor código que ainda reproduz o problema. Metade dos bugs se explica sozinha durante esse corte

**O método**
- Hipótese **antes** de mexer: "acho que é X; se for X, então Y deveria acontecer"
- Testar a hipótese, não o palpite. Mudar cinco coisas ao mesmo tempo e ver se funcionou não é depurar — é sorteio, e não ensina nada
- Quando a hipótese estava errada, isso é informação boa: você eliminou uma possibilidade

**Pedir ajuda ao mundo**
- O que colar no buscador: a mensagem de erro sem os seus dados específicos
- Ler resposta de fórum olhando **data e versão** — resposta de 2016 pode estar certa e obsoleta ao mesmo tempo
- IA: **depois** da hipótese, pedindo explicação em vez de código pronto. "Por que isso acontece?" ensina; "me dá o código" não

**Ler código dos outros**
- Entrar num repositório desconhecido e localizar onde uma coisa acontece
- Seguir o caminho: quem chama quem, onde o dado entra, onde ele sai

## Entregável

Um **caderno de bugs**: 5 casos, cada um no seu próprio Pull Request, cada um com:

1. o que aconteceu (o sintoma)
2. a mensagem de erro, na íntegra
3. **a sua hipótese**, escrita antes de você corrigir
4. como você testou a hipótese
5. a causa real
6. a correção

Três dos bugs eu planto num código pequeno que te entrego. Os outros dois são bugs que aparecerem naturalmente no seu caminho — e vão aparecer.

O item 3 é o coração da entrega. Um caderno em que toda hipótese estava certa de primeira é um caderno mal preenchido: quer dizer que você escreveu depois de já saber a resposta.

## Passou quando

- [ ] Rastreia um loop de ~15 linhas no papel e acerta o valor final, sem rodar
- [ ] Nos 5 relatos, a hipótese vem antes da correção — e em pelo menos um deles a primeira hipótese estava errada, e você conta isso
- [ ] Usou breakpoint pelo menos uma vez, não só `console.log`
- [ ] Consegue pegar um erro e apontar a primeira linha do stack trace que é código seu
- [ ] Em pelo menos 3 dos 5 casos, chegou na causa sem usar IA. Nos outros, o relato registra o que você perguntou e o que aprendeu com a resposta

## Onde estudar

- [Chrome DevTools — depurar JavaScript](https://developer.chrome.com/docs/devtools/javascript) — leia **e** faça o passo a passo
- [MDN — o que fez isso quebrar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors) — a referência de erros de JavaScript, um por um
- [How to Ask a Good Question](https://stackoverflow.com/help/how-to-ask) — do Stack Overflow. Vale mesmo que você nunca poste: ele descreve como organizar o que você já sabe sobre o problema, e isso sozinho resolve muita coisa

## Erros comuns nesta fase

- Ler a primeira linha do erro e já ir pro buscador. A mensagem geralmente diz mais do que parece
- Mudar código no chute até funcionar. Se funcionar e você não souber por quê, o bug não foi resolvido — foi escondido, e volta depois
- Encher o arquivo de `console.log` sem plano e depois esquecer de tirar
- Ir pra IA no minuto um. Não é proibido usar — é que ir cedo demais te tira exatamente o treino que este módulo existe para dar
