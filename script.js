function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(taskSpan);
    li.appendChild(removeButton);

    li.onclick = function () {
        li.classList.toggle('completed');
    };

    taskList.appendChild(li);

    input.value = ''; // Clear input field
}
