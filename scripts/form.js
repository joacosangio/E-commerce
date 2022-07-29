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
        registro()
        
    }
})


function registro() {
    
    let userNombre = []
    let userApellido = []
    let userDni = []
    let userNacionalidad = []
    let userEmail = []
    let userTelefono = []

    userNombre.push(nombre.value)
    userApellido.push(apellido.value)
    userDni.push(dni.value)
    userNacionalidad.push(nacionalidad.value)
    userEmail.push(email.value)
    userTelefono.push(telefono.value)

    localStorage.setItem("Nombre del usuario:", userNombre)
    localStorage.setItem("Apellido del usuario:", userApellido)
    localStorage.setItem("DNI del usuario:", userDni)
    localStorage.setItem("Nacionalidad del usuario:", userNacionalidad)
    localStorage.setItem("Email del usuario:", userEmail)
    localStorage.setItem("Telefono del usuario:", userTelefono)
    Swal.fire({
        icon: "success",
        iconText: "=)",
        iconColor: "#000",
        color: "#fff",
        confirmButtonColor: "#000",
        background: "#ff7c00",
        title: `Bienvenido ${userNombre}`,
        text: "Ya eres uno de nuestros clientes!",
        text: "Gracias! ",
        timer: 2500,
        timerProgressBar: true,
    })

    nombre.value= ""
    apellido.value= ""
    dni.value= ""
    nacionalidad.value= ""
    email.value= ""
    telefono.value= ""
    
}