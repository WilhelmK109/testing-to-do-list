// Import the functions to test
const { createTask, deleteTask } = require('./activity.js');

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

describe('ToDo List Application', () => {
  describe('createTask()', () => {
    test('should add a new task to the tasks array', () => {
      // Arrange
      const tasks = [{ description: 'Task 1', completed: false, index: 0 }];
      const newTaskDescription = { value: 'Task 2' };

      // Act
      const result = createTask(tasks, newTaskDescription);

      // Assert
      expect(result.length).toBe(2);
      expect(result[1].description).toBe('Task 2');
      expect(newTaskDescription.value).toBe('');
    });
  });

  describe('deleteTask()', () => {
    test('should remove a task from the tasks array', () => {
      // Arrange
      const tasks = [{
        description: 'Task 1',
        completed: false,
        index: 0,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 1,
      }];
      const index = 0;

      // Act
      const result = deleteTask(tasks, index);

      // Assert
      expect(result.length).toBe(1);
      expect(result[0].description).toBe('Task 2');
      expect(result[0].index).toBe(0);
    });
  });
});