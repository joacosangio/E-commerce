
// let precioHora = 1520

let precioEcommerce = 210000;
let precioElearning = 210000;
let precioEstatica = 190000;

const listaClientes = [

];




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

    const cliente = new Cliente(nombre, apellido, dni, nacionalidad, email, telefono);
    return cliente;
    
}

const cliente1 = crearCliente()
const cliente2 = crearCliente()



console.log(cliente1)
console.log(cliente2)
console.log(listaClientes);



function elegirPagina(){
    alert("Elige el tipo de pagina que quieres de las siguientes opciones.");

    alert("Los tipos de paginas disponibles son los siguientes: E-commerce -- E-learning -- Estática");

    let tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática. Para salir presione ESC" ) );

    while (tipoPagina != "ESC"){

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
        tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática. Para salir presione ESC" ) );

    }
}

// FUNCIONES







// console.log("La cantidad de clientes es: " + listaClientes.length);
// for (let i = 0; i <listaClientes.length; i++){
//     console.log ("Los clientes son los siguientes: " + listaClientes[i]);
// }

elegirPagina();






