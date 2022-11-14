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

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <TodoItem todo={item} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>
  );
}
