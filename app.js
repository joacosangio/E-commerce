let tipoPagina

ecommerce = {
    precio: 230000,
    tiempo: "Elevado",
    complejidad: "Elevada"

}

elearning = {
    precio: 210000,
    tiempo: "Elevado",
    complejidad: "Media"
}

estatica = {
    precio: 190000,
    tiempo: "Medio",
    complejidad: "Sencilla"
}

const listaClientes = []





// FUNCIONES

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

const cliente1 = crearCliente()


console.log(cliente1)


// Esta funcion no la muestro todavia porque quiero que sea tocar un boton. Ya que, no deberia preguntarle al usuario asi por que si
// Averiguar como se hace por ID
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
    // ¿Que deberia ir entre los parentesis de shift?
}


function elegirPagina(){
    do{
        alert("Elige el tipo de pagina que quieres de las siguientes opciones.");
    
        alert("Los tipos de paginas disponibles son los siguientes: E-commerce -- E-learning -- Estática");
    
        tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática." ) );
            if (tipoPagina == 1){
                alert("Usted eligió E-commerce. El precio promedio para una página E-commerce es de: $" + precioEcommerce );
            }
            else if (tipoPagina == 2){
                alert("Usted eligió E-learning. El precio promedio para una página E-learning es de: $" + precioElearning );
            }
            else if (tipoPagina == 3){
                alert("Usted eligió Estática. El precio promedio para una página Estática es de: $" + precioEstatica );
            }
            else{
                alert ("La respuesta es invalida. Vuelva a ingresar una opción");
            }
        
        alert("Elige el tipo de pagina que quieres de las siguientes opciones.");

        alert("Los tipos de paginas disponibles son los siguientes: E-commerce -- E-learning -- Estática");

        tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática." ) ); 
        
        }while(tipoPagina != 1 && tipoPagina != 2 && tipoPagina !=3){
        }
}


// FUNCIONES


elegirPagina();










