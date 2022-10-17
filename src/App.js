import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원가기',
      checked: false,
    }
  ]);

  const nextId = useRef(4); // ref dom요소를 선택할수있는 ID값

  const onInsert = useCallback(value =>{
    const todo ={
      id: nextId.current,
      text: value,
      checked: false,
    };
    setTodos(todos.concat(todo)); // (concat 배열과 배열 결합 )todo를 todos에 결합
    nextId.current += 1;

  },[todos]);

  const onRemove = useCallback(id =>{
    setTodos(todos.filter(todo => todo.id !== id)); //filter조건에 맞는 배열의 값
  },[todos]);

  const onToggle = useCallback(id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
  },[todos]);
  // 기존의 todo를 체크해서 체크된상태면 false로 바꾸고 false면 true
  
  return (
    <div >
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/> 
        {/*props 형태로 TodoList로 보낸뒤 리스트에서 구조분해후 리스트아이템로 다시 보낸후 적용*/}
      </TodoTemplate>
    </div>
  );
}

export default App;
