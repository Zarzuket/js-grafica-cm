// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

var squareUtente = parseInt(prompt("inserisci un numero da 1 a 100 per creare un campo di quadrati."));

while(isNaN(squareUtente)){
    squareUtente = parseInt(prompt("devi inseririre un numero da 1 a 100!!"));
}

function xSquare(){
    for( var i=1; i<=squareUtente; i++){
        // console.log(i);
        document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`
    }
}

xSquare(squareUtente);


document.getElementById("campo").addEventListener("click" ,
    function(event){
        event.target.classList.add("red");
        alert(event.target.innerHTML)
    }
)