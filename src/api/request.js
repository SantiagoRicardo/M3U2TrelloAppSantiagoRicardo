
const API_URL = "https://my-json-server.typicode.com/SantiagoRicardo/M3U2TrelloAppSantiagoRicardo";

//Se realiza la petición

//const axios = require('axios');

axios
  .get(`${API_URL}/tasks`)
  .then((res) => allTasks(res.data))
  .catch((err) => console.error(err));

const allTasks = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
  
  let nuevaTarea = document.createElement("article");
  nuevaTarea.classList.add("targeta-tarea");

  let tituloTarea = document.createElement("h3");
  tituloTarea.classList.add("titulo-tarea");
  tituloTarea.innerText = task.title;

  let responsableTarea = document.createElement("p");
  responsableTarea.classList.add("responsable-tarea");
  responsableTarea.innerHTML = `<span class="responsable_tarea">Responsable:</span> ${task.person}`;

  let descripcionTarea = document.createElement("p");
  descripcionTarea.classList.add("descripcion-tarea");
  descripcionTarea.innerHTML = `<span class="descripcion_tarea">Descripción:</span> ${task.details} `;

  let fechaPlazo = document.createElement("p");
  fechaPlazo.classList.add("fecha-plazo");
  fechaPlazo.innerHTML = `<span class="fecha_plazo">Plazo:</span> ${dateFormat(task.deadline)}`;

  let fechaCreacion = document.createElement("p");
  fechaCreacion.classList.add("fecha-creacion");
  fechaCreacion.innerHTML = `<span class="fecha_creacion">Creación:</span> ${dateFormat(task.created)}`;

  nuevaTarea.appendChild(tituloTarea);
  nuevaTarea.appendChild(responsableTarea);
  nuevaTarea.appendChild(descripcionTarea);
  nuevaTarea.appendChild(fechaPlazo);
  nuevaTarea.appendChild(fechaCreacion);

  let tareaPorHacer = document.querySelector("#tarea-por-hacer");
  let tareaEnProgreso = document.querySelector("#tarea-en-progreso");
  let tareaFinalizada = document.querySelector("#tarea-finalizada");

  if (task.state === "to-do") {
    tareaPorHacer.appendChild(nuevaTarea);
  }
  if (task.state === "in-progress") {
    tareaEnProgreso.appendChild(nuevaTarea);
  }
  if (task.state === "done") {
    tareaFinalizada.appendChild(nuevaTarea);
  }
};
