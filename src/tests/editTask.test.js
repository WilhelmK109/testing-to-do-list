const { updateTask, deleteCompletedTasks, changeCompletedStatus } = require('../modules/activity.js');

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

describe('updateTask function', () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      {
        description: 'Task 1',
        completed: false,
      },
      {
        description: 'Task 2',
        completed: true,
      },
    ];
  });

  test('should update the description of a task', () => {
    const newDescription = 'New Task 1';
    const index = 0;
    const updatedTasks = updateTask(tasks, index, newDescription);
    expect(updatedTasks[index].description).toEqual(newDescription);
  });
});

describe('deleteCompletedTasks function', () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      {
        description: 'Task 1',
        completed: false,
      },
      {
        description: 'Task 2',
        completed: true,
      },
      {
        description: 'Task 3',
        completed: true,
      },
    ];
  });

  test('should clear all completed tasks', () => {
    const updatedTasks = deleteCompletedTasks(tasks);
    expect(updatedTasks.length).toEqual(1);
    expect(updatedTasks[0].description).toEqual('Task 1');
  });
});

describe('changeCompletedStatus function', () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      {
        description: 'Task 1',
        completed: false,
      },
      {
        description: 'Task 2',
        completed: true,
      },
      {
        description: 'Task 3',
        completed: true,
      },
    ];
  });

  test('should update the completed status of a task from true to false', () => {
    const index = 1;
    const updatedTasks = changeCompletedStatus(tasks, index);
    expect(updatedTasks[index].completed).toBe(false);
  });

  test('should update the completed status of a task from false to true', () => {
    const index = 0;
    const updatedTasks = changeCompletedStatus(tasks, index);
    expect(updatedTasks[index].completed).toBe(true);
  });
});
