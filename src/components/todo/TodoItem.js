import React from "react";
import PropTypes from "prop-types";

export const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className="mt-2 flex items-center justify-center">
      <span>{todo.completed ? <strike>{todo.task}</strike> : todo.task}</span>
      <div className="flex">
        <span className="text-teal-600 ml-8">
          {todo.completed ? (
            <svg
              onClick={() => toggleTodo(todo.id)}
              className="fill-current h-4 w-4 cursor-pointer"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
            </svg>
          ) : (
            <svg
              onClick={() => toggleTodo(todo.id)}
              className="fill-current h-4 w-4 cursor-pointer"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z" />
            </svg>
          )}
        </span>
        <span className="text-red-600 ml-4">
          <svg
            onClick={() => removeTodo(todo.id)}
            className="h-4 w-4 fill-current cursor-pointer"
            viewBox="0 0 20 20"
          >
            <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

// PropTypes validation.
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};
