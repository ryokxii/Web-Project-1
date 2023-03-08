export default class Memoire {

  constructor() {
    this.cartes = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]; // int[]
    this.trouve = Array(this.cartes.length).fill(false); // bool []
    this.nbCoups = 0; // int
    this.carte1; // int
    this.carte2; // int
    this.prevCarteElt;
    this.carteElt;
  }

  brasser() {
    this.cartes.sort(() => Math.random() - 0.5);
  }

  verifierCartesChoisies() {
    this.nbCoups++;
    let html = document.getElementById("result2");
    html.innerText = this.nbCoups;
    if (this.cartes[this.carte1 - 1] === this.cartes[this.carte2 - 1]) {
      this.trouve[this.carte1 - 1] = true
      this.trouve[this.carte2 - 1] = true
      this.carteElt.src = "img2/imag00.gif"
      this.prevCarteElt.src = "img2/imag00.gif"
      document.getElementById(this.carte1).style.display = "none";
      document.getElementById(this.carte2).style.display = "none";
      this.verifierSiLeJoueurGagne()
    }
    else {
      this.carteElt.src = "img2/cardback.png"
      this.prevCarteElt.src = "img2/cardback.png"
    }
    this.carte1 = undefined;
    this.carte2 = undefined;
    this.prevCarteElt = undefined;
    this.carteElt = undefined;
  }

  verifierSiLeJoueurGagne() {
    if (this.trouve.every(v => v === true)) {
      document.getElementById("win").style.display = "flex";

      document.getElementById("win").onclick = function () {
        document.getElementById("win").style.display = "none";
        window.location.reload();
      };

    }
  }

}