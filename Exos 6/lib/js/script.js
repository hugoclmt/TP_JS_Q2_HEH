//partie 1
const radios = document.getElementsByClassName('inputchoix'); //on recup tout les éléments de la classe inputchoix = btn radios
const supplements = document.getElementsByClassName('enfantsupp'); //on recup tout les éléments de la classe enfantsupp = div des elements checkbox supplements
const checkboxs = document.getElementsByClassName('supplements');// on recup tout les checkbox

function affichagetoggle(display) { //fct qui sert a afficher ou non les elements
    Array.from(supplements).forEach(function (supplement) { //on ajoute dans le tableau les supplements et on les parcours
        supplement.style.display = display; //on affiche ce qu'on a envoyé comme argument dans la fct
    });
}

function decochageCheckbox(){ //on decoche les flexbox qu'on a coché si on choisi sans supplements
    Array.from(checkboxs).forEach(function (checkbox){
        checkbox.checked = false;
    });
}

Array.from(radios).forEach(function (radio){ // pour chaque bouton radio
   radio.addEventListener('click',function (){ //on verif si on appyuie dessus
       if (radio.id === 'sans') //si c le btn avce l'id sans
       {
           affichagetoggle('none'); // on affiche pas
           decochageCheckbox();
       }else{

           affichagetoggle('flex');
       }
   });
});


//partie 2
var prix = document.getElementById('prix'); //on recup l'element avec l'id prix
const pizza = {"a" : 8,"b" : 10,"c" : 12}; //on crée un tableau associatif avec les pizzas et leur prix
var total = 0; //on initialise le total a 0


function updateTotal(prix_pizza,frais = 0,supplement = 0){ //fct qui sert a mettre a jour le total
    total = prix_pizza + frais + supplement; //on met a jour le total
    prix.textContent = String(total) + "€"; //on affiche le total
}



( function (){ //fonction auto executante
    var select = document.getElementById('choixpizza'); //on recup l'element avec l'id choixpizza
    var prixpizza = 0; //on initialise le prix de la pizza a 0
    select.addEventListener('change',function (){ //on verif si on change de pizza
        decochageCheckbox(); //on decoche les checkbox
        let pizzachoisi  = select.value; //on recup la valeur de la pizza choisi
        if (pizza.hasOwnProperty(pizzachoisi)) //on verif si la pizza choisi est dans le tableau associatif
        {
            prixpizza = pizza[pizzachoisi] //on recup le prix de la pizza choisi
            updateTotal(prixpizza) //on met a jour le total
        }
    });
    var frais = 0; //on initialise les frais a 0
    var modepayements = document.getElementsByClassName('modepayement'); //on recup tout les elements de la classe modepayement
    Array.from(modepayements).forEach(function (modepayement){ //on parcours les elements
        modepayement.addEventListener('change',function (){ // ajoutez un écouteur d'événements
            if (modepayement.id === 'visa'){
                frais = 2; //on ajoute 2€ de frais si on choisi visa
                updateTotal(prixpizza,supp,frais); //on met a jour le total
            }
            else{
                frais = 0; //sinon on met les frais a 0
                updateTotal(prixpizza,supp,frais); //on met a jour le total
            }
        });
    });
    var supp = 0 //on initialise les supplements a 0
    Array.from(checkboxs).forEach(function (checkbox){ //on parcours les checkbox
        checkbox.addEventListener('click',function () { // ajoutez un écouteur d'événements
            var nbre = Array.from(checkboxs).filter(c => c.checked).length; //on recup le nombre de checkbox coché
            supp = nbre * 0.5; //on multiplie le nombre de checkbox coché par 0.5
            updateTotal(prixpizza,frais,supp); //on met a jour le total
        });
    });


}) ();


