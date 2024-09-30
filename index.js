// Elaborar un program que solicite por prompt grados celsius y transformarlos en °F y °K
// vinculo del boton con id boton a la funcion
document.getElementById('boton').addEventListener('click', function(){
//   inicio del ciclo while para la repeticion de la funcion
    while(true){
        // definicion de variables que se usaran durante la funcion
        let tempCelsius = (prompt("Ingrese temperatura en grados Celsius o escriba terminar para salir del programa"))
        let tempFar = (Number(tempCelsius) *(9/5)) + 32;
        let tempKel = Number(tempCelsius) + 273.15;

    // condicional if para la verificacion de los datos ingresados en el prompt

    if(!isNaN(tempCelsius) && tempCelsius != null && tempCelsius != ""){
         return (console.log("los °C ingresados son: " + tempCelsius + " " + "los °F ingresados son: " + tempFar +" "+ "los °K ingresados son: " + tempKel))
      break;
    //   condicion adicional para una salida alternativa del ciclo
    }else if(tempCelsius == 'terminar'){
        break;
        // alerta en caso de que no se cumplan las condiciones anteriores
    }else{
        alert('Ingrese un numero valido');
      continue;
    }
}
});

// Variables que se usaran en el conversor de tipo input
let celinput= document.querySelector("#celsius > input")
let farinput= document.querySelector("#far > input")
let kelinput= document.querySelector("#kel > input")
let limpio= document.getElementById("limpiar")

function roundNumber(number){
    return Math.round(number*100)/100
}


//
celinput.addEventListener('input', function(){
    let tempCelsius = parseFloat(celinput.value)
    let tempFar = (tempCelsius*(9/5)) + 32
    let tempKel = tempCelsius + 273.15

    farinput.value = roundNumber(tempFar)
    kelinput.value = roundNumber(tempKel)
})


/* Fahrenheit to Celcius and Kelvin */
farinput.addEventListener('input', function(){
    let tempFar = parseFloat(farinput.value)
    let tempCelsius = (tempFar - 32) * (5/9)
    let tempKel = (tempFar -32) * (5/9) + 273.15

    celinput.value = roundNumber(tempCelsius)
    kelinput.value = roundNumber(tempKel)
})

/* Kelvin to Celcius and Fahrenheit */
kelinput.addEventListener('input', function(){
    let tempKel = parseFloat(kelinput.value)
    let tempCelsius = tempKel - 273.15
    let tempFar = (tempKel - 273.15) * (9/5) + 32

    celinput.value = roundNumber(tempCelsius)
    farinput.value = roundNumber(tempFar)
})


document.getElementById('limpiar').addEventListener('click', function(){
    celinput.value = ""
    farinput.value = ""
    kelinput.value = ""
})



function transform(tempcelsius){
let tempCelsius = Number(prompt("Ingrese temperatura en grados Celsius"))
let tempFar = (Number(tempCelsius) *(9/5)) + 32;
let tempKel = Number(tempCelsius) +273.15;

return console.log("los °C ingresados son: " + tempCelsius + " " + "los °F ingresados son: " + tempFar +" "+ "los °K ingresados son: " + tempKel)
}

