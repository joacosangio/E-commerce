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
    const divProducto = document.createElement("div")
    divProducto.classList.add("pagina-presupuesto")

    divProducto.innerHTML = `<h3>${item.nombre}</h3>
                    <p>Precio:$ ${item.precio}</p>
                    <p>Tiempo: ${item.tiempo}</p>
                    <p>Complejidad: ${item.complejidad}</p>
                    <p>Agregar al carrito</p>
                    <button onclick= "opemModal" class="btn-agregar"><i class="fa-solid fa-cart-shopping"></i></button>
                    `
    paginasContainer.append(divProducto)
})



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

//----------------------------PRODUCTOS EN EL CARRITO-------------------

const carrito = []
const productosContainer = document.querySelector("#productos-carrito")
const agregarProducto = document.querySelector("btn-agregar")
 

const productoCarrito = document.createElement("div")

agregarProducto.addEventListener("click", () => {
    productoCarrito.classList.add("producto-carrito")
    const productoCarrito = document.createElement("div")

    productoCarrito.innerHTML = `<h4>Página: ${item.nombre}</h4>
                                <p>Precio: $${item.precio}</p>`
    productosContainer.add(productoCarrito)
}) 

console.log (productoCarrito)
console.log (productosContainer)
// Esto no se porque no funciona. Cambie los ID por clases y nada
// Y tambien acá es donde deberia hacer lo que me comentas sobre el modal que esta siempre
// oculto y una funcion lo muestra. Puedo empezar aca abajo a hacerlo como creo que seria


function carritoAbierto() {
    agregarProducto.addEventListener("click", () => {
    })
}
// Aca no entiendo que poner en la funcion. Porque yo lo que quiero es que cuando hago click en el boton, ese elemento se vaya al carrito



function carritoCerrado() {

}

// No se muy bien si tengo que modificar el modal que ya tengo hecho para realizar estas funciones o tengo que plantear el modal de otra manera