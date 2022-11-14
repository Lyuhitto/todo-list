import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status})
  }
  const { id, text, status } = todo;
  return (
    <li key={id}>
      <input
        type='checkbox'
        name='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{text}</label>
      <button type='button' onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
