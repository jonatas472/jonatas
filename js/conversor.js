function Conversao(){
    const libers = parseInt(document.getElementById("libra-esterlina").value);
    const meteoritos = parseFloat(document.getElementById("meters").value);
    const calor = parseFloat(document.getElementById("kelvin").value);

    let valor = libers * 7.18;
    let distancia = meteoritos / 0.91;
    let quente = calor + 459.67 / 1.8;

    document.getElementById("libra").innerHTML=valor;
    document.getElementById("metros").innerHTML=distancia;
    document.getElementById("temperatura").innerHTML=quente;
}