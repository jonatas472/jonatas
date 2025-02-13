function indiceCorporal(){
    const alt = parseFloat(document.getElementById("metros").value);
    const pes = parseInt(document.getElementById("kilo").value);

    let multi = alt * alt
    let  total = pes / multi

    parseInt(document.getElementById("corporeo").innerHTML=total);

    if(total <= 16){
        document.getElementById("resultado").innerHTML="Magreza extrema!"
    }
    else if(total > 16 && total <= 18.5){
        document.getElementById("resultado").innerHTML="Magreza!"
    }
    else if(total > 18.5 && total <= 25){
        document.getElementById("resultado").innerHTML="Peso normal!"
    }
    else if(total > 25 && total <= 30){
        document.getElementById("resultado").innerHTML="Sobrepeso!"
    }
    else{
        document.getElementById("resultado").innerHTML="Obesidade!"
    }
}