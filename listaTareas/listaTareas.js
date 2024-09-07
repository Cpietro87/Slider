
// Array para almacenar las tareas
let tareas = [];

// Elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para renderizar las tareas en el DOM
function renderTareas() {
    // Limpiar la lista actual
    taskList.innerHTML = '';

    // Recorrer el array de tareas y agregar cada una al DOM
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');

        // Crear un campo de texto para la tarea
        const taskText = document.createElement('input');
        taskText.type = 'text';
        taskText.value = tarea.texto;
        taskText.readOnly = true;

        // Marcar como completada si corresponde
        if (tarea.completada) {
            li.classList.add('completed');
        }

        // Al hacer doble clic en la tarea, habilitar la edición
        taskText.addEventListener('dblclick', () => editarTarea(taskText, index));

        // Al presionar Enter, guardar la tarea editada
        taskText.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                guardarEdicion(taskText, index);
            }
        });

        // Al salir del campo de texto, guardar la tarea editada
        taskText.addEventListener('blur', () => guardarEdicion(taskText, index));

        // Botón de eliminar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', () => eliminarTarea(index));

        // Al hacer clic en la tarea, marcar como completada o no
        li.addEventListener('click', (e) => {
            // Evitar que se marque como completada al hacer doble clic para editar
            if (e.target !== taskText) {
                marcarCompletada(index);
            }
        });

        // Agregar campo de texto y botón al elemento de lista
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        // Agregar el elemento de lista al DOM
        taskList.appendChild(li);
    });
}

// Función para agregar una nueva tarea
function agregarTarea() {
    const textoTarea = taskInput.value.trim();

    if (textoTarea) {
        tareas.push({
            texto: textoTarea,
            completada: false
        });

        taskInput.value = ''; // Limpiar el campo de entrada

        // Renderizar la lista de tareas
        renderTareas();
    }
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderTareas();
}

// Función para marcar una tarea como completada
function marcarCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    renderTareas();
}

// Función para habilitar la edición de una tarea
function editarTarea(taskText, index) {
    taskText.readOnly = false;
    taskText.focus();
}

// Función para guardar la tarea editada
function guardarEdicion(taskText, index) {
    tareas[index].texto = taskText.value.trim();
    taskText.readOnly = true;
    renderTareas();
}

// Event listener para el botón de agregar tarea
addTaskBtn.addEventListener('click', agregarTarea);

// Renderizar las tareas inicialmente
renderTareas();