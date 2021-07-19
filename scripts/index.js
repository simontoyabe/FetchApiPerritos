window.onload = () => {
    cargarImagen();
    document.querySelector("#random").addEventListener("click", () => {
        cargarImagen();
    })
}

function cargarImagen() {
    const peticion = fetch("https://dog.ceo/api/breeds/image/random");
    peticion.then(response => {
        return response.json();
    }).then(datos => {
        //console.log(datos);
        const img = document.querySelector("#imagen-perro");
        img.setAttribute("src", datos.message);
    })
}