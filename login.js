function processLogin(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const fecha = new Date(document.getElementById("fecha").value);
    const today = new Date();

    if (!fecha || fecha > today) {
        alert("Por favor, ingresa una fecha válida.");
        return;
    }

    const daysTogether = Math.floor((today - fecha) / (1000 * 60 * 60 * 24));
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("daysTogether", daysTogether);
    window.location.href = "main.html";
}