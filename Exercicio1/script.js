/* 1. Utilizando as funções matematicas crie um script que o usuario digite dois numeros e mostre na tela os numeros escolhidos e raiz quadrada dos mesmos (arredondada)
 */

var quadrada = (num1) => Math.sqrt(num1)

for (i = 1; i <= 2; i++){
    num1 = parseInt(prompt("Digite um numero"));
    document.write("Numero: " + num1 + " | Raiz: " + quadrada(num1) + "<br>");
}
