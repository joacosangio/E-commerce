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
                    <button class="btn-agregar"><i class="fa-solid fa-cart-shopping"></i></button>
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
const productosContainer = document.querySelector("#productos-cont")
const agregarProducto = document.getElementsByClassName("btn-agregar")

console.log(agregarProducto)


for(let i = 0 ; i < agregarProducto.length ; i++){
    
    agregarProducto[i].addEventListener("click", (e) => {
        e.preventDefault()

        const productoCarrito = document.createElement("div")
        productoCarrito.classList.add("producto-carrito")
    
        productoCarrito.innerHTML = `<h4>${this.nombre}</h4>
                                    <p>Precio $:${this.precio}</p>
                                    <button class = "eliminar-prod">X</button>`
        productosContainer.append(productoCarrito)
    
        Toastify({
            text: `Tu producto ${this.nombre} se agregó correctamente`,
            duration: 2500,
            style: {
                color: "#000",
                border: "solid 2px #fff",
                background: "#ff7c00",
            }
        }).showToast();
    }) 
}

// const eliminarProd = document.getElementsByClassName("eliminar-prod")


// for(let i = 0 ; i < eliminarProd.length ; i++){

//     eliminarProd[i].addEventListener("click", (e) => {
//         e.preventDefault();
//         productosContainer.remove(productoCarrito)
    
//     })
// }

// aca intente una funcion para remover los objetos del carrito