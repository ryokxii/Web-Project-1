let cartes = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]; // int[]
let trouve = Array(cartes.length).fill(false); // bool []
let nbCoups = 0; // int
let carte1;
let carte2;
let prevCarteElt;
let carteElt;


const bouton = document.getElementById("Jouer");
bouton.addEventListener('click', jouer);

window.onload = function () {
    for (let i = 1; i <= 12; i++)
        document.getElementById(i).addEventListener('click', change_im);
    brasser();
}


function brasser() {
    cartes.sort(() => Math.random() - 0.5);
}

function jouer() {
    trouve = Array(cartes.length).fill(false);
    nbCoups = 0;
    for (let i = 1; i <= 12; i++) {
        document.getElementById(i).addEventListener('click', change_im);
        document.getElementById(i).src = "img/imag0.gif";
    }
    brasser();
}

function verifierCartesChoisies() {
    nbCoups++;
    let html = document.getElementById("result2");
    html.innerText = nbCoups;
    if (cartes[carte1 - 1] === cartes[carte2 - 1]) {
        trouve[carte1 - 1] = true
        trouve[carte2 - 1] = true
        carteElt.src = "img/imag00.gif"
        prevCarteElt.src = "img/imag00.gif"
        document.getElementById(carte1).removeEventListener('click', change_im)
        document.getElementById(carte2).removeEventListener('click', change_im)
        verifierSiLeJoueurGagne();
    }
    else {
        carteElt.src = "img/imag0.gif"
        prevCarteElt.src = "img/imag0.gif"
    }
    carte1 = undefined;
    carte2 = undefined;
    prevCarteElt = undefined;
    carteElt = undefined;
}

function verifierSiLeJoueurGagne() {
    if (trouve.every(v => v === true)) {
        console.log("gagne")

    }

}

function change_im(event) {
    let carte = parseInt(event.target.id)
    if (!carte1) {
        carte1 = carte;
        prevCarteElt = document.getElementById(carte1)
        prevCarteElt.src = `img/imag${cartes[carte1 - 1]}.gif`
    } else {
        carte2 = carte;
        carteElt = document.getElementById(carte2)
        carteElt.src = `img/imag${cartes[carte2 - 1]}.gif`
        setTimeout(() => verifierCartesChoisies(carte1, carte2), 500);
    }
}
