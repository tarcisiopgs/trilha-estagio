# Módulo 7 — Backend com Node

**Depende de:** módulos 3 (HTTP), 4 (dados e SQL) e 5 (JavaScript e TypeScript)

## Objetivo

Você escrever a API que o seu próprio frontend consome, conectada ao banco que você mesmo modelou.

## Por que esse módulo

Aqui o ciclo fecha, e eu acho que esse é o momento mais legal da trilha.

Você já modelou dados no módulo 4, já sabe o que trafega numa requisição pelo módulo 3 e já domina a linguagem pelo módulo 5. A API é exatamente a junção dessas três coisas — e é a primeira vez que você vai construir os dois lados e ver o sistema inteiro de ponta a ponta. Naturalmente, é também onde para de existir "mágica": o backend é só um programa que recebe texto pela rede, decide o que fazer e devolve texto.

Outro ponto: até aqui, o dado que chegava para você vinha de uma API de terceiro, e a gente confiava nela. Agora a API é sua, ou seja, a responsabilidade de não confiar em quem chama passou a ser sua também.

## O que estudar

**Node**
- O que é o Node e o que muda em relação a rodar JavaScript no navegador
- Event loop do lado do servidor: uma requisição lenta não pode travar as outras
- Ler variável de ambiente, ler arquivo, o básico do que o navegador não deixa

**Servidor HTTP e framework**
- Rota, handler, middleware — e o que é o ciclo de vida de uma requisição
- Um framework só (Express, Fastify ou Hono). Escolhe um e vai fundo

**Desenhar os recursos**
- Caminho de recurso, método e o status certo para cada resposta. Aqui volta o módulo 3: `201` ao criar, `204` ao apagar, `404` no que não existe, `422` no que veio inválido
- Query string para filtro e paginação. Endpoint que devolve tudo funciona até o banco crescer

**Validação de entrada**
- **Nunca confie em quem chama.** Nem no seu próprio frontend, visto que qualquer pessoa consegue mandar uma requisição na mão
- Validar com schema (Zod, por exemplo) na borda, e só deixar passar o que for válido

**Banco**
- Conectar ao banco do módulo 4
- Agora sim entra o ORM — depois de você ter escrito SQL na mão, e sabendo olhar a query que ele gera
- Migration: mudança de estrutura versionada, e não feita direto no banco

**Organização**
- Camadas: rota, serviço, acesso a dados
- Por que separar: a regra de negócio não deveria saber se veio de HTTP nem em qual tabela está salva

**Erros**
- Tratamento centralizado
- Nunca devolver stack trace para quem chamou — isso entrega o desenho do seu sistema de bandeja

**Configuração e segredo**
- Tudo que muda entre ambientes vai para variável de ambiente. Isso amarra com o módulo 0
- Nada de segredo no código, nem "temporariamente"

**Autenticação, no básico**
- O que é um token e como ele viaja
- Senha se guarda com hash, e nunca em texto puro. Não existe exceção para isso

**Log**
- O que logar para conseguir diagnosticar depois
- E o que **nunca** logar: senha, token, dado pessoal

## Entregável

A API do domínio que você modelou no módulo 4:

1. **CRUD completo de pelo menos um recurso**, com os status corretos
2. **Validação de entrada por schema**, com erro claro para quem chamou
3. **Tratamento de erro centralizado**, sem vazar stack
4. **Listagem com filtro e paginação** em pelo menos um endpoint
5. **O frontend do módulo 6 passa a consumir a sua API**, e não mais a pública

O item 5 é o que fecha o ciclo. É quando você percebe que decisão tomada no backend aparece na tela — e vice-versa.

## Passou quando

- [ ] Os status estão corretos: `201` ao criar, `204` ao apagar, `404` no inexistente, `422` na validação
- [ ] Entrada inválida não chega ao banco em nenhum caminho
- [ ] Nenhum segredo no código ou no repositório; tudo em variável de ambiente
- [ ] Explica o caminho completo de uma requisição, camada por camada
- [ ] Erro interno não devolve stack trace ao cliente
- [ ] Existe migration versionada; nenhuma alteração de estrutura foi feita na mão
- [ ] O frontend do módulo 6 funciona inteiro contra essa API

## Onde estudar

- [Node.js — documentação oficial](https://nodejs.org/docs/latest/api/) para consulta, e o guia *Getting Started* para começar
- A documentação do framework que você escolher — [Fastify](https://fastify.dev/docs/latest/) e [Hono](https://hono.dev/) têm material muito bom
- [Zod](https://zod.dev/) para validação
- [MDN — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP), de novo. Agora você lê do outro lado do balcão

## Erros comuns nessa fase

- Confiar no frontend e validar só lá. Qualquer pessoa manda requisição direto na API
- Devolver `200` para tudo, inclusive para erro, com um `{"sucesso": false}` no corpo. Quem consome a sua API não tem como tratar isso direito
- Colocar regra de negócio dentro da rota. Funciona, e depois não dá para testar nem reaproveitar
- Guardar senha em texto. É o tipo de erro que não tem meio termo
- Devolver a lista inteira sem paginação, porque no seu banco tem 12 registros
- Fazer mudança de estrutura direto no banco e esquecer a migration. Aí funciona na sua máquina e quebra em todo lugar
