
// let precioHora = 1520

let precioEcommerce = 210000
let precioElearning = 210000
let precioEstatica = 190000

// FUNCIONES
function elegirPagina(){
    alert("Elige el tipo de pagina que quieres de las siguientes opciones.")

    alert("Los tipos de paginas disponibles son los siguientes: E-commerce -- E-learning -- Estática")

    let tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática. Para salir presione ESC" ) )

    while (tipoPagina != "ESC"){

        if (tipoPagina == 1){
            alert("Usted eligió E-commerce. El precio promedio para una página E-commerce es de: $" + precioEcommerce )
        }
        else if (tipoPagina == 2){
            alert("Usted eligió E-learning. El precio promedio para una página E-learning es de: $" + precioElearning )
        }
        else if (tipoPagina == 3){
            alert("Usted eligió Estática. El precio promedio para una página Estática es de: $" + precioEstatica )
        }
        else{
            alert ("La respuesta es invalida. Vuelva a ingresar una opción")
        }
        tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática. Para salir presione ESC" ) )

    }


}

function Cliente(nombre, apellido, dni, nacionalidad, email, telefono, ){
    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
    this.nacionalidad = nacionalidad
    this.email = email
    this.telfono = telefono
    
    
}

function crearCliente(){
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    let dni = Number( prompt ("Ingrese su DNI") )
    let nacionalidad = prompt("Ingrese su nacionalidad")
    let email = prompt("Ingrese su email")
    let telefono = Number ( prompt ("Ingrese su telefono") )
    

    const cliente = new Cliente(nombre, apellido, dni, nacionalidad, email, telefono)
    return cliente
}
// FUNCIONES


crearCliente()
console.log(cliente)

elegirPagina()






