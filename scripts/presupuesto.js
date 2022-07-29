class Pagina {
    constructor(id, nombre, precio, tiempo, complejidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tiempo= tiempo;
        this.complejidad = complejidad;
    }
    }

const paginasContainer = document.querySelector("#pag-disponibles")
const ecommerce = new Pagina(0, "E-commerce", 230000, "Elevado", "Elevada")
const elearning = new Pagina(1, "E-learning", 210000, "Elevado", "Media")
const estatica = new Pagina(2, "Estática", 190000, "Medio", "Sencilla")

const arrayPaginas = [ecommerce, elearning, estatica]


arrayPaginas.forEach((item) => {
    const divProducto = document.createElement("div")
    divProducto.classList.add("pagina-presupuesto")

    divProducto.innerHTML = `<h3>${item.nombre}</h3>
                    <p>Precio:$ ${item.precio}</p>
                    <p>Tiempo: ${item.tiempo}</p>
                    <p>Complejidad: ${item.complejidad}</p>
                    <p>Agregar al carrito</p>
                    <button id = "producto-${item.id}" class="btn-agregar"><i id = "producto-${item.id}"  class="fa-solid fa-cart-shopping"></i></button>
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
const carritoParaEliminar = []
const productosContainer = document.querySelector("#productos-cont")
const agregarProducto = document.getElementsByClassName("btn-agregar")





for(let i = 0 ; i < agregarProducto.length ; i++){
    
    agregarProducto[i].addEventListener("click", (e) => {

        let idProd = Number(e.target.id.split("-")[1])

        const producto = buscarProducto(idProd)

        const productoCarrito = document.createElement("div")
        productoCarrito.classList.add("producto-carrito")
    
        productoCarrito.innerHTML = `<h4>${producto.nombre}</h4>
                                    <p>Precio $:${producto.precio}</p>
                                    <button onclick="eliminarDelCarrito()" class = "eliminar-prod">X</button>`
        productosContainer.append(productoCarrito)
        carrito.push(producto.precio)
        carritoParaEliminar.push(productoCarrito)
        console.log(carritoParaEliminar)

        calcularTotal()
    
        Toastify({
            text: `Tu producto ${producto.nombre} se agregó correctamente`,
            duration: 2500,
            style: {
                color: "#000",
                border: "solid 2px #fff",
                background: "#ff7c00",
            }
        }).showToast();
    }) 
}

const buscarProducto = (idProd) => {
    const prod = arrayPaginas.filter (identificador => identificador.id == idProd)
    return prod [0]
}

const precioTotal = document.querySelector("#precioTotal")

const calcularTotal = () => {
    let total = 0;

    carrito.forEach((precio) => {

        total += precio
    })

    precioTotal.innerText = total
}

const eliminarDelCarrito = (id) => {
    
    const ite = carritoParaEliminar.find((producto) => producto.id === id)
    const indice = carritoParaEliminar.indexOf(ite)
    carritoParaEliminar.splice(indice, 1)
    console.log(carritoParaEliminar)
    
    buscarProducto()

    // let className = id.className.split("")
    // console.log(className)
    // buscarProducto(productosContainer)
    // calcularTotal()
    

}

// Tengo que averiguar como hacer para que esto se refleje visualmente

