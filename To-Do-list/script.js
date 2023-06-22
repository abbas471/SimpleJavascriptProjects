document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', addTask);
  taskList.addEventListener('click', removeTask);
  taskList.addEventListener('dblclick', completeTask);

  // Load tasks from local storage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  renderTasks();

  function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      const taskItem = createTaskElement(task.text, task.completed, index);
      taskList.appendChild(taskItem);
    });
  }

  function createTaskElement(text, completed, index) {
    const taskItem = document.createElement('li');
    taskItem.textContent = text;
    if (completed) {
      taskItem.classList.add('completed');
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    taskItem.appendChild(deleteButton);

    return taskItem;
  }

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const newTask = {
        text: taskText,
        completed: false
      };
      tasks.push(newTask);

      const taskItem = createTaskElement(taskText, false, tasks.length - 1);
      taskList.appendChild(taskItem);
      taskInput.value = '';

      saveTasks();
    }
  }

  function removeTask(event) {
    if (event.target.tagName === 'BUTTON') {
      const taskItem = event.target.parentNode;
      const taskIndex = Array.from(taskList.children).indexOf(taskItem);
      tasks.splice(taskIndex, 1);

      taskItem.remove();

      saveTasks();
    }
  }

  function completeTask(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('completed');

      const taskIndex = Array.from(taskList.children).indexOf(event.target);
      tasks[taskIndex].completed = !tasks[taskIndex].completed;

      saveTasks();
    }
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
