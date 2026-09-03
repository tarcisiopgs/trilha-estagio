# Módulo 3 — HTTP e APIs na prática

**Depende de:** módulos 0 (terminal, `curl`) e 2 (investigar)

## Objetivo

Você fazer, ler e depurar requisição HTTP de verdade, entendendo o que o servidor está te dizendo através do status, dos headers e do corpo da resposta.

## Por que esse módulo

Praticamente todo software que a gente escreve conversa com outro software por HTTP. Frontend falando com backend, backend falando com serviço de terceiro, aplicativo falando com API — é sempre a mesma mecânica por baixo.

E aqui tem uma diferença que, no meu ponto de vista, separa quem sabe de quem decorou: saber que "404 é não encontrado" é vocabulário; **olhar um 404 e saber qual é o próximo passo da investigação** é competência. Esse módulo é sobre a segunda coisa. Por isso ele é feito com a mão na massa, provocando erro de propósito, e não lendo tabela de status.

## O que estudar

**Anatomia de uma requisição**
- Método, URL, path, query string, headers e corpo
- Anatomia da resposta: status, headers e corpo
- O ciclo completo: quem pede, quem responde e o que trafega no meio

**Métodos e o que eles significam**
- `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- Por que o `GET` não muda estado — e por que criar registro com `GET` é um erro mesmo quando "funciona"
- Idempotência: o que acontece quando a mesma requisição é repetida, e por que isso importa quando a rede falha

**Status — os que valem a pena conhecer de verdade**
- As famílias: 2xx deu certo, 3xx foi para outro lugar, 4xx você errou, 5xx o servidor errou
- `200`, `201` e `204` — e a diferença entre "deu certo e aqui está" e "deu certo e não tem corpo"
- `301` e `302`
- `400`, `401`, `403`, `404`, `409` e `422`
- Duas confusões que merecem atenção especial:
  - **401 e 403** — "não sei quem você é" contra "sei quem você é, e você não pode"
  - **404 e 204** — "não existe" contra "existe, deu certo, e não tem nada para devolver"
- `500`: quando o problema não é seu, por mais que o diagnóstico ainda seja

**Headers**
- `Content-Type`, `Accept` e `Authorization`
- Cache no básico: o que é e por que às vezes "a alteração não aparece"

**JSON**
- Estrutura, tipos e parse
- O que costuma quebrar: vírgula sobrando, aspas erradas, número que virou string

**Autenticação**
- Bearer token e chave de API
- Por que a chave secreta nunca vai no código do frontend: qualquer pessoa lê pelo navegador e usa em seu nome

**CORS**
- O que é, por que existe e por que ele aparece para você
- E o principal: **CORS não se resolve no frontend.** Quase todo mundo perde um dia inteiro nisso achando que é bug do próprio código

**Ferramentas**
- `curl` na linha de comando — amarra com o módulo 0 e é o que você vai encontrar em toda documentação
- A aba *Network* do DevTools, para ver a requisição real que o navegador fez
- Um cliente de API (Bruno, Insomnia ou parecido) para montar e repetir chamadas

## Entregável

Eu preciso que você escolha uma API pública **que exija chave de acesso** — para exercitar autenticação de verdade — e monte um PR com:

1. **Consumo documentado:** para cada endpoint que usar, o que você pediu e o que voltou, usando `curl` ou um script em Node
2. **Quatro erros provocados de propósito**, na mesma API: um `401`, um `404`, um `400` e um `422`. Registre o corpo de erro de cada um e o que você fez para causá-lo

O item 2 é o coração do módulo. Provocar o erro ensina muito mais do que ler sobre ele, e além disso te dá repertório para reconhecer o mesmo padrão quando ele aparecer sem você ter pedido.

## Como entregar

Um Pull Request, com issue aberta antes. Cole o link num comentário da tarefa, confira o "passou quando" e mova para **Em revisão**.

Uma coisa que eu preciso que você cuide desde já: **a chave da API não entra no PR em lugar nenhum**. Ela mora numa variável de ambiente, e os comandos que você colar mostram `$MINHA_CHAVE`, e não o valor. Isso vira reflexo aqui e te salva no módulo 7.

**A prova deste módulo.** Cole no corpo do PR, para cada um dos quatro erros, o comando e a resposta inteira. O formato é este:

```bash
curl -i -H "Authorization: Bearer $MINHA_CHAVE" "https://api.exemplo.com/recurso/1"
curl -i "https://api.exemplo.com/recurso/1"
```

A primeira é a chamada autenticada que funciona; a segunda é a mesma sem o header, e é o seu `401`. O `-i` é o que faz o `curl` mostrar os cabeçalhos junto com o corpo — sem ele você não vê o status, e o status é metade do que eu quero ler.

Repare que o que vai colado é `$MINHA_CHAVE`, e nunca o valor. Rode com a variável exportada e o próprio comando já sai seguro para colar.

## Passou quando

Todos os itens abaixo são seus para conferir, antes de me chamar:

- [ ] Os quatro erros provocados estão no PR — `401`, `404`, `400` e `422` — cada um com o comando que causou e o corpo da resposta colado
- [ ] Tem uma chamada autenticada com `curl` no PR, com o header de autenticação, e a explicação do que cada pedaço do comando faz
- [ ] O PR tem uma seção escrita explicando a diferença entre `401` e `403`, e entre `404` e `204`, usando a API que você escolheu como exemplo
- [ ] O PR tem uma seção escrita sobre CORS: o que é, e por que não se resolve no frontend
- [ ] Para cada endpoint que você usou, o PR diz qual método é e por que ele é o correto para aquela operação
- [ ] Tem um print da aba Network mostrando uma requisição sua, com o que foi mandado e o que voltou
- [ ] Nenhuma chave de API aparece no PR nem no histórico — só `$MINHA_CHAVE` ou equivalente
- [ ] Para dois status diferentes que você recebeu, o PR diz qual seria o próximo passo da investigação em cada caso
## Onde estudar

- [MDN — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) — é a referência. Comece por *Overview*, *Methods* e *Status*
- [MDN — CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) — esse eu recomendo ler inteiro. Um dia você vai agradecer
- [Manual do curl](https://curl.se/docs/manpage.html) — não para ler de ponta a ponta, e sim para consultar
- [HTTP Cats](https://http.cat/) — cada status com um gato. Parece piada, mas funciona bem para fixar

## Erros comuns nessa fase

- Tratar todo erro como "a API está com problema". Na esmagadora maioria das vezes, 4xx é a sua requisição
- Não ler o **corpo** da resposta de erro. Quase toda API bem feita diz exatamente o que faltou, e o texto está ali
- Colocar a chave de API no frontend porque "é só um teste". Teste vai para produção com uma frequência impressionante
- Copiar um `curl` da documentação sem entender cada flag. Caso você não saiba o que o `-H` está fazendo, você não sabe montar o próximo
