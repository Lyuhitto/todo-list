import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TodoItem.module.css'

export default function TodoItem({ todo, onDelete, onUpdate }) {
  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status})
  }
  const { id, text, status } = todo;
  return (
    <li key={id} className={styles.item}>
      <input
        type='checkbox'
        name='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <label htmlFor='checkbox' className={styles.name}>{text}</label>
      <button type='button' onClick={handleDelete} className={styles.button}>
        <FaTrashAlt className={styles.icon} />
      </button>
    </li>
  );
}
