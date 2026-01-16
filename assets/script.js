
let tareas = [
  { id: 1, descripcion: "Estudiar JavaScript", completado: false },
  { id: 2, descripcion: "Hacer el desafío", completado: false },
  { id: 3, descripcion: "Subir a GitHub", completado: false }
];


const lista = document.querySelector("#listaTareas");
const total = document.querySelector("#total");
const realizadas = document.querySelector("#realizadas");
const input = document.querySelector("#nuevaTarea");
const btn = document.querySelector("#btnAgregar");


function renderizar() {
  lista.innerHTML = "";
  let completadas = 0;

  
  for (let tarea of tareas) {

    if (tarea.completado) completadas++;

    lista.innerHTML += `
      <li>
        <input type="checkbox" 
          ${tarea.completado ? "checked" : ""}
          onclick="toggleTarea(${tarea.id})">

        ${tarea.descripcion}

        <button onclick="eliminarTarea(${tarea.id})">❌</button>
      </li>
    `;
  }

 
  total.textContent = tareas.length;
  realizadas.textContent = completadas;
}


function agregarTarea() {
  if (input.value === "") return;

  const nueva = {
    id: Date.now(),
    descripcion: input.value,
    completado: false
  };

  tareas.push(nueva);
  input.value = "";
  renderizar();
}


function eliminarTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
  renderizar();
}


function toggleTarea(id) {
  for (let tarea of tareas) {
    if (tarea.id === id) {
      tarea.completado = !tarea.completado;
    }
  }
  renderizar();
}


btn.addEventListener("click", agregarTarea);


renderizar();
