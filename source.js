let menuVisible = false;
//Funcion que oculta/muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList= '';
        menuVisible= false;
    }else {
        document.getElementById('nav').classList= 'responsive';
        menuVisible = true;
    }
}

//oculto el menu una vez que se selecciono una opcion 
function seleccionar(){
    document.getElementById('nav').classList="";
    menuVisible = false;
}
//Funcion que muestras las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName('progreso');
        habilidades[0].classList.add('javascript');
        habilidades[1].classList.add('htmlcss');
        habilidades[2].classList.add('java');
        habilidades[3].classList.add('spring');
        habilidades[4].classList.add('mysql');
        habilidades[5].classList.add('comunicacion');
        habilidades[6].classList.add('trabajo');
        habilidades[7].classList.add('creatividad');
        habilidades[8].classList.add('dedicacion');
        habilidades[9].classList.add('proactividad');
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
