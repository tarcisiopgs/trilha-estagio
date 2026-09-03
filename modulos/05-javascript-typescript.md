# Módulo 5 — JavaScript e TypeScript pra valer

**Depende de:** módulo 2

## Objetivo

Você dominar os mecanismos da linguagem que hoje usa por imitação — referência, escopo, assíncrono de verdade — e passar a usar tipos para pegar erro antes de rodar o código.

## Por que esse módulo

Esse é um módulo curto em conceito e longo em prática, e eu queria explicar por quê.

Quase todo mundo consegue dizer o que é `const`, o que é `async/await` e para que serve o TypeScript. Só que isso é reconhecimento, não domínio — e a diferença aparece na hora em que o código faz algo inesperado. O array mudou e a tela não atualizou. A função devolveu `Promise { <pending> }` em vez do valor. O objeto que você copiou mudou junto com o original. Ou seja, nada disso é caso raro: é o dia a dia de quem escreve JavaScript sem entender referência e assincronia.

Dito isso, aqui a gente não vai revisar definição. A gente vai provar na prática.

## O que estudar

**Valores e referências**
- Primitivo e objeto: o que acontece quando você atribui, e o que acontece quando você passa para uma função
- O que o `const` garante de verdade — a variável, e não o conteúdo
- Cópia rasa e cópia profunda, e por que `{...obj}` resolve um nível só

**Escopo e closure**
- `var`, `let` e `const`; hoisting
- Closure: o que é, com um exemplo concreto (um contador resolve bem)
- Por que closure aparece o tempo todo sem você perceber

**Funções**
- `this` no básico e o que muda com arrow function
- Função como valor: passar, retornar, guardar

**Trabalhar com dados**
- `map`, `filter`, `reduce`, `find`, `some`, `every` — e quando o `for` de sempre ainda é a melhor escolha
- Destructuring, spread, optional chaining (`?.`) e nullish coalescing (`??`)

**Módulos**
- `import` e `export`, default e nomeado
- Por que um arquivo que exporta trinta coisas é sinal de que faltou dividir

**Assíncrono de verdade**
- Event loop, no conceito: por que o código não trava enquanto espera
- A evolução: callback, Promise, `async/await`
- `Promise.all` e execução em sequência — e quando cada um é o certo
- `try/catch` em código assíncrono
- O clássico: esquecer o `await` e receber uma Promise pendente no lugar do valor. Você vai fazer isso pelo menos uma vez, e eu preciso que você saiba reconhecer

**TypeScript**
- Tipos primitivos, `interface` e `type`, união de tipos
- Narrowing: como o TypeScript vai estreitando o tipo conforme você verifica
- Generics, no básico
- `unknown` e `any` — e por que o `any` derruba justamente o motivo de você estar usando TypeScript
- Tipar dado que vem de fora: o retorno de uma API é `unknown` até você provar o contrário. Isso amarra direto com o módulo 3
- `tsconfig` no básico, com `strict` ligado

## Entregável

Um PR com três partes:

1. **Refatoração para TypeScript:** pegue um código JavaScript que já é seu — pode ser algo dos módulos anteriores — e converta para TypeScript com `strict` ligado, **sem nenhum `any`**. Onde você não souber o tipo, use `unknown` e faça o narrowing
2. **Transformação de dados:** a partir de um JSON grande de verdade (pode ser o retorno da API que você usou no módulo 3), responda 5 perguntas usando `map`, `filter` e `reduce`, tudo tipado
3. **Um caso assíncrono:** busque três coisas em paralelo com `Promise.all`, trate o erro de uma delas sem derrubar as outras, e explique na descrição do PR por que paralelo foi melhor que sequência ali

## Como entregar

Um Pull Request, com issue aberta antes e revisão cruzada do outro estagiário. Cole o link num comentário da tarefa, confira o "passou quando" e mova para **Em revisão**.

**A prova deste módulo.** Cole no corpo do PR a saída de:

```bash
npx tsc --noEmit; echo "saiu com: $?"
grep -rn ": any\|as any\|<any>" src/; echo "encontrou: $?"
```

O primeiro precisa terminar em `saiu com: 0` sem nenhuma linha antes dele. O segundo precisa terminar em `encontrou: 1` — o `grep` sai com `1` quando não encontra nada, e é esse `1` que você quer ver aqui.

## Passou quando

Todos os itens abaixo são seus para conferir, antes de me chamar:

- [ ] `npx tsc --noEmit` passa sem nenhum erro, e o `strict` está ligado no `tsconfig.json`
- [ ] Uma busca por `any` no código entregue não devolve nada
- [ ] Onde o tipo era desconhecido você usou `unknown` com narrowing — aponte no PR pelo menos um caso e explique o que o narrowing garantiu ali
- [ ] O PR explica, com um exemplo do seu próprio código, por que `const` não impede a mudança do conteúdo de um objeto
- [ ] As 5 perguntas de transformação estão respondidas, todas tipadas, usando `map`, `filter` e `reduce`
- [ ] O PR aponta um caso em que `reduce` **não** caberia, e diz o que você usaria no lugar
- [ ] O caso assíncrono busca três coisas com `Promise.all`, o erro de uma delas é tratado sem derrubar as outras, e o PR explica por que paralelo ganhou de sequência ali
- [ ] O PR mostra um bug de `await` esquecido: o código, o sintoma que ele produz e por que o sintoma é exatamente esse
## Onde estudar

- [javascript.info](https://javascript.info/) — é o melhor material de JavaScript que existe de graça. Para esse módulo: as partes de objetos, referências e Promises
- [MDN — Guia de JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide) — em português, e serve para consulta
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — oficial. Comece por *Everyday Types* e *Narrowing*
- [Type Challenges](https://github.com/type-challenges/type-challenges) — só os `easy`, e só se você quiser brincar. Não é obrigatório

## Erros comuns nessa fase

- Espalhar `any` para calar o TypeScript. Caso você faça isso, basicamente escreveu JavaScript com passos a mais
- Usar `async/await` sem entender o que está por baixo, e depois não saber por que uma coisa terminou antes da outra
- Colocar tudo em sequência com `await` quando as chamadas são independentes. Fica três vezes mais lento sem necessidade
- Achar que `map` e `forEach` são a mesma coisa
- Mutar um array do estado e não entender por que a tela não mudou. Esse vai voltar no módulo 6
