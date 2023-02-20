var nome = window.prompt("Digite seu nome completo: ");
var idade = window.prompt("Digite a sua idade: ");

function soma(){
  var tn1 = window.document.getElementsByName('pergunta')[0];
  var tn2 = window.document.getElementsByName('pergunta2')[0];
  var n1 = Number(tn1.value);
  var oper = n1 * 80
  res.innerHTML = `${nome}, o valor total do aluguel é de R$${oper.toFixed(2).replace('.',',')}`
}