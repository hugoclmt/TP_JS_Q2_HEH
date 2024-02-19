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
var prix = document.getElementById('prix');
const pizza = {"a" : 8,"b" : 10,"c" : 12};
var total = 0;


function updateTotal(prix_pizza,frais = 0,supplement = 0){
    total = prix_pizza + frais + supplement;
    prix.textContent = String(total) + "€";
}



( function (){
    var select = document.getElementById('choixpizza');
    var prixpizza = 0;
    select.addEventListener('change',function (){
        decochageCheckbox();
        let pizzachoisi  = select.value;
        if (pizza.hasOwnProperty(pizzachoisi))
        {
            prixpizza = pizza[pizzachoisi]
            updateTotal(prixpizza)
        }
    });
    var frais = 0;
    var modepayements = document.getElementsByClassName('modepayement');
    Array.from(modepayements).forEach(function (modepayement){
        modepayement.addEventListener('change',function (){ //trouvez le bon element
            if (modepayement.id === 'visa'){
                frais = 2;
                updateTotal(prixpizza,supp,frais);
            }
            else{
                frais = 0;
                updateTotal(prixpizza,supp,frais);
            }
        });
    });
    var supp = 0
    Array.from(checkboxs).forEach(function (checkbox){
        checkbox.addEventListener('click',function () {
            var nbre = Array.from(checkboxs).filter(c => c.checked).length;
            supp = nbre * 0.5;
            updateTotal(prixpizza,frais,supp);
        });
    });


}) ();


