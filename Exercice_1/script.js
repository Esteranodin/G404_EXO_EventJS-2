const imageHover = document.querySelector('#image1')
console.log(imageHover);

imageHover.addEventListener('mouseenter', handleMouseEnter);

function handleMouseEnter(event) {
    const imgTag = event.target;
    imgTag.style.border = '3px, solid, red';
};

imageHover.addEventListener('mouseleave', handleMouseLeave);

function handleMouseLeave(event) {
    const imgTag = event.target;
    imgTag.style.border = 'none';
};

// nom fonction aurait pu être handleMouseEnterAddBorder

// console log un event donne plein plein d'infos notamment la target, pour savoir l'élément html qui déclenche l'évènement + on peut le nommer comme on veut comme e par exemple, toujours en premier paramètre

// ici pour premier exo et decouvert c'est ok de mettre du style ds js mais mauvaise pratique ! css dans une feuille de style css ! et l'évènement est d'appliquer un css en ajoutant une classe (VS le créer ds js)

// .target permet de faire une méthode "scalable" = tout aussi valable pour une image que pour plusieurs VS si on avait appliquer l'evenement  à notre selceteur entier ==> si jamais on developpe et qu'on ajoute d'autre images, c'est bien celle qui declenche l'evenement (ici, celle où on passe la souris) qui a l'application de l'évènement.

// on aurait pu utiliser toggle = qui ajoute si il y a rien et enlève si il y quelque chose avec true ou false