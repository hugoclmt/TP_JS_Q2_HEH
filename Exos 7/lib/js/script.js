var cases = document.querySelectorAll("td");
var point_1 = 0;
var point_2 = 0;

let joueur1 = {nom : "joueur1", symbole : "X"};
let joueur2 = {nom: "joueur2", symbole: "O"};

var joueurprincipal = choixJoueurPrincipal();

function choixJoueurPrincipal() //choisi aléatoirement un joueur entre les 2
{
    var listejoueur = [joueur1,joueur2];

    var random = Math.floor(Math.random() * listejoueur.length);//calcule un nbre aléaroire

    //choisi un joueur de la liste avec le nbre du dessus
    return listejoueur[random];
}

function changeJoueurPrincipal() //fct pour chg le joueur principal
{
    joueurprincipal = joueurprincipal === joueur1 ? joueur2 :joueur1; //resultat = conditions ? valeurs si vrai : valeurs si faux
}

cases.forEach(function (tour){ //permet de cocher les cases
   tour.addEventListener('click',function (){
       if (tour.textContent === '') //si la case est vide
       {
           tour.textContent = joueurprincipal.symbole; //ajouter le symbole du joueur
           verifierVictoire(); //on verifie a chaque tour
           changeJoueurPrincipal(); //on change le joueur
       }
   });
});


function updateScore(point1,point2){ //fct pour update le score
    let score1 = document.getElementById('score1'); //on recup le span pour la victoire 1
    let score2 = document.getElementById('score2');

    score1.textContent = String(point1);
    score2.textContent = String(point2);
}

function verifierVictoire() {
    // Définition des combinaisons gagnantes en utilisant les indices des cases
    const combinaisonsGagnantes = [
        [0, 1, 2], // Première ligne
        [3, 4, 5], // Deuxième ligne
        [6, 7, 8], // Troisième ligne
        [0, 3, 6], // Première colonne
        [1, 4, 7], // Deuxième colonne
        [2, 5, 8], // Troisième colonne
        [0, 4, 8], // Diagonale principale
        [2, 4, 6]  // Diagonale secondaire
    ];

    // Vérification de chaque combinaison gagnante
    let victoire = combinaisonsGagnantes.some(combinaison => { //pour chaque liste de la liste combinaisaon gagnante
        return combinaison.every(index => { // Vérifie si toutes les cases de la combinaison contiennent le même symbole
            return cases[index].textContent === joueurprincipal.symbole;
        });
    });

    // Mise à jour du score et affichage si victoire
    if (victoire) { //si victoire vaut true
        if (joueurprincipal === joueur1) {
            point_1++;
        } else {
            point_2++;
        }
        updateScore(point_1, point_2); // Met à jour le score affiché
        alert(`${joueurprincipal.nom} a gagné !`); // Affiche un message de victoire
        restart();
        return; // Sort de la fonction pour éviter de vérifier le match nul
    }

    // Vérifie s'il reste des coups possibles (match nul)
    const estMatchNul = Array.from(cases).every(c => c.textContent !== '');
    if (estMatchNul) {
        alert("Match nul !");
        restart();
    }
}


var bouton = document.getElementById('restart');

bouton.addEventListener('click',restart);

function restart(){
    cases.forEach(function (c){
       c.textContent = "";
    });
}

//implementer le choix entre IA et joueur vs Joueur utiliser l'algo minMax pour l'ia