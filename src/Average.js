import React, {useState, useRef, useCallback, useMemo} from 'react'

const getAverage = lists =>{
  console.log('평균값 계산중..');
  if (lists.length === 0) return 0;
  const sum = lists.reduce((a,b) => a+b);
  return sum/lists.length;

}
//useMemo() 렌더링 하는 과정에서 특정 값이 바뀌었을때만 연산 실행하고 값이 바뀌지 않았으면 이전의 연산결과를 다시 사용.
//숫자 문자열 객체 처럼 일반값 재사용

export default function Average() {
  const [lists, setLists] = useState([]);
  const [number, setNumber]  = useState('');
  const inputEl = useRef(null); // Dom(html요소)을 조작하는 ID처럼 사용

  // const onChange = e =>{
  //   console.log('컴포넌트가 처음 렌더링 될 때만 함수 생성..');
  //   setNumber(e.target.value);
  // }

  const onChange = useCallback(e =>{
    console.log('컴포넌트가 처음 렌더링 될 때만 함수 생성..');
    setNumber(e.target.value);
  },[]); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

  const onInsert = useCallback(e =>{
    console.log('number 혹은 list가 바뀌었을때만 함수 생성');
    const nextLists = lists.concat(parseInt(number));
    setLists(nextLists);
    setNumber('');
    inputEl.current.focus();
  },[number,lists]); //number 혹은 list 가 바뀌었을때만 함수 생성

  const avg = useMemo(() => getAverage(lists),[lists]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {lists.map((list,index) =>(
          <li key={index}>{list}</li>
        ))}
      </ul>
      <div><b>평균값 : </b>{avg}</div>
    </div>
  )
}
