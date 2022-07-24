const nombre = document.querySelector("#input-nombre")
const apellido = document.querySelector("#input-apellido")
const dni = document.querySelector("#input-dni")
const nacionalidad = document.querySelector("#input-nacionalidad")
const email = document.querySelector("#input-email")
const telefono = document.querySelector("#input-telefono")
const btnEnviar = document.querySelector("#btn-cliente")
const arrayDatos = []

btnEnviar.addEventListener("click", () => {
    if(nombre.value == "" || apellido.value == "" || dni.value == "" || nacionalidad.value == "" || email.value == "" || telefono.value == ""){
        Swal.fire({
            icon: 'error',
            iconColor:"#ff7c00;",
            background: "#000",
            color: "#fff",
            title: 'Oops...',
            text: 'Debes completar todos los campos!',
            timer: 2000,
          })
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
        Swal.fire({
            iconColor:"#ff7c00;",
            background: "#000",
            color: "#fff",
            icon: "success",
            title: "Bienvenido",
            text: "Ya eres uno de nuestros clientes!",
            timer: 2000,
            timerProgressBar: true,
        })
    }
})