const lista = document.getElementById("lista")
const boton = document.getElementById("boton")

function agregar(){
    let valor = document.getElementById("elemento").value
    if(valor){
        let elementoNuevo = document.createElement("li")
        elementoNuevo.textContent = valor
        lista.appendChild(elementoNuevo)
        document.getElementById("elemento").value = ""
    }
}

boton.addEventListener("click", () => {agregar()})