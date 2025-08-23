import TodoItem from './TodoItem';

/**
 * Component that renders the list of all to-do items.
 * It maps over the todos array and renders a TodoItem for each one.
 */
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center italic">No tasks yet. Add one above!</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
