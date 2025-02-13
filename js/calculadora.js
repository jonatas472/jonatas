function valorDasEquacoes(){
    const number1 = parseInt(document.getElementById("n1").value);
    const number2 = parseInt(document.getElementById("n2").value);

    let adicao = number1 + number2;
    let subtracao = number1 - number2;
    let multiplicacao = number1 * number2;
    let divisao = number1 / number2;

    document.getElementById("soma").innerHTML =adicao;
    document.getElementById("menos").innerHTML =subtracao;
    document.getElementById("two").innerHTML =multiplicacao;
    document.getElementById("twoHundred").innerHTML =divisao;
}