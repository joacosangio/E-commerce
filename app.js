// Aca van a ir los datos ya planteados para el programa


// let precioHora = 1520

let precioEcommerce = 210000
let precioElearning = 210000
let precioEstatica = 190000

// Estas serian las declaraciones de las variables para la funcion elegriSkills()
let incluirJs = ""
let incluirScss = ""
let incluirReact = ""
let incluirNodeJs = ""


// Aca voy a definir las funciones del programa en base a los datos del usuario y los ya planteados



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

elegirPagina()






