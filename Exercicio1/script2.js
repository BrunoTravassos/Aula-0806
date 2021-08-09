/* 2.Crie um script onde o usuario digite 3 numeros , esse numeros elevados a 2 , 3 e 4 , mostre o resultado de cada um deles e a soma das potencias dos 3 */

var potencia2 = (num) => Math.pow(num,2);
var potencia3 = (num) => Math.pow(num,3);
var potencia4 = (num) => Math.pow(num,4);
var soma_potencia = (num1,num2,num3) => num1+num2+num3;

for (i = 1; i <= 3; i++) {
  num = parseInt(prompt("Digite um numero"));
  document.write(
    "Numero: " +
      num +
      " | Potencia2: " +
      potencia2(num) +
      " | " +
      "  Potencia3: " +
      potencia3(num) +
      " | " +
      "  Potencia4: " +
      potencia4(num) +
      " | " +
      "  Soma das Potencias: " +
      soma_potencia(potencia2(num), potencia3(num), potencia4(num)) +
      " | " +
      "<br>"
  );
}


