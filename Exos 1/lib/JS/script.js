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

