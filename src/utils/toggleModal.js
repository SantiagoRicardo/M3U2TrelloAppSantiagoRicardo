const 
    formularioBarra = document.querySelector('#form'),
    addTodo = document.querySelector('#add-todo'),
    botonCancelar = document.querySelector('#boton2');

add-todo.addEventListener('click', () => {
  formularioBarra.classList.add('active');
});

botonCancelar.addEventListener('click', () => {
  formularioBarra.classList.remove('active');
});
