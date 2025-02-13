let numberParaAchar = 0;
let tentativas = 0;

function action(){
    numberParaAchar = parseInt(Math.random() * 100);
    console.log(numberParaAchar);
}

function advinheNumber(){
    let element = document.getElementById("ad").value;

    if(element > 100 || ad < 1){
        tentativas++
        document.getElementById("attemptss").innerHTML ="Aposta inválida!"
    }
    else if(element < numberParaAchar){
        tentativas++
        document.getElementById("attemptss").innerHTML ="Tente de novo, o número é maior!"
    }
    else if( element > numberParaAchar){
        tentativas++
        document.getElementById("attemptss").innerHTML ="Tente de novo, o número é menor!"
    }
    else{
        tentativas++
        document.getElementById("attemptss").innerHTML ="Párabens, você acertou! precisou de apenas " + tentativas + " tentativa(s)"
    }
}

action();