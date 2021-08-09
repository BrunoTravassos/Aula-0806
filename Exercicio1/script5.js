/* Crie um script onde o usuario digite o angulo que ele quer calcular , mostre na tela o angulo escolhido e seu seno , cosseno e tangente */

var seno = (valor_angulo) => Math.sin(valor_angulo);
var cosseno = (valor_angulo) => Math.cos(valor_angulo);
var tangente = (valor_angulo) => Math.tan(valor_angulo);


valor_angulo = parseInt(prompt("Digite o valor do Angulo"));

document.write("Valor do angulo: " + valor_angulo + "°" + "<br>");

document.write(
  "Seno de " + valor_angulo + "° = " + seno(valor_angulo) + "<br>"
);
document.write(
  "Cosseno de " + valor_angulo + "° = " + cosseno(valor_angulo) + "<br>"
);
document.write(
  "Tangente de " + valor_angulo + "° = " + tangente(valor_angulo) + "<br>"
);
