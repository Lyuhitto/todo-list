import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from './../../context/DarkModeContext';
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header({ filters, filter, onFilterChange }) {
  const {darkMode, toggleDarkMode} = useDarkMode();

  return (
    <header className={styles.header}>
    <button type='button' onClick={toggleDarkMode} className={styles.toggle}>
      {!darkMode && <FaMoon className={styles.icon}/>}
      {darkMode && <FaSun  className={styles.icon}/>}
    </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${styles.filter} ${filter === value && styles.selected}`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
