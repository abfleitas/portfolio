let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = false;
    }
}

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}