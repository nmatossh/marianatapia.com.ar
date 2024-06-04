const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#formulario .input-oblig');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    email: false,
    asunto: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`campo-${campo}`).classList.remove('input-oblig-incorrecto');
        document.getElementById(`campo-${campo}`).classList.add('input-oblig-correcto');
        document.querySelector(`#campo-${campo} .texto-error`).classList.remove('texto-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`campo-${campo}`).classList.add('input-oblig-correcto');
        document.getElementById(`campo-${campo}`).classList.remove('input-oblig-incorrecto');
        document.querySelector(`#campo-${campo} .texto-error`).classList.add('texto-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

// Codigo para Estetica del Alert

function mostrarAlert(){
    swal({
        title: 'Enviado',
        text: 'Su consulta ha sido enviada con exito. En breve me pondre en contacto con usted. Muchas gracias',
        icon: 'success'
    });
}

// Codigo para consumir la API del formulario

// const $form = document.querySelector("#formulario")

// $form.addEventListener("submit", handleSubmit)

// async function handleSubmit(event){
//     event.preventDefault()
//     const form = new FormData(this)
//     const response = await fetch(this.action, {
//         method: this.method,
//         body: form,
//         headers: {
//             "Accept": "application/json"
//         }
//     })
//     if(response.ok){
//         mostrarAlert();
//     }
// }