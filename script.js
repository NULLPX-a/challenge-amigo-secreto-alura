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
function sortearAmigos() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para hacer el sorteo.');
        return;
    }
    const sorteados = [...amigos];
    const resultados = {};
    
    for (let i = 0; i < sorteados.length; i++) {
        let amigo = sorteados[i];
        let indiceSorteado;
        
        do {
            indiceSorteado = Math.floor(Math.random() * sorteados.length);
        } while (sorteados[indiceSorteado] === amigo || resultados[amigo] === sorteados[indiceSorteado]);
        
        resultados[amigo] = sorteados[indiceSorteado];
    }
    
    mostrarResultados(resultados);
}