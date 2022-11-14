import React from 'react';

export default function TodoItem({todo}) {
  const {id, text, status} = todo
  return <li key={id}>{text}</li>;
}
