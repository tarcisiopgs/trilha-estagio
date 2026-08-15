# Módulo 9 — Ambiente, Docker e deploy

**Depende de:** módulos 0 (terminal), 4 (banco) e 7 (a API)

## Objetivo

A sua aplicação rodar igual na sua máquina, na máquina do outro e no servidor — e você saber colocar ela no ar e trazer de volta quando der errado.

## Por que esse módulo é o último da base

Docker só ensina alguma coisa quando existe algo de verdade para containerizar. Subir um banco em container antes de saber o que é um banco, ou empacotar uma aplicação antes de ter uma aplicação, basicamente troca um problema por dois — você fica depurando container e código ao mesmo tempo, sem dominar nenhum dos dois.

Agora você tem uma API (módulo 7), um banco modelado (módulo 4) e o terminal na mão (módulo 0). Ou seja, tem uma dependência real entre serviços, que é exatamente o problema que o Docker existe para resolver. Aqui ele vai fazer clique.

## O que estudar

**O problema que o Docker resolve**
- "Na minha máquina funciona": por que acontece e o que exatamente diverge entre duas máquinas
- Container e máquina virtual: a diferença, no conceito

**Conceitos**
- Imagem, container, camada, volume, rede
- Por que a imagem é imutável e o container é descartável

**Dockerfile**
- Escrever um do zero para a sua API
- `.dockerignore`, e por que mandar o `node_modules` para dentro do build é problema
- Camada e cache: por que a ordem das instruções muda o tempo de build
- Multi-stage: imagem de build separada da imagem que vai rodar

**docker compose**
- Subir API e banco juntos, com um comando só. Esse é o momento em que a ficha cai
- Rede entre os serviços: como a API acha o banco pelo nome
- Volume para o banco não perder dado a cada restart

**Configuração e segredo**
- Variável de ambiente no container
- O que **nunca** entra na imagem: segredo, `.env`, credencial. Imagem se distribui, e quem tem a imagem tem tudo que está dentro dela

**Deploy**
- Ambientes: desenvolvimento e produção, e o que muda entre eles
- Migration de banco no deploy: quando roda, e o que acontece se falhar no meio
- Build, artefato e release

**CI/CD**
- Do PR ao deploy: o que roda automático e o que exige alguém apertar o botão
- Por que deploy automático sem teste é uma péssima ideia

**Saber que está de pé**
- Health check
- Log em produção: onde ele vai parar e como você lê
- O mínimo para responder "caiu por quê?" sem adivinhar

**Voltar atrás**
- Rollback: como desfazer um deploy ruim
- E por que a resposta "eu conserto rápido" quase sempre é pior do que voltar para a versão que funcionava

## Entregável

1. **`docker compose up` sobe tudo**, do zero, em uma máquina que nunca rodou o projeto: API e banco, sem passo manual escondido
2. **Volume configurado**, de modo que o banco não perca dado ao reiniciar
3. **Deploy da aplicação num ambiente real**, com as variáveis de ambiente configuradas fora do código
4. **README que ensina alguém a rodar em 5 minutos** — e eu preciso que outra pessoa consiga seguir sem te perguntar nada. Esse é o teste de verdade do módulo

## Passou quando

- [ ] `docker compose up` sobe o ambiente completo do zero, sem passo manual não documentado
- [ ] O banco mantém os dados depois de reiniciar o container
- [ ] Nenhum segredo dentro da imagem nem no repositório
- [ ] A aplicação está no ar e acessível
- [ ] Consegue ver o log do que está rodando e explicar por que algo caiu
- [ ] Outra pessoa roda o projeto seguindo apenas o README
- [ ] Sabe fazer rollback do deploy e já fez pelo menos uma vez, de propósito

## Onde estudar

- [Docker — Get Started](https://docs.docker.com/get-started/) — o oficial, e é bom
- [Docker Compose](https://docs.docker.com/compose/) para a parte de subir os serviços juntos
- [The Twelve-Factor App](https://12factor.net/pt_br/) — está em português, é curto e explica *por que* configuração vai em variável de ambiente. Leia pelo menos os fatores 3, 5 e 10

## Erros comuns nessa fase

- Copiar um `Dockerfile` da internet sem entender cada linha. Caso você não saiba o que cada instrução faz, não vai saber corrigir quando o build quebrar
- Colocar `.env` dentro da imagem. Imagem circula, e o segredo circula junto
- Esquecer o volume e perder o banco inteiro a cada restart. Acontece com todo mundo uma vez
- Deixar passo manual fora do README: "ah, mas antes tem que rodar aquele script". Se não está escrito, não existe
- Fazer deploy na sexta à noite sem saber fazer rollback
