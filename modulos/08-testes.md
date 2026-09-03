# Módulo 8 — Testes automatizados

**Depende de:** módulo 7

## Objetivo

Você escrever teste que te dá coragem de mudar o código.

## Por que esse módulo vem aqui, e não antes

Teste só ensina alguma coisa quando existe código seu para testar. Testar o exemplo do tutorial é exercício de sintaxe: você escreve, passa, e não aprendeu nada sobre a decisão que importa, que é **o que** vale a pena testar.

E eu queria desfazer uma ideia comum antes de começar: teste não serve para provar que o código funciona. Serve para você poder **mexer** nele daqui a três meses sem medo. É por isso que o valor do teste aparece na segunda vez que você toca no código, e não na primeira.

Inclusive é aqui que a esteira sobe um degrau: a partir desse módulo, CI verde vira pré-requisito para eu revisar o seu PR.

## O que estudar

**Por que testar**
- O teste como rede de segurança para mudança, não como prova de corretude
- O custo de não ter: toda alteração vira uma rodada manual de clicar em tudo

**Os tipos e a proporção**
- Unidade, integração e ponta a ponta
- Quanto cada um custa para escrever, para rodar e para manter — e por que a maior parte deve ser de unidade

**Anatomia de um teste**
- Arrange, act, assert
- Um teste testa uma coisa. Teste que falha por cinco motivos diferentes não te diz nada quando quebra
- Nome de teste que descreve o comportamento, e não a função

**O que testar — e o que não testar**
- Regra de negócio: sempre
- Framework, biblioteca de terceiro, getter bobo: não. Você não precisa testar se o Express roteia
- **Casos de borda**, que é onde o módulo 2 volta: vazio, nulo, negativo, zero, duplicado, limite, fora de ordem. Pensar em como quebrar é a mesma habilidade de depurar, só que usada antes

**Teste de integração na API**
- Subir o servidor, bater na rota, conferir status e corpo
- Banco de teste: como isolar, e por que um teste não pode depender do que outro deixou para trás

**Test doubles**
- Stub e mock, no básico
- O perigo de mockar demais: chega um ponto em que você está testando os seus mocks, e não o seu código

**Cobertura**
- Para que serve a métrica e por que 100% não é meta
- Cobertura alta com teste ruim é pior que cobertura baixa, visto que dá falsa sensação de segurança

**CI**
- Rodar os testes automaticamente a cada PR
- Ler o log quando falha no CI e passa na sua máquina

## Entregável

1. **Testes de unidade** cobrindo as regras de negócio da API do módulo 7, incluindo os casos de borda
2. **Testes de integração** nas rotas principais: status e corpo, caminho feliz e caminho de erro
3. **CI configurado**, rodando os testes a cada PR
4. **Um teste escrito ANTES da correção de um bug** — o teste falha, você corrige, o teste passa. Documente essa sequência no PR

O item 4 é o mais importante do módulo, e eu preciso que você faça exatamente nessa ordem. É a diferença entre "consertei" e "consertei e não volta mais".

## Como entregar

Um Pull Request, com issue aberta antes, revisão cruzada e CI verde.

Aqui o CI deixa de ser enfeite: ele roda os testes a cada PR, e a partir desse módulo eu considero o vermelho um bloqueio, não um aviso.

Cole o link num comentário da tarefa, confira o "passou quando" e mova para **Em revisão**.

**A prova deste módulo.** Cole no corpo do PR a saída de:

```bash
npm test -- <a flag de ordem aleatória da sua ferramenta>; echo "saiu com: $?"
npm test && npm test
```

A flag muda conforme o que você escolheu: é `--randomize` no Jest, `--sequence.shuffle` no Vitest, `--test-shuffle` no runner do próprio Node. Procure a sua na documentação — achar isso faz parte.

O primeiro prova que a suíte não depende da ordem; o segundo, que ela não depende de banco limpo. Os dois são o que separa teste de armadilha para o próximo que mexer no código.

E aponte no texto os dois hashes do item 4: o commit em que o teste falha e o commit seguinte, em que ele passa. Nessa ordem, que é o ponto inteiro do exercício.

## Passou quando

Todos os itens abaixo são seus para conferir, antes de me chamar:

- [ ] O CI está configurado, roda a cada PR, e está verde
- [ ] Existe um commit com o teste falhando e o commit seguinte com a correção — o PR aponta os dois hashes, nessa ordem
- [ ] Rodar a suíte em ordem aleatória passa: o comando e a saída estão colados no PR
- [ ] Rodar a suíte duas vezes seguidas, sem limpar o banco no meio, passa nas duas
- [ ] Os testes cobrem caso de borda, e o PR aponta quais casos de borda você escolheu e por quê
- [ ] Existem testes de integração nas rotas principais, cobrindo caminho feliz e caminho de erro
- [ ] O PR explica a diferença entre unidade e integração usando **dois testes seus** como exemplo, um de cada tipo
## Onde estudar

- [Vitest](https://vitest.dev/guide/) ou [Jest](https://jestjs.io/docs/getting-started) — escolha um. O Vitest é mais simples de configurar em projeto novo
- [Testing Library](https://testing-library.com/docs/) caso você vá testar o frontend também
- [Documentação do GitHub Actions](https://docs.github.com/pt/actions) para montar o CI. Um workflow que roda `install`, `lint` e `test` já resolve

## Erros comuns nessa fase

- Escrever teste só do caminho feliz. O caminho feliz raramente é o que quebra em produção
- Testar implementação em vez de comportamento. Aí você refatora sem mudar o resultado e vinte testes quebram — e o teste vira estorvo em vez de ajuda
- Mockar tudo até o teste não tocar mais em nenhuma linha de código real
- Perseguir porcentagem de cobertura. Cobertura é sintoma, não meta
- Deixar um teste "às vezes falha" quieto no canto. Teste instável é pior do que teste nenhum, porque ensina o time a ignorar vermelho
