import React from "react";
import PropTypes from "prop-types";

export const TodoForm = ({
  error,
  todoText,
  handleTodoTextChange,
  addTodo
}) => {
  return (
    <div className="mt-3">
      {error && <p className="mt-2 mb-2 text-red-600">{error.message}</p>}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleTodoTextChange("");
        }}
      >
        <div className="flex justify-center">
          <input
            className="border border-teal-600 px-2 py-1 focus: outline-none"
            type="text"
            value={todoText}
            onChange={e => handleTodoTextChange(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="ml-2 px-2 py-1 border border-teal-600 text-white bg-teal-600 focus:outline-none hover:bg-teal-500"
          >
            <div className="flex items-center">
              <span className="inline-block text-white">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
              </span>
              <span className="inline-block ml-1">Add Todo</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

// Proptype validations.
TodoForm.propTypes = {
  error: PropTypes.object,
  todoText: PropTypes.string.isRequired,
  handleTodoTextChange: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};
