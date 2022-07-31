import Sortable from 'dragabblejs';
const sor = new Sortable.default(document.querySelectorAll('.contenedor-tareas'), {
  draggable: 'article',
});
