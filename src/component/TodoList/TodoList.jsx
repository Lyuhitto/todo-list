import React, { useState, useEffect } from 'react';
import AddTodo from './../AddTodo/AddTodo';
import TodoItem from './../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  // const [todos, setTodos] = useState([
  //   { id: '1', text: '장보기', status: 'active' },
  // ]);
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  const handleAdd = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
  const handleUpddate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const filtered = getFilteredItems(todos, filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <TodoItem
            key={item.id}
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

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  console.log('read!');
  return todos ? JSON.parse(todos) : [];
}
