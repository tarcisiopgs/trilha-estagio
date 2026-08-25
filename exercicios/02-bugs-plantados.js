/**
 * Módulo 2 — bugs plantados
 *
 * Este arquivo tem TRÊS defeitos plantados de propósito. Nenhum deles
 * derruba o programa com um erro vermelho na sua cara: os três produzem
 * resultado errado em silêncio, que é justamente o tipo mais comum e mais
 * caro de bug no trabalho de verdade.
 *
 * Rode com:  node exercicios/02-bugs-plantados.js
 *
 * No fim, o arquivo confere sozinho os resultados e imprime o que passou e
 * o que falhou. Quando os três estiverem corrigidos, tudo imprime PASSOU.
 *
 * Regra do módulo: escreva a sua hipótese ANTES de corrigir. O relato de
 * cada bug precisa dizer qual era o sintoma, o que você achou que era, como
 * testou e o que era de fato.
 */

// Simula a busca do preço numa API externa. Não mexa nesta função.
function buscarPreco(sku) {
  const tabela = { CAFE: 25, FILTRO: 8, CANECA: 40 };
  return new Promise((resolve) => {
    setTimeout(() => resolve(tabela[sku] ?? 0), 10);
  });
}

// Soma a quantidade de todos os itens do pedido.
function contarItens(itens) {
  let total = 0;
  for (let i = 1; i < itens.length; i++) {
    total += itens[i].quantidade;
  }
  return total;
}

// Calcula o valor total do pedido, consultando o preço de cada item.
async function calcularTotal(itens) {
  let total = 0;
  for (const item of itens) {
    const preco = buscarPreco(item.sku);
    total += preco * item.quantidade;
  }
  return total;
}

// Cria um novo pedido a partir de um existente, para o cliente repetir a compra.
function repetirPedido(pedido, novoCliente) {
  const copia = { ...pedido };
  copia.cliente = novoCliente;
  copia.itens.push({ sku: 'CANECA', quantidade: 1 });
  return copia;
}

async function main() {
  const pedidoOriginal = {
    cliente: 'Marcelo',
    itens: [
      { sku: 'CAFE', quantidade: 2 },
      { sku: 'FILTRO', quantidade: 3 },
    ],
  };

  const casos = [];

  // Caso 1 — dois itens de café mais três filtros são cinco unidades.
  casos.push(['contarItens', contarItens(pedidoOriginal.itens), 5]);

  // Caso 2 — 2 cafés a 25 mais 3 filtros a 8 dá 74.
  casos.push(['calcularTotal', await calcularTotal(pedidoOriginal.itens), 74]);

  // Caso 3 — repetir o pedido não pode mexer no pedido original.
  const novo = repetirPedido(pedidoOriginal, 'Danilo');
  casos.push(['repetirPedido (novo tem 3 itens)', novo.itens.length, 3]);
  casos.push(['repetirPedido (original continua com 2)', pedidoOriginal.itens.length, 2]);

  let falhas = 0;
  for (const [nome, obtido, esperado] of casos) {
    const ok = obtido === esperado;
    if (!ok) falhas++;
    console.log(
      `${ok ? 'PASSOU' : 'FALHOU'}  ${nome}: esperado ${esperado}, obtido ${obtido}`
    );
  }

  console.log(
    falhas === 0
      ? '\nTudo certo. Agora escreva os relatos.'
      : `\n${falhas} verificação(ões) falhando. Uma hipótese de cada vez.`
  );
}

main();
