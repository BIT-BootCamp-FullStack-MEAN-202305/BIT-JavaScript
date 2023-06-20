// Obtener la lista de tareas del localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar una tarea a la lista
function addTask() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();

  if (task) {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    renderTasks();
  }
}

// Función para editar una tarea de la lista
function editTask(index) {
  const task = prompt('Edit task:', tasks[index]);

  if (task) {
    tasks[index] = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

// Función para eliminar una tarea de la lista
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

// Función para renderizar la lista de tareas
function renderTasks() {
  const list = document.getElementById('todo-list');

  // Limpiar la lista actual
  list.innerHTML = '';

  // Crear un elemento li por cada tarea
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    // Agregar botones de editar y eliminar
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(index);

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    list.appendChild(li);
  });
}

// Renderizar la lista de tareas al cargar la página
renderTasks();
