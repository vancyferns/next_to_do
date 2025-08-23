import { useState } from 'react';

/**
 * Component for the form to add new to-do items.
 * This is a presentational component that receives its data and functions via props.
 */
const AddTodoForm = ({ inputValue, setInputValue, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
