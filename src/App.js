import React, { Component } from "react";
import { generate } from "shortid";

// Helper components and utils.
import { TodoForm, TodoList, TodoFilter } from "./components/todo";
import { getTodos, processTodo } from "./api/todoService";

// Helper function to retrieve list of todos based on current filter.
const getVisibleTodos = (todos, filter = "SHOW_ALL") => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

class App extends Component {
  state = {
    todos: [],
    filter: "",
    todoText: "",
    error: null,
    updateMessage: ""
  };

  // On load, fetch the list of todos from api/endpoint.
  componentDidMount() {
    getTodos()
      .then(data => this.setState({ todos: data }))
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  }

  // Add a new todo to the existing list of todos.
  addTodo = todo => {
    const { todos, todoText } = this.state;

    if (todoText.trim() !== "") {
      const newTodo = {
        id: generate(),
        task: this.state.todoText,
        completed: false
      };
      this.setState({
        todos: [...todos, newTodo],
        error: null
      });

      // Add the new todo to our endpoint as well.
      processTodo("Add", newTodo).then(() =>
        this.notifyUser("Added new Todo.")
      );
    } else {
      this.setState({ error: new Error("Please enter a valid todo!") });
    }
  };

  // Remove a todo from existing list of todos.
  removeTodo = id => {
    const { todos } = this.state;

    const todo = todos.find(todo => todo.id === id);

    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });

    // Remove the todo from our endpoint as well.
    processTodo("REMOVE", todo).then(() => this.notifyUser("Removed Todo!"));
  };

  // Do a strike-through on/off effect for toggling the todo.
  toggleTodo = id => {
    const { todos } = this.state;

    const todo = todos.find(todo => todo.id === id);

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedTodos });

    // Update the todo on our endpoint as well.
    processTodo("Update", todo).then(() => this.notifyUser("Updated Todo."));
  };

  // Handler function to manage current todo text.
  handleTodoTextChange = val => {
    this.setState({ todoText: val });
  };

  // Notify the user about CRUD operation outcomes from the endpoint/service.
  notifyUser = message => {
    this.setState({ updateMessage: message });
    setTimeout(() => {
      this.setState({ updateMessage: "" });
    }, 2000);
  };

  render() {
    const { todos, error, todoText, updateMessage, filter } = this.state;
    return (
      <div className="m-4 p-4 text-center border border-teal-600">
        <h1 className="text-2xl text-gray-700">React Todo App</h1>
        {updateMessage && (
          <span
            className={`${
              updateMessage.includes("Removed")
                ? "text-red-600"
                : "text-teal-600"
            } mt-3 mb-3 inline-block`}
          >
            {updateMessage}
          </span>
        )}
        <TodoForm
          error={error}
          todoText={todoText}
          handleTodoTextChange={this.handleTodoTextChange}
          addTodo={this.addTodo}
        />
        <TodoList
          todos={getVisibleTodos(todos, filter)}
          toggleTodo={this.toggleTodo}
          removeTodo={this.removeTodo}
        />
        <TodoFilter
          currentFilter={filter}
          onClick={filter => this.setState({ filter })}
        />
      </div>
    );
  }
}

export default App;
