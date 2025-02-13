const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('please enter some task :/');
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(taskDiv);
    });

    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(removeBtn);

    taskList.appendChild(taskDiv);

    taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});