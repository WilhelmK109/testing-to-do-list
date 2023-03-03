import { getItemFromLocalStorage, saveItemToLocalStorage } from './storage.js';

const createTask = (tasks, newTaskDescription) => {
  const tasksArray = tasks || [];
  const newTask = {
    description: newTaskDescription.value,
    completed: false,
    index: tasksArray.length,
  };
  newTaskDescription.value = '';
  tasksArray.push(newTask);

  saveItemToLocalStorage(tasksArray);
  return tasksArray;
};

const updateTask = (taskId, el) => {
  const tasks = getItemFromLocalStorage();
  const task = tasks.find((task) => task.index === parseInt(taskId, 10));
  if (el.hasAttribute('content-editable')) {
    task.description = el.textContent;
  } else {
    const span = el.nextElementSibling;
    const parent = el.closest('input');
    task.completed = !task.completed;
    if (task.completed) {
      span.removeAttribute('content-editable');
      span.classList.add('complete');
    } else {
      span.setAttribute('content-editable', 'true');
      parent.classList.remove('complete');
    }
  }
  saveItemToLocalStorage(tasks);
};

const deleteTask = (tasks, index) => {
  const newTasks = tasks.filter((task, innerIndex) => index !== innerIndex);
  for (let i = 0; i < newTasks.length; i += 1) {
    newTasks[i].index = i;
  }
  saveItemToLocalStorage(newTasks);
  return newTasks;
};

const deleteCompletedTasks = (tasks) => {
  const incomplete = tasks.filter((task) => task.completed !== true);
  for (let i = 0; i < incomplete.length; i += 1) {
    incomplete[i].index = i;
  }
  saveItemToLocalStorage(incomplete);
  return incomplete;
};

export {
  createTask, deleteCompletedTasks, deleteTask, updateTask,
};