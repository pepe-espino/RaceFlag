function mostrarMas() {
    let lista = document.getElementById("clasificacion");
    let items = lista.getElementsByTagName("li");
    
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("oculto");
    }

    document.getElementById("botonVerMas").classList.add("oculto");
    document.getElementById("botonVerMenos").classList.remove("oculto");
}

function mostrarMenos() {
    let lista = document.getElementById("clasificacion");
    let items = lista.getElementsByTagName("li");
    
    for (let i = 3; i < items.length; i++) {
        items[i].classList.add("oculto");
    }

    document.getElementById("botonVerMas").classList.remove("oculto");
    document.getElementById("botonVerMenos").classList.add("oculto");
}