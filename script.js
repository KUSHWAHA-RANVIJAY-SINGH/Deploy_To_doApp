function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle('completed');
}
