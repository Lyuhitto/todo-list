import React, { useState } from 'react';
import AddTodo from './../AddTodo/AddTodo';
import TodoItem from './../TodoItem/TodoItem';

export default function TodoList() {
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

  return (
    <section>
      <ul>
        {todos.map((item) => (
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
