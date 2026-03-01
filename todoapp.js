function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const listItem = document.createElement('li');

        // Create span for text
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;

        // Toggle only when clicking text
        textSpan.addEventListener('click', function () {
            this.classList.toggle('completed');
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-button');

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(textSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
function clearTasks() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
        }