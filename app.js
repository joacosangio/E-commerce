let tipoPagina

const ecommerce = {
    nombre: "E-commerce",
    precio: 230000,
    tiempo: "Elevado",
    complejidad: "Elevada"

}

const elearning = {
    nombre: "E-learning",
    precio: 210000,
    tiempo: "Elevado",
    complejidad: "Media"
}

const estatica = {
    nombre: "Estática",
    precio: 190000,
    tiempo: "Medio",
    complejidad: "Sencilla"
}



// Ecommerce

const pagina1 = document.getElementById("pagina-1")

const pag = document.createElement("div")

pag.innerHTML = `<h3>${ecommerce.nombre}</h3>
                <p>Precio:$ ${ecommerce.precio}</p>
                <p>Tiempo: ${ecommerce.tiempo}</p>
                <p>Complejidad: ${ecommerce.complejidad}</p>
                <i class="fa-solid fa-cart-shopping">Agregar al carrito</i>`


pagina1.append(pag)

// Elearning
const pagina2 = document.getElementById("pagina-2")

const pag1 = document.createElement("div")

pag1.innerHTML = `<h3>${elearning.nombre}</h3>
                <p>Precio:$ ${elearning.precio}</p>
                <p>Tiempo: ${elearning.tiempo}</p>
                <p>Complejidad: ${elearning.complejidad}</p>
                <i class="fa-solid fa-cart-shopping">Agregar al carrito</i>`


pagina2.append(pag1)

// Estatica
const pagina3 = document.getElementById("pagina-3")

const pag3 = document.createElement("div")

pag3.innerHTML = `<h3>${estatica.nombre}</h3>
                <p>Precio:$ ${estatica.precio}</p>
                <p>Tiempo: ${estatica.tiempo}</p>
                <p>Complejidad: ${estatica.complejidad}</p>
                <i class="fa-solid fa-cart-shopping">Agregar al carrito</i>`


pagina3.append(pag3)



// FUNCIONES

function elegirPagina(){
    do{
        alert("Elige el tipo de pagina que quieres de las siguientes opciones.");
    
        alert("Los tipos de paginas disponibles son los siguientes: E-commerce -- E-learning -- Estática");
    
        tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática." ) );
            if (tipoPagina == 1){
                alert("Usted eligió E-commerce. El precio promedio para una página E-commerce es de: $" + ecommerce.precio );
            }
            else if (tipoPagina == 2){
                alert("Usted eligió E-learning. El precio promedio para una página E-learning es de: $" + elearning.precio );
            }
            else if (tipoPagina == 3){
                alert("Usted eligió Estática. El precio promedio para una página Estática es de: $" + estatica.precio );
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


// elegirPagina();

const btnpres = document.querySelector("#btn-presupuesto")

btnpres.addEventListener("click", elegirPagina)





