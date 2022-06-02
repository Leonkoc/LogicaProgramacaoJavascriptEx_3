let preco = prompt("Digite o valor do produto: ");
const vista = preco - preco * 0.1;
const parcela = preco / 3;

alert(
  `O produto a vista tem desconto de 10% ficaria R$: ${vista.toFixed(2)}\n
   E consigo fazer parcelado em 3 parcelas de ${parcela.toFixed(2)} reais.`
);
