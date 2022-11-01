let n1 = parseFloat(prompt("Insira o primeiro número: ", ""));
let n2 = parseFloat(prompt("Insira o segundo número: ", ""));

var operacao = prompt("Selecione sua operação: 1- SOMAR, 2- SUBTRAIR, 3- MULTIPLICAR, 4- DIVIDIR", "");

switch (operacao){
    case "1":
        let soma = n1 + n2;
        alert("A soma dos algarismos é: " + soma);
        break;
    
    case "2":
        let sub = n1 - n2;
        alert("A subtração dos algarismos é: " + sub);
        break;

    case "3":
        let mult = n1 * n2;
        alert("A multiplicação dos algarismos é: " + mult);
        break;

    case "4":
        let div = n1 / n2;
        alert("A divisão dos algarismos é: " + div);
        break;
}
