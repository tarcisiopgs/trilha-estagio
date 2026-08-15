# Módulo 4 — Dados e SQL

**Depende de:** módulo 2

## Objetivo

Modelar um domínio pequeno e responder perguntas sobre ele com SQL escrito à mão.

## Por que este módulo

Dado é o que sobra quando o sistema é desligado. Código a gente reescreve; dado mal modelado vira problema por anos.

E tem uma armadilha específica aqui: dá para trabalhar muito tempo usando uma biblioteca que gera SQL por você (um ORM) sem nunca ter escrito uma query. Funciona — até o dia em que a consulta fica lenta, ou traz linha repetida, ou some com registro, e você não tem como saber por quê, porque nunca viu o que está sendo gerado. Por isso, aqui, é SQL na mão. O ORM vem depois, e vai fazer muito mais sentido.

Um sinal clássico de que a base está faltando: resolver no código o que o banco resolve numa linha — buscar em uma tabela, buscar na outra, e juntar os dois resultados com um laço. Funciona com dez registros e derrete com dez mil.

## O que estudar

**O modelo relacional**
- Tabela, linha, coluna, tipo
- Chave primária: o que identifica uma linha
- Chave estrangeira: a coluna que aponta para a chave primária de outra tabela — é isso que liga o modelo inteiro

**Modelagem**
- Relação **1-para-N**: um cliente tem vários pedidos. A chave estrangeira mora no lado N
- Relação **N-para-N**: um aluno tem vários cursos e um curso tem vários alunos. Resolve-se com uma **tabela de junção** — e é aqui que trava praticamente todo mundo, então vá devagar
- Tipos: quando usar texto, número, data, booleano. E por que dinheiro não é `float`

**Consultar**
- `SELECT` com `WHERE`, `ORDER BY`, `LIMIT`
- Operadores: `=`, `<>`, `LIKE`, `IN`, `BETWEEN`
- `NULL`: por que `= NULL` não funciona e você precisa de `IS NULL`. Isso pega todo mundo uma vez

**JOIN**
- `INNER JOIN`: só o que tem par dos dois lados
- `LEFT JOIN`: tudo do lado esquerdo, com ou sem par
- O momento exato em que a diferença aparece: quando existe linha **sem** correspondente. Monte esse caso de propósito e veja o resultado mudar

**Agregação**
- `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`
- `GROUP BY`: agregar por categoria
- `HAVING`: filtrar depois de agregar — e a diferença entre ele e o `WHERE`

**Modificar dados**
- `INSERT`, `UPDATE`, `DELETE`
- **O hábito que salva:** antes de qualquer `UPDATE` ou `DELETE`, rode o `SELECT` equivalente com o mesmo `WHERE` e veja quais linhas seriam atingidas. Sempre. Inclusive quando você tem certeza
- O que acontece com um `DELETE` sem `WHERE`

**Performance, no básico**
- Índice: o que é, por que a busca fica rápida, e por que ele custa na escrita
- É a mesma ideia de usar um mapa/dicionário em vez de varrer uma lista inteira: você troca espaço por velocidade de busca

**Transação**
- Atomicidade: ou tudo acontece, ou nada acontece
- Quando isso importa (o exemplo clássico: tirar de uma conta e pôr em outra)

**Ambiente**
- PostgreSQL instalado direto na máquina ou num serviço gerenciado gratuito
- **Sem Docker aqui.** Docker é o módulo 9 e depende deste — subir um banco em container antes de saber o que é um banco só troca um problema por dois

## Entregável

1. **Modele um domínio pequeno** — 3 a 5 tabelas, com pelo menos uma relação N-para-N. Escolha algo que você conheça: biblioteca, escalação de time, cardápio de restaurante, controle de treinos. Entregue o diagrama (pode ser desenhado à mão e fotografado) e o script de criação das tabelas
2. **Popule com dados** que façam sentido — inclusive alguns casos "torto" de propósito: um registro sem par, um campo nulo. É com eles que o `LEFT JOIN` mostra a que veio
3. **Responda 10 perguntas de negócio em SQL**, cada uma no PR com a query e o resultado. No mínimo 3 exigindo `JOIN` e 2 exigindo `GROUP BY`

Perguntas de negócio são do tipo "quais clientes nunca fizeram pedido?", "qual o total por categoria no último mês?", "quem tem mais de três itens?". Você escreve as perguntas junto — formular a pergunta certa é metade do exercício.

## Passou quando

- [ ] O modelo tem chave estrangeira de verdade e a tabela de junção no lugar certo
- [ ] Escreve um `JOIN` sem consultar exemplo
- [ ] Explica quando o `LEFT JOIN` muda o resultado em relação ao `INNER JOIN`, com um caso concreto do seu próprio banco
- [ ] Diz, **antes de rodar**, quantas linhas a query deve trazer — e acerta pelo menos a ordem de grandeza
- [ ] Sabe contar linhas de uma tabela e explicar por que a agregação é feita no banco e não no código
- [ ] Não rodou nenhum `UPDATE` ou `DELETE` sem antes rodar o `SELECT` equivalente
- [ ] Explica o que um índice resolve e o que ele custa

## Onde estudar

- [PostgreSQL — Tutorial oficial](https://www.postgresql.org/docs/current/tutorial.html) — capítulos 1 a 3
- [SQLBolt](https://sqlbolt.com/) — exercícios interativos, direto no navegador, sem instalar nada. Ótimo para as primeiras horas
- [Use The Index, Luke](https://use-the-index-luke.com/) — só a introdução, para a parte de índices
- [PostgreSQL — Joins](https://www.postgresql.org/docs/current/queries-table-expressions.html) quando quiser a fonte formal

## Erros comuns nesta fase

- Modelar tudo numa tabela só, com colunas repetidas (`produto1`, `produto2`, `produto3`). Quando aparecer numeração em nome de coluna, falta uma tabela
- Fazer duas consultas e juntar no código o que um `JOIN` resolve numa
- Esquecer o `WHERE` no `UPDATE`. Acontece, e por isso existe o hábito do `SELECT` antes
- Guardar data como texto. Depois não dá pra ordenar nem comparar direito
- Usar `SELECT *` em tudo. Serve pra explorar; não serve pra código que vai rodar
