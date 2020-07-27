// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.


$( document ).ready(function() {
    var numeriPc = [];
    var numeriUtente= [];
    var giusti = [];

    while (numeriPc.length < 5){
        var numero = numeriRandom(1, 100);
        if (!controllo(numero, numeriPc)){
            numeriPc.push(numero);
        }
    }

    alert("ricorda questi numeri " + numeriPc);
    console.log(numeriPc);



    // var clock = setInterval(countDown, 1000);
    // var time = 3;
    //
    // function countDown(){
    //     console.log(time);
    //     if (time == 0) {
    //         clearInterval(clock);
    //         getFive(numeriUtente);
    //         console.log(numeriUtente);
    //     }
    //     time--;
    // }
    //
    // checkLists(numeriPc, numeriUtente, giusti);
    //
    // console.log(giusti);


});



function numeriRandom (min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function controllo (num, array) {
    var i = 0;
    while (i < array.length) {
        if (num == array[i]) {
            return true;
        }
        i++;
    }
    return false;
}

// function getFive(b){
//     for (var i = 0; i < 5; i++) {
//         var a = parseInt(prompt("inserisci i numeri che ricordi"));
//         b.push(a);
//     }
// }
//
// function checkLists (arr1, arr2, arr3) {
//     for (var j = 0; j < arr1.length; j++) {
//         if (controllo(arr2[j], arr1)) {
//             arr3.push(arr[j])
//
//         }
//     }
// }
