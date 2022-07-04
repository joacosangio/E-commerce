let tipoPagina



class Pagina {
    constructor(nombre, precio, tiempo, complejidad){
        this.nombre = nombre;
        this.precio = precio;
        this.tiempo= tiempo;
        this.complejidad = complejidad;
    }
    }

const paginasContainer = document.querySelector("#pag-disponibles")
const ecommerce = new Pagina("E-commerce", 230000, "Elevado", "Elevada")
const elearning = new Pagina("E-learning", 210000, "Elevado", "Media")
const estatica = new Pagina("Estática", 190000, "Medio", "Sencilla")

const arrayPaginas = [ecommerce, elearning, estatica]


arrayPaginas.forEach((item) => {
    const div = document.createElement("div")
    div.classList.add("pagina-presupuesto")

    div.innerHTML = `<h3>${item.nombre}</h3>
                    <p>Precio:$ ${item.precio}</p>
                    <p>Tiempo: ${item.tiempo}</p>
                    <p>Complejidad: ${item.complejidad}</p>
                    <p>Agregar al carrito</p>
                    <button class="btn-agregar"><i class="fa-solid fa-cart-shopping"></i></button>
                    `
    paginasContainer.append(div)
})

// FUNCIONES

// function elegirPagina(){
//     do{
//         alert("Elige el tipo de pagina que quieres de las siguientes opciones.");
    
//         alert("Los tipos de paginas disponibles son los siguientes: E-commerce -- E-learning -- Estática");
    
//         tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática." ) );
//             if (tipoPagina == 1){
//                 alert("Usted eligió E-commerce. El precio promedio para una página E-commerce es de: $" + ecommerce.precio );
//             }
//             else if (tipoPagina == 2){
//                 alert("Usted eligió E-learning. El precio promedio para una página E-learning es de: $" + elearning.precio );
//             }
//             else if (tipoPagina == 3){
//                 alert("Usted eligió Estática. El precio promedio para una página Estática es de: $" + estatica.precio );
//             }
//             else{
//                 alert ("La respuesta es invalida. Vuelva a ingresar una opción");
//             }
        
//         alert("Elige el tipo de pagina que quieres de las siguientes opciones.");

//         alert("Los tipos de paginas disponibles son los siguientes: E-commerce -- E-learning -- Estática");

//         tipoPagina = Number ( prompt ( "Escribe 1 = E-commerce, 2 = E-learning y 3 = Estática." ) ); 
        
//         }while(tipoPagina != 1 && tipoPagina != 2 && tipoPagina !=3){
//         }
// }


// FUNCIONES


// elegirPagina();

// const btnpres = document.querySelector("#btn-presupuesto")

// btnpres.addEventListener("click", elegirPagina)


// ----------------------------MODAL---------------------------

const modalCont = document.querySelector("#modal-cont")
const openModal = document.querySelector("#carrito")
const closeModal = document.querySelector("#close-carrito")

openModal.addEventListener("click", () => {
    modalCont.classList.add("modal-cont--abierto")
})

closeModal.addEventListener("click", () => {
    modalCont.classList.remove("modal-cont--abierto")
})




