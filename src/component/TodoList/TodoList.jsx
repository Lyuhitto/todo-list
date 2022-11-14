import React, { useState } from 'react';
import AddTodo from './../AddTodo/AddTodo';
import TodoItem from './../TodoItem/TodoItem';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: '1', text: '장보기', status: 'active' },
  ]);
  const handleAdd = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
  const handleUpddate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const filtered = getFilteredItems(todos, filter)

  return (
    <section>
      <ul>
        {filtered.map((item) => (
          <TodoItem
            todo={item}
            onDelete={handleDelete}
            onUpdate={handleUpddate}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>
  );
}

function getFilteredItems (todos, filter) {
  if(filter === 'all') {
    return todos
  }
  return todos.filter(todo => todo.status === filter)
}