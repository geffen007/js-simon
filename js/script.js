// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.


$(document).ready(function() {
    var numeriPc = [];
    var numeriUtente = [];
    var giusti = [];

    while (numeriPc.length < 5){
        var numero = numeriRandom(1, 100);
        if (!controllo(numero, numeriPc)){
            numeriPc.push(numero);
        }
    }

    alert("ricorda questi numeri " + numeriPc);
    console.log(numeriPc);

    var clock = setInterval(countDown, 1000);
    var time = 30;

    function countDown(){
        console.log(time);
        $(".time").removeClass("none");
        $(".time").addClass("flex");
        $(".seconds").text(time);
        if (time == 0) {
            clearInterval(clock);
                // for (var i = 0; i < 5; i++) {
                // numeriUtente.push(parseInt(prompt("inserisci i numeri che ricordi")));
                // }
                for (var i = 0; i < 5; i++) {
                    var numeroU = prompt("Inserisci i numeri che ricordi");
                    if (!controllo(numeroU, numeriUtente)) {
                        numeriUtente.push(numeroU)
                    }
                }


                $(".time").removeClass("flex");
                $(".time").addClass("none");
                checkLists(numeriPc, numeriUtente, giusti);
                var punteggio;
                if (giusti.length ==0) {
                    punteggio = "Non hai ricordato nemmeno un numero";
                }else {
                    var punteggio = "Hai ricordato " + giusti.length + " numeri" ;
                }

                


                $(".risultati>.numeri").append("<p>" + numeriUtente + "</p>");
                $(".risultati>.ricordati").append("<p>" + giusti + "</p>");
                $(".risultati>.punteggio").append("<p>" + punteggio + "</p>");
                $(".risultati").removeClass("none");
                $(".risultati").addClass("flex");
        }
        time--;
    }
    //
    //

    // setTimeout(function(){
    //     for (var i = 0; i < 5; i++) {
    //         numeriUtente.push(parseInt(prompt("inserisci i numeri che ricordi")));
    //     }
    //     checkLists(numeriPc, numeriUtente, giusti);
    //     var punteggio = giusti.length;
    //     console.log(numeriUtente);
    //     console.log("i numeri che hai ricordato sono i seguenti " + giusti);
    //     console.log("hai indovinato " + punteggio + " numeri");
    // }, 4000);

});

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function controllo(num, array) {
    var i = 0;
    while (i < array.length) {
        if (num == array[i]) {
            return true;
        }
        i++;
    }
    return false;
}

// function getFive(){
//     for (var i = 0; i < 5; i++) {
//         var a = parseInt(prompt("inserisci i numeri che ricordi"));
        // numeriUtente.push(a);
    // }
    // checkLists(numeriPc, numeriUtente, giusti);
    // console.log(giusti);
// }





function checkLists (arr1, arr2, arr3) {
    for (var j = 0; j < arr1.length; j++) {
        if (controllo(arr2[j], arr1)) {
            arr3.push(arr2[j])

        }
    }
}
