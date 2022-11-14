import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function TodoItem({ todo, onDelete }) {
  const handleDelete = () => onDelete(todo);
  const { id, text, status } = todo;
  return (
    <li key={id}>
      {text}
      <button type='button' onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
