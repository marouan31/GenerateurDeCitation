// Mes boutons
const ba = document.querySelector('#generera');
const bp = document.querySelector("#genererp");
let citation = document.querySelector('.citation');




// Ensemble de phrase animaux vs hommes
const asujet = ["L'autruche", "L'agneau", "La chevre", "Le blaireau", "Le renard", "La carpe", "Le boeuf"];
const averbe = ["attaque", "pêche", "coupe", "poursuit", "chasse"];
const acomp = ["le lobbyiste", "le ministre", "le directeur", "le chasseur", "le boucher"];

// Ensemble de phrases pensées
const psujet = ["La ménagère", "La cliente", "Le vendeur", "L'hysterique"];
const pverbe = ["envie", "previens", "mords", "gagne", "supplie"];
const pcomp = ["la folle", "le sage", "le sot", "le mendiant", "le malicieux"];

// Fonction pour choisir un leement d'un tableau de facon aleatoire 
function aleatoire(arr) {
    return arr[Math.floor(Math.random() * arr.length )]; 
}




// Actions des boutons
ba.addEventListener('click', () => {
// Action du bouton effacer
citation.innerHTML = aleatoire(asujet)+ " " + aleatoire(averbe)+ " "+ aleatoire(acomp)+ "!";
});

bp.addEventListener('click', () => {
// Action du bouton effacer
citation.innerHTML = aleatoire(psujet)+ " " + aleatoire(pverbe)+ " "+ aleatoire(pcomp)+ "!";

});