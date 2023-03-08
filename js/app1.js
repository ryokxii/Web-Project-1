import Memoire from "./Memoire.js"

let monJeu = new Memoire();

const bouton = document.getElementById("Jouer");
bouton.addEventListener('click', recommencerPartie);

window.onload = function () {
    for (let i = 1; i <= 12; i++)
        document.getElementById(i).addEventListener('click', change_im);
    monJeu.brasser();
}

function recommencerPartie() {
    window.location.reload();
    monJeu.brasser();
}

function change_im(event) {
    let carte = parseInt(event.target.id)
    if (!monJeu.carte1 || 0) {
        monJeu.carte1 = carte;
        monJeu.prevCarteElt = document.getElementById(monJeu.carte1)
        monJeu.prevCarteElt.src = `img2/imag${monJeu.cartes[monJeu.carte1 - 1]}.png`
    } else {
        monJeu.carte2 = carte;
        monJeu.carteElt = document.getElementById(monJeu.carte2)
        monJeu.carteElt.src = `img2/imag${monJeu.cartes[monJeu.carte2 - 1]}.png`
        setTimeout(() => monJeu.verifierCartesChoisies(monJeu.carte1, monJeu.carte2), 500);
    }
}

