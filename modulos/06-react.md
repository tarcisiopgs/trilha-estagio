# Módulo 6 — Frontend com React

**Depende de:** módulos 3 (HTTP e APIs) e 5 (JavaScript e TypeScript)

## Objetivo

Você construir uma interface que reflete estado, consumindo dado real de uma API.

## Por que esse módulo vem depois do 3 e do 5

React sem HTTP é tutorial de contador: bonito, e não parece nada com trabalho de verdade. E React sem entender referência e assincronia — que é o módulo 5 — vira aquela sequência de perguntas sem resposta: "por que a tela não atualizou?", "por que isso renderizou três vezes?", "por que o dado chegou depois?".

Ou seja, a ordem aqui não é preciosismo. Quem chega no React sem essas duas bases aprende a repetir padrão sem entender, e naturalmente trava no primeiro problema que o tutorial não previu.

## O que estudar

**O modelo mental — e ele é o mais importante daqui**
- A interface é função do estado. Você não manipula a tela: descreve como ela deve ficar, e o React se encarrega
- Quem vem de JavaScript puro estranha isso, visto que lá a gente pega o elemento e muda na mão. Aqui, não

**Componentes**
- Componente, props, composição
- Quando quebrar em componente novo, e quando isso vira picotar demais

**Estado**
- `useState`
- Imutabilidade: aqui o módulo 5 volta com força. Mutar o array não dispara re-render — você precisa criar um novo
- Estado derivado e estado duplicado: se dá para calcular, não guarda

**Renderização**
- Por que um componente re-renderiza
- O que causa loop infinito, e como reconhecer

**`useEffect`**
- Para que ele serve de verdade: sincronizar com alguma coisa de fora do React
- Array de dependências e função de cleanup
- E um aviso que eu acho importante: a maior parte do que se coloca em `useEffect` no começo não precisa estar lá. Antes de escrever um, se pergunte se aquilo não é só um cálculo

**Eventos e formulário**
- Campo controlado e não controlado
- Validação no envio, e mostrar o erro de um jeito que a pessoa entenda

**Listas**
- Renderizar lista e o papel da `key`
- Por que usar índice como `key` dá problema assim que a lista muda de ordem

**Consumir API**
- Os três estados que todo mundo esquece: **carregando**, **erro** e **vazio**. Aplicação que só trata o caminho feliz parece pronta e quebra na primeira semana
- Cancelamento e corrida: o que acontece quando duas buscas voltam fora de ordem

**Roteamento**
- Navegação entre páginas, parâmetro na URL
- Por que o estado importante costuma caber na URL

**Estilo**
- Escolha **uma** abordagem — Tailwind ou CSS Modules, por exemplo — e mantenha. Misturar cinco jeitos é o que transforma projeto pequeno em bagunça

## Entregável

Uma aplicação pequena, mas completa, que consome a API que você usou no módulo 3:

1. **Lista e detalhe** — uma tela que lista e outra que mostra um item, com a URL refletindo onde você está
2. **Os três estados tratados de forma visível**: carregando, erro e lista vazia. Eu preciso que dê para forçar cada um deles, e que você mostre isso no PR
3. **Deploy** na Vercel, Netlify ou parecido, com o link no README

## Passou quando

- [ ] Os três estados existem e podem ser forçados um a um
- [ ] Nenhuma `key` é índice de array em lista que muda de ordem ou de tamanho
- [ ] Explica por que um componente específico re-renderizou
- [ ] Não existe `useEffect` que poderia ser um cálculo direto
- [ ] Nenhuma chave de API aparece no bundle do frontend — isso amarra com o módulo 3
- [ ] A aplicação está no ar e abre pelo link do README
- [ ] Nenhum estado guarda algo que dava para derivar de outro estado

## Onde estudar

- [react.dev](https://react.dev/learn) — a documentação oficial nova é excelente e tem exercício junto. Comece por *Thinking in React*
- [react.dev — You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) — esse eu recomendo ler duas vezes. Ele sozinho evita metade dos problemas de quem está começando
- [react.dev — Escaping the rabbit hole](https://react.dev/learn/synchronizing-with-effects) para entender `useEffect` de verdade

## Erros comuns nessa fase

- Mutar o estado direto (`lista.push(item)`) e não entender por que a tela não mudou
- Colocar em `useEffect` o que é cálculo simples, e criar re-render em cascata
- Tratar só o caminho feliz e descobrir os outros dois estados quando alguém reclama
- Guardar no estado algo que já dá para calcular do que existe. Dois estados que precisam concordar entre si sempre acabam discordando
- Começar a estilizar antes de a tela funcionar. Primeiro funciona, depois fica bonito
