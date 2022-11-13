

document.addEventListener("DOMContentLoaded", function (event) {

    const btnAletorio = document.querySelector("#btnAletorio");
    const numero = document.querySelector("#numero");

    const formulario=document.getElementById("formulario");
    const btnClear = document.querySelector('#btnClear');
    const message = document.querySelector("#message");
    const message2 = document.querySelector("#message2");
    const suma1 = document.querySelector("#suma");
    ///////

    let resultado = [];
    let contador = 3;
    let suma=0;
    ////////////////////

    btnAletorio.addEventListener("click", function () {

        let ramdom = Math.floor(Math.random() * (6-1+1)+1);
        numero.textContent =("Sacaste un :  "+ ramdom);
        contador--;

        /////////////////////////////////
        resultado.push(ramdom);
        suma=resultado[0]+resultado[1]+resultado[2];
        message2.textContent =("Te quedan "+ contador +" intento(s)");
        message.textContent = ("Puntajes : "+resultado);
        
        if (contador == 0) {
            document.getElementById("btnAletorio").disabled = true;
            message2.textContent =("Ya no te quedan mas intentos");
        suma1.textContent = (" Puntaje Total : "+suma);

        };
        
        if (suma <=5) {
            suma1.style.background="#ED3333";
        }  else if( suma >5 && suma<=11 ){
            suma1.style.background="#F5F509";
        }else if (suma >11 && suma <=18 ) {
            suma1.style.background="#66F509";
        } 
        
    });


});

   
