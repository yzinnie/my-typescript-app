import React from 'react';

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className="TodoItem">
      <span>{props.text}</span>{' '}
      <button onClick={props.onRemoveTodo}>삭제</button>
    </li>
  );
};
export default TodoItem;
