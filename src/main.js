import { ELEMENTS } from './utils/all-elements.js';
import postTask from './api/postTask.js';
import getAllTasks from './api/getAllTasks.js';
import renderTasks from './utils/render-tasks.js';

const ALL_TASKS = [];

// IIFE -> Immediately Invoked Function Expression
(async function () {
  const tasks = await getAllTasks();
  ALL_TASKS.push(...tasks);
  renderTasks(ALL_TASKS);
})();

ELEMENTS.modal.openSidebar.addEventListener('click', () => {
  ELEMENTS.modal.sidebar.classList.add('active');
});

ELEMENTS.modal.botonCancelar.addEventListener('click', () => {
  ELEMENTS.modal.sidebar.classList.remove('active');
});

ELEMENTS.form.form.onsubmit = async (event) => {
  event.preventDefault();
  const { tarea, descripcion, responsable, fecha } = ELEMENTS.form.inputs;

  const newestTask = ALL_TASKS[ALL_TASKS.length - 1];

  const newTask = {
    id: ++newestTask.id,
    title: tarea.value,
    person: responsable.value,
    details: descripcion.value,
    state: 'to-do',
    deadline: Math.floor(new Date(fecha.value).getTime() / 1000),
    created: Math.floor(new Date().getTime() / 1000),
  };

  const task = await postTask(newTask);
  ALL_TASKS.push(task);
  renderTasks(ALL_TASKS);
};
