import '/src/style.css'
import javascriptLogo from '../javascript.svg'

function getElement(query) {
  const el = document.querySelector(query);
  if (!el) return alert(`Not found: ${query}`);
  return el;
}

const addTodoButton = getElement('#add-todo');
const tareaPorHacer = getElement('#tarea-por-hacer');
const form = getElement('form');

addTodoButton.onclick = () => {
  const form = getElement('#form');
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
  } else {
    form.classList.add('hidden');
  }
};

form.onsubmit = (event) => {
  event.preventDefault();
  const tareaInput = getElement('#tarea');
  const descripcionInput = getElement('#descripcion');
  const responsableInput = getElement('#responsable');
  const fechaInput = getElement('#fecha');

  const li = document.createElement('li');
  li.onclick = () => {
    console.log('clicked');
  };

  li.innerHTML = `<p>${tareaInput.value}</p>
  <p>${descripcionInput.value}</p>
  <p>${responsableInput.value}</p>
  <p>${fechaInput.value}</p>`;

  tareaPorHacer.appendChild(li);
};

