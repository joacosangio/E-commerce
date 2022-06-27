const listaClientes = []

const btncliente = document.querySelector ("#btn-cliente")

btncliente.addEventListener ("click", crearCliente)


function Cliente(nombre, apellido, dni, nacionalidad, email, telefono, ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nacionalidad = nacionalidad;
    this.email = email;
    this.telfono = telefono;
}

function crearCliente(){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let dni = Number( prompt ("Ingrese su DNI") );
    let nacionalidad = prompt("Ingrese su nacionalidad");
    let email = prompt("Ingrese su email");
    let telefono = Number ( prompt ("Ingrese su telefono") );
    
    listaClientes.push (new Cliente(nombre, apellido, dni, nacionalidad, email, telefono))
    console.log("La cantidad de clientes es: " + listaClientes.length);
    for (let i = 0; i <listaClientes.length; i++){
        console.log ("Los clientes son los siguientes: " + listaClientes[i]);
}


    const cliente = new Cliente(nombre, apellido, dni, nacionalidad, email, telefono);
    return cliente;
}

function eliminarCliente(){
    let dejarDeSerCliente = prompt("¿Usted desea dejar de ser nuestro cliente?");
    if (dejarDeSerCliente === "Si"){
        prompt("¿Podrias comentarnos el por qué? Nos ayudaria mucho para mejorar!");
    }
    else if (dejarDeSerCliente == "No"){
        alert("Gracias por seguir confiando en nosotros!");
    }
    else{
        alert("Respuesta invalida ¿Que desea hacer?");
    }
    dejarDeSerCliente = prompt("¿Usted desea dejar de ser nuestro cliente?");
    listaClientes.shift ()
}


