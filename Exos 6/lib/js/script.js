var radios = document.getElementsByClassName('inputchoix'); //on recup tout les éléments de la classe inputchoix = btn radios
var supplements = document.getElementsByClassName('enfantsupp'); //on recup tout les éléments de la classe enfantsupp = div des elements checkbox supplements
var checkboxs = document.getElementsByClassName('supplements');// on recup tout les checkbox

function affichagetoggle(display) { //fct qui sert a afficher ou non les elements
    Array.from(supplements).forEach(function (supplement) { //on ajoute dans le tableau les supplements et on les parcours
        supplement.style.display = display; //on affiche ce qu'on a envoyé comme argument dans la fct
    });
}

function decocacheCheckbox(){ //on decoche les flexbox qu'on a coché si on choisi sans supplements
    Array.from(checkboxs).forEach(function (checkbox){
        checkbox.checked = false;
    })
}



Array.from(radios).forEach(function (radio){ // pour chaque bouton radio
   radio.addEventListener('click',function (){ //on verif si on appyuie dessus
       if (radio.id === 'sans') //si c le btn avce l'id sans
       {
           affichagetoggle('none'); // on affiche pas
           decocacheCheckbox();
       }else{

           affichagetoggle('flex');
       }
   })
});


