var cases = document.querySelectorAll("td");
var point_1 = 0;
var point_2 = 0;

let joueur1 = {nom : "joueur1", symbole : "X"};
let joueur2 = {nom: "joueur2", symbole: "O"};
var joueurprincipal = choixJoueurPrincipal();

function choixJoueurPrincipal()
{
    var listejoueur = [joueur1,joueur2];

    var random = Math.floor(Math.random() * listejoueur.length);//calcule un nbre aléaroire

    //choisi un joueur de la liste avec le nbre du dessus
    return listejoueur[random];
}

function changeJoueurPrincipal()
{
    joueurprincipal = joueurprincipal === joueur1 ? joueur2 :joueur1; //resultat = conditions ? valeurs si vrai : valeurs si faux
}

cases.forEach(function (tour){
   tour.addEventListener('click',function (){
       if (tour.textContent === '')
       {
           tour.textContent = joueurprincipal.symbole;
           verifierVictoire();
           changeJoueurPrincipal();
       }
   });
});


function updateScore(point1,point2){
    let score1 = document.getElementById('score1');
    let score2 = document.getElementById('score2');

    score1.textContent = String(point1);
    score2.textContent = String(point2);
}

function verifierVictoire(){

    updateScore(point_1,point_2);
}

var bouton = document.getElementById('restart');

bouton.addEventListener('click',restart);

function restart(){
    cases.forEach(function (c){
       c.textContent = "";
    });
}