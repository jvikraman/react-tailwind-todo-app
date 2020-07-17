import { addTodo } from "./todoHelper";

// Our tests for the todo app.
describe("Todo App", () => {
  // Add new todo operation.
  test("Add a new todo to existing list of todos.", () => {
    const todos = [
      { id: 1, task: "Learn React", completed: true },
      { id: 2, task: "Learn Tailwind CSS", completed: false },
      { id: 3, task: "Build Awesome Apps", completed: false }
    ];

    const newTodo = { id: 4, task: "Ship to Production", completed: false };

    const expectedTodos = [
      { id: 1, task: "Learn React", completed: true },
      { id: 2, task: "Learn Tailwind CSS", completed: false },
      { id: 3, task: "Build Awesome Apps", completed: false },
      { id: 4, task: "Ship to Production", completed: false }
    ];

    const result = addTodo(todos, newTodo);

    expect(result).toEqual(expectedTodos);
  });

  // Test for non-mutating version
  test("Adding a new todo doesn't mutate existing todos.", () => {
    const todos = [
      { id: 1, task: "Learn React", completed: true },
      { id: 2, task: "Learn Tailwind CSS", completed: false },
      { id: 3, task: "Build Awesome Apps", completed: false }
    ];

    const newTodo = { id: 4, task: "Ship to Production", completed: false };

    const result = addTodo(todos, newTodo);

    expect(result).not.toBe(todos);
  });
});
