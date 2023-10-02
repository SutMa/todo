import {Task} from './logic.js';
import './style.css';

let newTaskButton = document.getElementById('newTask');
let list = document.getElementById('list');


newTaskButton.addEventListener('click', popUp);

function popUp(){
    let newModal = document.createElement('dialog');
    newModal.innerHTML = `<form id="newTaskForm">
    <h2>Create New Task</h2>
    
    <label for="taskTitle">Title:</label>
    <input type="text" id="taskTitle" name="taskTitle" required>
    
    <label for="taskDesc">Description:</label>
    <textarea id="taskDesc" name="taskDesc"></textarea>
    
    <label for="taskDueDate">Due Date:</label>
    <input type="date" id="taskDueDate" name="taskDueDate">
    
    <label for="taskPriority">Priority:</label>
    <select id="taskPriority" name="taskPriority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
    </select>
    
    <label for="taskNotes">Notes:</label>
    <textarea id="taskNotes" name="taskNotes"></textarea>
    
    <button type="submit">Create Task</button>
    <button type="button" id="closeDialog">Close</button>
    </form>`;
    document.body.appendChild(newModal);

    newModal.querySelector('#newTaskForm').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const title = e.target.taskTitle.value;
    const desc = e.target.taskDesc.value;
    const dueDate = e.target.taskDueDate.value;
    const priority = e.target.taskPriority.value;
    const notes = e.target.taskNotes.value;

    const newTask = new Task(title, desc, dueDate, priority, notes);
        addTaskToDOM(newTask);

    console.log('Task created!');
    newModal.close();
    });


    newModal.querySelector('#closeDialog').addEventListener('click', () => {
    newModal.close();
    });


    newModal.showModal();
}

function addTaskToDOM(task) {
    let taskElement = document.createElement('div');
    taskElement.classList.add('task-item'); 

    let titleElement = document.createElement('h3');
    titleElement.textContent = task.title;

    let descElement = document.createElement('p');
    descElement.textContent = task.desc;

    let dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due: ${task.dueDate}`;

    let priorityElement = document.createElement('p');
    priorityElement.textContent = `Priority: ${task.priority}`;

    let notesElement = document.createElement('p');
    notesElement.textContent = `Notes: ${task.notes}`;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(taskElement));


    taskElement.appendChild(titleElement);
    taskElement.appendChild(descElement);
    taskElement.appendChild(dueDateElement);
    taskElement.appendChild(priorityElement);
    taskElement.appendChild(notesElement);
    taskElement.appendChild(deleteButton);

   


    taskElement.style.backgroundColor ='white';
    taskElement.style.borderRadius = '10px';
    taskElement.style.paddingLeft = '10px';
    taskElement.style.paddingRight = '10px';
    taskElement.style.textAlign = 'center' ;

    list.appendChild(taskElement);
    
}


function deleteTask(taskElement) {
    list.removeChild(taskElement);
}