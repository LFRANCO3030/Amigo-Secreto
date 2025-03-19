let names = [];

console.log("app.js se ha cargado correctamente");
console.log("Esperando interacción del usuario...");

function agregarAmigo() {
    console.log("Función agregarAmigo ejecutada");
    const nameInput = document.getElementById("amigo");
    const errorMessage = document.getElementById("errorMessage");
    const nameList = document.getElementById("name-list");
    const sortButton = document.getElementById("sortButton");
    
    let name = nameInput.value.trim();
    errorMessage.textContent = "";
    
    if (name === "") {
        errorMessage.textContent = "Error: No puede ingresar un nombre vacío.";
        limpiarInput(nameInput);
        return;
    }
    
    if (names.includes(name)) {
        errorMessage.textContent = "Error: El nombre ya ha sido ingresado.";
        limpiarInput(nameInput);
        return;
    }
    
    names.push(name);
    console.log("Nombre agregado:", name);
    actualizarLista();
    
    limpiarInput(nameInput);
    
    if (names.length >= 2) {
        sortButton.style.display = "block";
        sortButton.classList.remove("hidden");
    }
}

function limpiarInput(inputElement) {
    setTimeout(() => {
        inputElement.value = "";
        inputElement.focus();
    }, 50);
}

function actualizarLista() {
    const nameList = document.getElementById("name-list");
    if (!nameList) {
        console.error("Elemento name-list no encontrado");
        return;
    }
    
    nameList.innerHTML = "";
    names.forEach(name => {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
    console.log("Lista actualizada:", nameList.innerHTML);
}

function sortearAmigo() {
    if (names.length < 2) {
        alert("Debe ingresar al menos 2 nombres para sortear.");
        return;
    }
    const result = document.getElementById("result");
    const randomIndex = Math.floor(Math.random() * names.length);
    result.textContent = "Nombre seleccionado: " + names[randomIndex];
}

window.onload = function () {
    console.log("Evento onload ejecutado");
    const sortButton = document.getElementById("sortButton");
    if (sortButton) {
        sortButton.onclick = sortearAmigo;
    }
};