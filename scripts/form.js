const nombre = document.querySelector("#input-nombre")
const apellido = document.querySelector("#input-apellido")
const dni = document.querySelector("#input-dni")
const nacionalidad = document.querySelector("#input-nacionalidad")
const email = document.querySelector("#input-email")
const telefono = document.querySelector("#input-telefono")
const btnEnviar = document.querySelector("#btn-cliente")
const arrayDatos = []



btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    if(nombre.value == "" || apellido.value == "" || dni.value == "" || nacionalidad.value == "" || email.value == "" || telefono.value == ""){
        Swal.fire({
            icon: 'error',
            iconColor: "#000",
            color: "#fff",
            confirmButtonColor: "#000",
            background: "#ff7c00",
            title: '=(',
            text: 'Debes completar todos los campos!',
            timer: 2500,
            timerProgressBar: true,
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
            icon: "success",
            iconColor: "#000",
            color: "#fff",
            confirmButtonColor: "#000",
            background: "#ff7c00",
            title: "Bienvenido",
            text: "Ya eres uno de nuestros clientes!",
            timer: 2500,
            timerProgressBar: true,
        })
    }
})