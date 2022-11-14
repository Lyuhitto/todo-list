import React from 'react';

export default function TodoItem({todo}) {
  const {key, text, status} = todo
  return <li key={key}>{text}</li>;
}
