/* 4.Crie um script onde o usuario digite um numero e esse mesmo seja subtraido de um numero randomico(0 - 1000) e mostre na tela o resultado absoluto do mesma bem como o numero escolhido pelo usuario e o numero randomico */

var random = () => Math.round(Math.random() * 1000);

var val_absoluto = (num1) => Math.abs(num1);

num1 = parseInt(prompt("Digite um numero"));

document.write("Numero usuário: " + num1 + "<br>");

num2 = random();
document.write("Randomico: " + num2 + "<br>");
result = num1 - num2;
document.write("subt: " + result + "<br>");

document.write("Absoluto: " + val_absoluto(result) + "<br>");
