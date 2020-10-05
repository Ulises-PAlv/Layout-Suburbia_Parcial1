"use strict";

document.getElementById("btnCupon").addEventListener("click", function(event){
    let hasError = false;

    if(!document.querySelector('input[name="aprobado"]:checked')) {
        alert('Error, rellena el campo >:( "¿Se merece un 10 Ulises?" ');
        hasError = true;
    }

    if(hasError) event.preventDefault();
});