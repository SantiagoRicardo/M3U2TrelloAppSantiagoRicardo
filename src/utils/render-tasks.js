import moment from 'moment';
import { ELEMENTS } from '../utils/all-elements.js';

function dateFormat(time, format = 'DD/MM/YYYY') {
  return moment.unix(time).format(format);
}

export default function renderTasks(allTasks) {
  ELEMENTS.tareaEnProgreso.innerHTML = '';
  ELEMENTS.tareaPorHacer.innerHTML = '';
  ELEMENTS.tareaFinalizada.innerHTML = '';

  allTasks.forEach((task) => {
    const nuevaTarea = document.createElement('article');
    nuevaTarea.classList.add('targeta-tarea');

    const tituloTarea = document.createElement('h3');
    tituloTarea.classList.add('titulo-tarea');
    tituloTarea.innerText = task.title;

    const responsableTarea = document.createElement('p');
    responsableTarea.classList.add('responsable-tarea');
    responsableTarea.innerHTML = `<span class="responsable_tarea">Responsable:</span> ${task.person}`;

    const descripcionTarea = document.createElement('p');
    descripcionTarea.classList.add('descripcion-tarea');
    descripcionTarea.innerHTML = `<span class="descripcion_tarea">Descripción:</span> ${task.details} `;

    const fechaPlazo = document.createElement('p');
    fechaPlazo.classList.add('fecha-plazo');
    fechaPlazo.innerHTML = `<span class="fecha_plazo">Plazo:</span> ${dateFormat(task.deadline)}`;

    const fechaCreacion = document.createElement('p');
    fechaCreacion.classList.add('fecha-creacion');
    fechaCreacion.innerHTML = `<span class="fecha_creacion">Creación:</span> ${dateFormat(
      task.created,
    )}`;

    nuevaTarea.appendChild(tituloTarea);
    nuevaTarea.appendChild(responsableTarea);
    nuevaTarea.appendChild(descripcionTarea);
    nuevaTarea.appendChild(fechaPlazo);
    nuevaTarea.appendChild(fechaCreacion);

    switch (task.state) {
      case 'to-do':
        return ELEMENTS.tareaPorHacer.appendChild(nuevaTarea);
      case 'in-progress':
        return ELEMENTS.tareaEnProgreso.appendChild(nuevaTarea);
      case 'done':
        return ELEMENTS.tareaFinalizada.appendChild(nuevaTarea);
      default:
        alert(`Tipo de estado de la task es invalida: ${task.state}`);
    }
  });
}
