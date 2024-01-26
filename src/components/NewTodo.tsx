import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
    todoTextInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className="check-form">
      <label htmlFor="text">체크리스트</label>
      <p>
        산책에 필요한 물건? 나가서 구매할 간식? <br />
        자유롭게 모든 것들을 Check ! 🖤
      </p>

      <div>
        <input type="text" id="text" ref={todoTextInputRef}></input>
        <button>추가</button>
      </div>
    </form>
  );
};

export default NewTodo;
