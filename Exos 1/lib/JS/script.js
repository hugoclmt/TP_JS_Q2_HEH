var nbre = 0;

function change_source(image) {
    nbre++;
    if(nbre % 2 === 0){
        image.src = './lib/img/alex.png'; //mettre la source en rapport avec le fichier index.html
    }
    else{
        image.src = './lib/img/luca.png';
    }
}

//J'aurai pu utilisé endsWidths afin de tester la fin de la chaine de l'image et verifier qu'elle vaut soit alex.png ou luca.png