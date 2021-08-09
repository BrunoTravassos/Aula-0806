/* 3.Crie um script onde o usuario digite 2 numeros e realize a divisão entre os dois sendo sempre dividido o maior pelo menor , apos exiba na tela os numeros escolhidos e o resultado da divisão arredondado para baixo(floor) */
var max = (num1, num2) => {
    aux = Math.max(num1, num2);
    aux2 = Math.min(num1, num2);
    return aux / aux2;
} ;

num1 = parseInt(prompt("Digite um numero")),
num2 = parseInt(prompt("Digite um numero"));
document.write("Numero1: " + num1 + "<br>");
document.write("Numero2: " + num2 + "<br>");

document.write("Resultado: " + max(num1, num2) + "<br>");
