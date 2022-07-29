let descForm;
let taskList;
let taskCounter = 0;
let taskDesc;
let priorityDropdown;

const dropdown = document.createElement('input');
dropdown.setAttribute('type', 'select');


document.addEventListener("DOMContentLoaded", () => {
  taskList = document.getElementById('tasks');
  taskDesc = document.getElementById('new-task-description');
  descForm = document.getElementById('create-task-form');
  descForm.addEventListener('submit', createNewTask);
  createDropdown();
});

function createNewTask(event) {
  event.preventDefault();
  const newTask = document.createElement('li');
  newTask.textContent = taskDesc.value;
  taskDesc.value = '';
  let taskColor;
  switch (priorityDropdown.value)
  {
    case 'Low':
      taskColor = 'green';
      break;
    case 'Medium':
      taskColor = 'yellow';
      break;
    case 'High':
      taskColor = 'red';
      break;
  }
  newTask.style.color = taskColor;
  taskList.appendChild(newTask);
}

function createDropdown() {
  //Create new Row
  descForm.appendChild(document.createElement('br'));

  //Create label
  let priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'priority-dropdown');
  priorityLabel.textContent = "Task priority:      ";
  descForm.appendChild(priorityLabel);
  priorityDropdown = document.createElement('select');
  priorityDropdown.setAttribute('id', 'priority-dropdown');
  descForm.appendChild(priorityDropdown);
  for (let s of ["Low", "Medium", "High"]) {
    let opt = document.createElement('option');
    opt.setAttribute('value', s);
    opt.textContent = s;
    priorityDropdown.appendChild(opt);
  }
  priorityDropdown.setAttribute('style', `position: absolute; left: ${taskDesc.offsetLeft}px; width: ${taskDesc.getBoundingClientRect().width}px;`);
}