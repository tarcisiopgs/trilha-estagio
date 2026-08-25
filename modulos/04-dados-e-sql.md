# Módulo 4 — Dados e SQL

**Depende de:** módulo 2

## Objetivo

Você modelar um domínio pequeno e responder perguntas sobre ele com SQL escrito à mão.

## Por que esse módulo

Dado é o que sobra depois que a gente desliga o sistema. Código a gente reescreve; dado mal modelado vira problema por anos.

E tem uma armadilha bem específica aqui: dá para trabalhar muito tempo usando uma biblioteca que gera SQL por você (um ORM) sem nunca ter escrito uma query. Funciona — até o dia em que a consulta fica lenta, ou traz linha repetida, ou some com registro, e aí você não tem como saber por quê, visto que nunca viu o que estava sendo gerado. Por isso, aqui, é SQL na mão. O ORM vem depois, e naturalmente vai fazer muito mais sentido.

Um sinal clássico de que a base está faltando é resolver no código o que o banco resolve numa linha: buscar em uma tabela, buscar na outra e juntar os dois resultados com um laço. Funciona com dez registros e derrete com dez mil.

## O que estudar

**O modelo relacional**
- Tabela, linha, coluna e tipo
- Chave primária: o que identifica uma linha
- Chave estrangeira: a coluna que aponta para a chave primária de outra tabela. Basicamente é isso que liga o modelo inteiro

**Modelagem**
- Relação **1-para-N**: um cliente tem vários pedidos. A chave estrangeira mora no lado N
- Relação **N-para-N**: um aluno tem vários cursos, e um curso tem vários alunos. Resolve-se com uma **tabela de junção** — e é aqui que trava praticamente todo mundo, então vai devagar nessa parte
- Tipos: quando usar texto, número, data, booleano. E por que dinheiro não é `float`

**Consultar**
- `SELECT` com `WHERE`, `ORDER BY` e `LIMIT`
- Operadores: `=`, `<>`, `LIKE`, `IN`, `BETWEEN`
- `NULL`: por que `= NULL` não funciona e você precisa do `IS NULL`. Esse pega todo mundo uma vez

**JOIN**
- `INNER JOIN`: só o que tem par dos dois lados
- `LEFT JOIN`: tudo do lado esquerdo, com ou sem par
- O momento exato em que a diferença aparece é quando existe linha **sem** correspondente. Monte esse caso de propósito e veja o resultado mudar

**Agregação**
- `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`
- `GROUP BY`, para agregar por categoria
- `HAVING`, para filtrar depois de agregar — e a diferença entre ele e o `WHERE`

**Modificar dados**
- `INSERT`, `UPDATE`, `DELETE`
- **O hábito que salva:** antes de qualquer `UPDATE` ou `DELETE`, rode o `SELECT` equivalente, com o mesmo `WHERE`, e veja quais linhas seriam atingidas. Sempre — inclusive quando você tiver certeza
- O que acontece com um `DELETE` sem `WHERE`

**Performance, no básico**
- Índice: o que é, por que a busca fica rápida e por que ele custa na escrita
- É a mesma ideia de usar um mapa/dicionário em vez de varrer uma lista inteira: você troca espaço por velocidade de busca

**Transação**
- Atomicidade: ou tudo acontece, ou nada acontece
- Quando isso importa. O exemplo clássico é tirar dinheiro de uma conta e pôr em outra

**Ambiente**
- PostgreSQL instalado direto na máquina, ou num serviço gerenciado gratuito
- **Sem Docker aqui.** Docker é o módulo 9 e depende desse: subir um banco em container antes de saber o que é um banco só troca um problema por dois

## Entregável

1. **Modele um domínio pequeno** — de 3 a 5 tabelas, com pelo menos uma relação N-para-N. Eu preciso que você escolha um domínio que já conheça: biblioteca, escalação de time, cardápio de restaurante, controle de treino. Entregue o diagrama (pode ser desenhado à mão e fotografado) e o script de criação das tabelas
2. **Popule com dados** que façam sentido, inclusive com alguns casos "tortos" de propósito: um registro sem par, um campo nulo. É com eles que o `LEFT JOIN` mostra a que veio
3. **Responda 10 perguntas de negócio em SQL**, cada uma no PR com a query e o resultado. No mínimo 3 exigindo `JOIN` e 2 exigindo `GROUP BY`

Pergunta de negócio é do tipo "quais clientes nunca fizeram pedido?", "qual o total por categoria no último mês?", "quem tem mais de três itens?". As perguntas você escreve junto — formular a pergunta certa é metade do exercício.

## Como entregar

Um Pull Request, com issue aberta antes. Cole o link num comentário da tarefa, confira o "passou quando" e mova para **Em revisão**.

**A partir desse módulo entra a revisão cruzada:** antes de me chamar, peça uma revisão para o outro estagiário e responda o que ele levantar. Não é para ele aprovar no seu lugar — é para você passar pela experiência de ler o código de outra pessoa e de ter o seu lido. Eu reviso depois dele.

## Passou quando

Todos os itens abaixo são seus para conferir, antes de me chamar:

- [ ] O diagrama está no PR e tem pelo menos uma relação N-para-N, com a tabela de junção no lugar certo
- [ ] O script de criação roda do zero num banco vazio, sem erro, e as tabelas têm `FOREIGN KEY` declarada de verdade
- [ ] As 10 perguntas estão no PR, cada uma com a pergunta em português, a query e o resultado colado
- [ ] No mínimo 3 usam `JOIN` e 2 usam `GROUP BY`
- [ ] Para cada query, o PR diz **quantas linhas você esperava antes de rodar** e quantas vieram
- [ ] Tem uma pergunta que só o `LEFT JOIN` responde, com a mesma query em `INNER JOIN` do lado e a diferença de resultado visível
- [ ] Os dados populados incluem os casos tortos: pelo menos um registro sem par e um campo nulo
- [ ] Todo `UPDATE` ou `DELETE` que aparece no PR vem acompanhado do `SELECT` equivalente, rodado antes
- [ ] O PR tem uma seção escrita sobre índice: o que ele resolve, o que ele custa, e em qual coluna do seu banco você criaria um
## Onde estudar

- [PostgreSQL — tutorial oficial](https://www.postgresql.org/docs/current/tutorial.html), capítulos 1 a 3
- [SQLBolt](https://sqlbolt.com/) — exercício interativo, direto no navegador, sem instalar nada. Ótimo para as primeiras horas
- [Use The Index, Luke](https://use-the-index-luke.com/) — só a introdução, para a parte de índices
- [PostgreSQL — Joins](https://www.postgresql.org/docs/current/queries-table-expressions.html), quando você quiser a fonte formal

## Erros comuns nessa fase

- Modelar tudo numa tabela só, com colunas repetidas (`produto1`, `produto2`, `produto3`). Quando aparecer numeração em nome de coluna, está faltando uma tabela
- Fazer duas consultas e juntar no código o que um `JOIN` resolve numa
- Esquecer o `WHERE` no `UPDATE`. Acontece, e é justamente por isso que existe o hábito do `SELECT` antes
- Guardar data como texto. Depois não dá para ordenar nem comparar direito
- Usar `SELECT *` em tudo. Serve para explorar, mas não serve para código que vai rodar
