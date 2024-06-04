let animadoIzquierda = document.querySelectorAll(".animadoIzquierda");
let animadoDerecha = document.querySelectorAll(".animadoDerecha");

const botonArriba = document.querySelector("#ir_arriba");
const pixelesAlInicio = () => document.documentElement.scrollTop || document.body.scrollTop

function mostrarSection(){
    let scrollTop = document.documentElement.scrollTop;

    for(let i=0; i<animadoIzquierda.length; i++){
        let alturaAnimado = animadoIzquierda[i].offsetTop;
        if(alturaAnimado - 400 < scrollTop){
            animadoIzquierda[i].style.opacity = 1;
            animadoIzquierda[i].classList.add("mostrarIzquierda");
        }
    }
    for(let i=0; i<animadoDerecha.length; i++){
        let alturaAnimado = animadoDerecha[i].offsetTop;
        if(alturaAnimado - 400 < scrollTop){
            animadoDerecha[i].style.opacity = 1;
            animadoDerecha[i].classList.add("mostrarDerecha");
        }
    }
}

function irArriba(){
    if(pixelesAlInicio() > 0){
        scrollTo(0, 0);
    }
}

function mostrarBoton(){
    if(pixelesAlInicio() > 500){
        botonArriba.className = "mostrar";
    } else {
        botonArriba.className = "ocultar";
    }
}

window.addEventListener("scroll", mostrarSection);
botonArriba.addEventListener("click", irArriba);
window.addEventListener("scroll", mostrarBoton);