let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (!nombre) {
        alert('Por favor, escribe un nombre antes de añadir.');
        return;
    }
    amigos.push(nombre);
    input.value = '';
    renderListaAmigos();
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

// Permitir agregar con Enter
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('amigo');
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
});

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 nombres para poder sortear el amigo.');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indice];
    mostrarResultadoSimple(elegido);
}

function mostrarResultadoSimple(nombre) {
    const ul = document.getElementById('resultado');
    ul.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${nombre}`;
    ul.appendChild(li);
}