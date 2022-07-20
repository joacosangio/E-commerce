const nombre = document.querySelector("#input-nombre")
const apellido = document.querySelector("#input-apellido")
const dni = document.querySelector("#input-dni")
const nacionalidad = document.querySelector("#input-nacionalidad")
const email = document.querySelector("#input-email")
const telefono = document.querySelector("#input-telefono")
const btnEnviar = document.querySelector("#btn-cliente")
const arrayDatos = []
const alerta = document.querySelector("#alerta-form")

const formContacto = () => {
    if(nombre.value == "" || apellido.value == "" || dni.value == "" || nacionalidad.value == "" || email.value == "" || telefono.value == ""){
        alert("Completar todos los campos para seguir")
    }
    else{
        arrayDatos.push(nombre, apellido, dni, nacionalidad, email, telefono)
        console.log(nombre.value, apellido.value, dni.value, nacionalidad.value, email.value, telefono.value)
        localStorage.setItem(nombre.value, apellido.value, dni.value, nacionalidad.value, email.value, telefono.value)
        console.log(localStorage)
        nombre.value = ""
        apellido.value = ""
        dni.value = ""
        nacionalidad.value = ""
        email.value = ""
        telefono.value = ""
        setTimeout( () => {
            alerta.innerHTML = `
            <h3>Formulario enviado!</h3>`
        },)
        setTimeout( () => {
            alerta.innerHTML = ``
        }, 5000 )
    }
}