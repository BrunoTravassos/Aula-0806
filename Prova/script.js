//1
a) console.log(10*5);
b)console.log(10/2);
c)console.log(18%9)
d)console.log(x += y);
e)console.log(x *= y);

//2
b)v

//3
 for (i = 0; i <= 1000; i++){
    console.log(i);
} 
 i = 0;
while (i <= 1000) {
    console.log(i);
    i++
}

i = 0;
do {
    console.log(i);
    i++;
}while(i<=1000)

//4 
a) if(num%2==0){"par"} else{"impar"};
b) if(num%3==0){multiplo 3};
c) for ( i = 2; i < num; i++)
        if (num % i == 0) {
            return false;}
    return true;
d) if(num>num2){"num é maior"} else{"num2 é maior"} 

//5
num1 = prompt("um numero");
num2 = prompt("um numero");
document.write("Antes:" + "<BR>" + num1 + " | " + num2+"<br>");
aux = num1;
num1 = num2;
num2 = aux;
document.write("Depois:" + "<BR>" + num1 + " | " + num2);

//6
function myFunction () {
alert ("Olá, mundo!");
}
myFunction();

//7
 var resultado = () =>num1*2, num1 = parseInt(prompt("Digite um numero"));
document.write("Resultado numero *2: " + resultado()+"<br>");
document.write("Ao Quadrado " + resultado()*resultado()); 

//8
a) Math.round(Math.random() * 10);
b) Math.max(10, 20);
c)Math.round(2.4)
d)Math.sqrt(81);

//9
var alerta = () => x>y,x = parseInt(prompt("Digite X"))
  y = parseInt(prompt("Digite Y"));
if (alerta() == true) {
    alert("Hello World! ");
} else {
    alert("GoodBye! ");
}

//10
fruta =(prompt("digite o nome da fruta: "));

switch (fruta) {
    case "banana":
        document.write("Olá");
        break;
  case "maça":
        document.write("Bem-vindo");
        break;
  
    default:
        document.write("Fruta Errada");
        break;
}
