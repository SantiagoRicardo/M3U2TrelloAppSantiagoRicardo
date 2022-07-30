function getElement(query) {
  const el = document.querySelector(query);
  if (!el) {
    alert(`Element not found: ${query}`);
    throw new Error(`Not found: ${query}`);
  }
  return el;
}

export const ELEMENTS = {
  tareaPorHacer: getElement('#tarea-por-hacer'),
  tareaEnProgreso: getElement('#tarea-en-progreso'),
  tareaFinalizada: getElement('#tarea-finalizada'),
  modal: {
    sidebar: getElement('#sidebar'),
    openSidebar: getElement('#open-sidebar'),
    botonCancelar: getElement('#boton2'),
  },
  form: {
    form: getElement('form'),
    inputs: {
      tarea: getElement('#tarea'),
      descripcion: getElement('#descripcion'),
      responsable: getElement('#responsable'),
      fecha: getElement('input[type=date]'),
    },
  },
};
