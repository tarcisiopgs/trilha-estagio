# Módulo 3 — HTTP e APIs na prática

**Depende de:** módulos 0 (terminal, `curl`) e 2 (investigar)

## Objetivo

Fazer, ler e depurar requisições HTTP de verdade — entendendo o que o servidor está te dizendo através do status, dos headers e do corpo da resposta.

## Por que este módulo

Praticamente todo software que você vai escrever conversa com outro software por HTTP. Frontend falando com backend, backend falando com serviço de terceiro, aplicativo falando com API — é sempre a mesma mecânica.

E aqui tem uma diferença que separa quem sabe de quem decorou: saber que "404 é não encontrado" é vocabulário; **olhar um 404 e saber qual é o próximo passo da investigação** é competência. Este módulo é sobre a segunda coisa. Por isso ele é feito com a mão na massa, provocando erros de propósito, e não lendo tabela de status.

## O que estudar

**Anatomia de uma requisição**
- Método, URL, path, query string, headers, corpo
- Anatomia da resposta: status, headers, corpo
- O ciclo completo: quem pede, quem responde, o que trafega

**Métodos e o que eles significam**
- `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- Por que `GET` não muda estado — e por que criar registro com `GET` é um erro mesmo quando "funciona"
- Idempotência: o que acontece quando a mesma requisição é repetida, e por que isso importa quando a rede falha

**Status — os que valem a pena conhecer de verdade**
- As famílias: 2xx deu certo, 3xx foi para outro lugar, 4xx você errou, 5xx o servidor errou
- `200`, `201`, `204` — e a diferença entre "deu certo e aqui está" e "deu certo e não tem corpo"
- `301` e `302`
- `400`, `401`, `403`, `404`, `409`, `422`
- Duas confusões que valem atenção especial:
  - **401 vs. 403** — "não sei quem você é" contra "sei quem você é e você não pode"
  - **404 vs. 204** — "não existe" contra "existe, deu certo, e não tem nada pra devolver"
- `500`: quando o problema não é seu (mas o diagnóstico ainda é)

**Headers**
- `Content-Type`, `Accept`, `Authorization`
- Cache no básico: o que é e por que às vezes "a alteração não aparece"

**JSON**
- Estrutura, tipos, parse
- O que costuma quebrar: vírgula sobrando, aspas erradas, número que virou string

**Autenticação**
- Bearer token e chave de API
- Por que a chave secreta nunca vai no código do frontend: qualquer pessoa lê pelo navegador e usa em seu nome

**CORS**
- O que é, por que existe, e por que ele aparece pra você
- E o principal: **CORS não se resolve no frontend.** Quase todo iniciante perde um dia achando que é bug do próprio código

**Ferramentas**
- `curl` na linha de comando — amarra com o módulo 0 e é o que você vai encontrar em toda documentação
- A aba *Network* do DevTools: ver a requisição real que o navegador fez
- Um cliente de API (Bruno, Insomnia ou similar) para montar e repetir chamadas

## Entregável

Escolha uma API pública **que exija chave de acesso** (para você exercitar autenticação de verdade) e monte um PR com:

1. **Consumo documentado:** para cada endpoint que você usar, o que você pediu e o que voltou — usando `curl` ou um script em Node
2. **Quatro erros provocados de propósito**, na mesma API: um `401`, um `404`, um `400` e um `422`. Registre o corpo de erro de cada um e o que você fez para causá-lo

O item 2 é o coração do módulo. Provocar o erro ensina muito mais do que ler sobre ele — e te dá repertório para reconhecer o mesmo padrão quando aparecer sem você ter pedido.

## Passou quando

- [ ] Diante de um status qualquer, você diz o que provavelmente aconteceu e qual o próximo passo da investigação — sem consultar tabela
- [ ] Explica a diferença entre `401` e `403`, e entre `404` e `204`
- [ ] Monta uma chamada autenticada com `curl`, do zero, sem partir de um exemplo pronto
- [ ] Explica o que é CORS e por que não se resolve no frontend
- [ ] Escolhe o método correto para uma operação e justifica a escolha
- [ ] Consegue abrir a aba Network, achar uma requisição específica e ler o que ela mandou e o que recebeu

## Onde estudar

- [MDN — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) — a referência. Comece por *Overview*, *Methods* e *Status*
- [MDN — CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) — leia inteiro, um dia você vai agradecer
- [Manual do curl](https://curl.se/docs/manpage.html) — não para ler de ponta a ponta, mas para consultar
- [HTTP Cats](https://http.cat/) — cada status com um gato. Parece piada e funciona bem pra fixar

## Erros comuns nesta fase

- Tratar todo erro como "a API está com problema". Na esmagadora maioria das vezes, 4xx é a sua requisição
- Não ler o **corpo** da resposta de erro. Quase toda API bem feita te diz exatamente o que faltou — e o texto está ali
- Colocar a chave de API no código do frontend porque "é só um teste". Testes vazam para produção com uma frequência impressionante
- Copiar um `curl` da documentação sem entender cada flag. Se você não sabe o que o `-H` está fazendo, você não sabe montar a próxima
