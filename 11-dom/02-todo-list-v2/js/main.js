// Obtener la lista de tareas del localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar una tarea a la lista
function addTask() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();

  if (task) {
    const newTask = { id: Date.now(), task };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    renderTask(newTask);
  }
}

// Función para editar una tarea de la lista
function editTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  const task = prompt('Edit task:', tasks[index].task);

  if (task) {
    tasks[index].task = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTask(tasks[index]);
  }
}

// Función para eliminar una tarea de la lista
function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  const li = document.getElementById(`task-${id}`);
  li.parentNode.removeChild(li);
}

// Función para renderizar una tarea
function renderTask(task) {
  const list = document.getElementById('todo-list');

  // Buscar el elemento li correspondiente a la tarea
  const li = document.getElementById(`task-${task.id}`);

  if (li) {
    // Si el elemento ya existe, actualizar el texto
    li.textContent = task.task;
  } else {
    // Si el elemento no existe, crear uno nuevo
    const li = document.createElement('li');
    li.textContent = task.task;
    li.id = `task-${task.id}`;

    // Agregar botones de editar y eliminar
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(task.id);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(task.id);

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    list.appendChild(li);
  }
}

// Función para renderizar la lista de tareas al cargar la página
function renderTasks() {
  tasks.forEach(task => renderTask(task));
}

// Renderizar la lista de tareas al cargar la página
renderTasks();
