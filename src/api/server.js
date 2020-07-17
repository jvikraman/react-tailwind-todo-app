// This file will be run using `json-server` to simulate a local server api/endpoint.
const generate = require("shortid");

module.exports = () => {
  return {
    todos: [
      { id: generate(), task: "Learn React", completed: false },
      { id: generate(), task: "Buy Groceries", completed: true },
      { id: generate(), task: "Walk the Dog", completed: false },
      { id: generate(), task: "Wash Car", completed: true },
      { id: generate(), task: "Do the dishes", completed: false }
    ]
  };
};
