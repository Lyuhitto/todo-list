import React, {useState} from 'react';
import Header from './component/Header/Header';
import TodoList from './component/TodoList/TodoList';

const filters = ['all', 'active', 'completed']

export default function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <div>
      <Header 
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter}/>
    </div>
  );
}
