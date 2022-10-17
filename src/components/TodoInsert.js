import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md"
import '../styles/TodoInsert.scss'

export default function TodoInsert({onInsert}) {

  const [value, setValue] = useState('');

  const onChange = useCallback(e=>{
    setValue(e.target.value);
  },[]);

  const onSubmit = useCallback(e=>{
    onInsert(value);
    e.preventDefault();
    //submit 이벤트는 브라우저에서 새로고침을 발생
    setValue('');
  },[value]);
  

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder='할일을 입력하세요'/>
      <button type='sumbit'> < MdAdd /> </button>
    </form>
  )
}
