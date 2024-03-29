

// --------------------MODAL---------------------------

const modalCont = document.querySelector("#modal-cont")
const openModal = document.querySelector("#carrito")
const closeModal = document.querySelector("#close-carrito")

openModal.addEventListener("click", () => {
    modalCont.classList.add("modal-cont--abierto")
})

closeModal.addEventListener("click", () => {
    modalCont.classList.remove("modal-cont--abierto")
})
// --------------------MODAL---------------------------


// --------------------SERVICIOS-----------------------

let stockServicios = []

fetch('../stock.json')
    .then((resp) => resp.json())
    .then((info) => {
        
        stockServicios = info
    
        stockServicios.forEach(item => {
            const serviciosContainer = document.querySelector("#pag-disponibles")
            const servicio = document.createElement("div")
        
            servicio.classList.add("pagina-presupuesto")
            servicio.innerHTML = `<h3 class="animate__animated animate__fadeInDown animate__delay-0.8s">${item.nombre}</h3>
                                <p><strong>Precio:$</strong> ${item.precio}</p>
                                <p><strong>Tiempo:</strong> ${item.tiempo}</p>
                                <p><strong>Complejidad:</strong> ${item.complejidad}</p>
                                <p>Agregar al carrito</p>
                                <div>
                                <button onclick="agregarAlCarrito(${item.id})" class="btn-agregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                <button onclick="mostrarInfo(${item.id})" class="btn-informacion"><i class="fa-solid fa-circle-question"></i></button>
                                </div>`
        
            serviciosContainer.append(servicio)
        })
    })


// --------------------SERVICIOS-----------------------

// --------------------CARRITO-------------------------
let carritoDeServicios = [0]
const contenederDeServicios = document.querySelector("#productos-cont")

function agregarAlCarrito(id) {

    const itemParaAgregar = stockServicios.find( (servicio) => servicio.id === id )
    carritoDeServicios.push(itemParaAgregar)

    renderizarCarrito()
    calcularPrecioTotal()

    Toastify({
        text: `Tu producto ${itemParaAgregar.nombre} se agregó correctamente`,
        duration: 2500,
        style: {
            color: "#000",
            border: "solid 2px #fff",
            background: "#ff7c00",
            borderRadius: "20px",
        }
    }).showToast();

}

const renderizarCarrito = () => {

    contenederDeServicios.innerHTML = ``

    carritoDeServicios.forEach((item) => {
        const servicioVisual = document.createElement("div")
        servicioVisual.classList.add("producto-carrito")
        servicioVisual.innerHTML = `<h4>${item.nombre}</h4>
                                    <p>Precio $:${item.precio}</p>
                                    <button onclick="eliminarServicio(${item.id})" class = "eliminar-prod">X</button>`


        contenederDeServicios.append(servicioVisual)
    })
}

// ----------------CALCULAR TOTAL----------------------
const precioTotal = document.querySelector("#precioTotal")

function calcularPrecioTotal() {

    let total = 0
    
    carritoDeServicios.forEach((servicio) => {
        total += servicio.precio
    })
    
    precioTotal.innerText = total
    
}
// ----------------CALCULAR TOTAL----------------------

function eliminarServicio(id){
    const itemParaEliminar = carritoDeServicios.find((servicio) => servicio.id === id)
    const indiceServicio = carritoDeServicios.indexOf(itemParaEliminar)
    carritoDeServicios.splice(indiceServicio, 1)

    renderizarCarrito()
    calcularPrecioTotal()

    Toastify({
        text: `Tu servicio de ${itemParaEliminar.nombre} fue eliminado`,
        duration: 2500,
        style: {
            color: "#000",
            border: "solid 2px #fff",
            background: "#ff7c00",
            borderRadius: "20px",
        }
    }).showToast();
}
    

const btnVaciarCarrito = document.querySelector("#vaciar-carrito")

function vaciarCarrito () {

    carritoDeServicios = []
    renderizarCarrito()
    calcularPrecioTotal()

    Toastify({
        text: `Carrito vaciado =(`,
        duration: 2500,
        style: {
            color: "#000",
            border: "solid 2px #fff",
            background: "#ff7c00",
            borderRadius: "20px",
        }
    }).showToast();

}

btnVaciarCarrito.addEventListener("click", vaciarCarrito)


function mostrarInfo(id) {
    
    const serv = stockServicios.find((serv) => serv.id === id)
    
        Swal.fire( {
            icon: "info",
            title: `¿Que es una página "${serv.nombre}" ?`,
            text: `${serv.descripcion}`,
            showCloseButton: true,
                  color: "#fff",
                  background: "#000",
                  allowEscapeKey: true,
                  allowEnterKey: true,
            iconColor: "#ff7c00",
            confirmButtonColor: "#ff7c00",
        })


}

// --------------------CARRITO-------------------------