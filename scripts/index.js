setTimeout(() => {
    Toastify({
        text: "Bienvenido!",
        style: {
            color: "#000",
            border: "solid 2px #fff",
            background: "#ff7c00",
            borderRadius: "20px",
        }
    }).showToast();
},2500)




const btnLinkedin = document.querySelector("#btn-info")

btnLinkedin.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        Swal.fire({
            title: '<strong>Hola</strong>!!',
            html:
              'Te dejo mi link a mi ' +
              '<a href="https://www.linkedin.com/in/joaquin-sangiorgi-2b5903206/">Linkedin</a> ' +
              'por si te gusta mi trabajo! Espero que te guste mi página',
            showCloseButton: false,
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonText:
              'No gracias',
              cancelButtonColor: "#ff7c00",
              color: "#fff",
              background: "#000",
              allowEscapeKey: true,
              allowEnterKey: true,
            
              customClass: {
                border: "2px solid #ff7c00"
              }
          })
          
    },0)
})