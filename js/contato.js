const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-none");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?\d{2}?\s?)?9?\d{4}-?\d{4}$/;

function setError(index){
    spans[index].style.display = "block"
}
function removeError(index){
    spans[index].style.display = "none"
}

function nameValidate(){
    if (campos[0].value.length < 3){
        setError(0);
    }
    else{
        
        removeError(0);
    }
}
function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    else{
        removeError(1);
    }
}

function phoneValidate(){
    if(!phoneRegex.test(campos[2].value)){
        setError(2);
    }
    else{
        removeError(2);
    }
}