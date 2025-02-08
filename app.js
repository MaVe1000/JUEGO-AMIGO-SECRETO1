// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombreInput = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
  const nuevoAmigo = nombreInput.value.trim();
  console.log(`Amigo ${nuevoAmigo} agregado`);

  if (nuevoAmigo === "") {
    alert("Ingrese un nombre por favor.");
    return;
  }
  if (amigos.includes(nuevoAmigo)) {
    alert("El nombre que intenta ingresar, ya se encuentra en la lista de amigos.");
    return;
  }
  amigos.push(nuevoAmigo);

  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nuevoAmigo;
  listaAmigos.appendChild(nuevoElemento);
  nombreInput.value = "";
  console.log("Lista de amigos actualizada:", amigos);
}

function sortearAmigo() {
  if (amigos.length === 0) {
    console.log('No hay amigos para sortear');
    alert('No hay amigos para sortear');
    return;
  }
  console.log('Sorteando amigo...');
  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  console.log(`Amigo sorteado: ${amigoSorteado}`);
  resultado.innerHTML = `El Amigo Secreto es ${amigoSorteado}`;

   // Mostrar confeti
   confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function resetear() {
  console.log('Resetando lista de amigos...');
   listaAmigos.innerHTML = '';
  resultado.innerHTML = '';
  console.log('Lista de amigos reseteada:', amigos);
}

// Asegúrate de que el botón "Añadir" tenga el id "btnAgregar"
document.getElementById('btnAgregar').addEventListener('click', agregarAmigo);

document.getElementById('btnSortear').addEventListener('click', sortearAmigo);

document.getElementById('btnReiniciar').addEventListener('click', resetear);