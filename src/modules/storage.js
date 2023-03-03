// Fetch data from the localStorage
const getItemFromLocalStorage = () => {
  let data = localStorage.getItem('tasks');
  if (!data) {
    data = [];
  } else {
    data = JSON.parse(data);
  }
  return data;
};

//Save data in the localStorage
const saveItemToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { getItemFromLocalStorage, saveItemToLocalStorage };