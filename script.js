let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        input.value = '';
        renderListaAmigos();
    }
}

function renderListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    amigos.forEach((nombre, idx) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'posicion';
        span.textContent = (idx + 1) + '.';
        li.appendChild(span);
        li.appendChild(document.createTextNode(nombre));
        ul.appendChild(li);
    });
}

// ...puedes agregar aquí la función sortearAmigo() si la necesitas...
