import React, { useEffect, useState } from 'react'


export default function Info() {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e =>{
      setName(e.target.value)
    }
    const onChangeNickName = e =>{
      setNickname(e.target.value)
    }
    
    useEffect(()=>{
      console.log("렌더링이 완료되었습니다 componentDidMount()");
      console.log(name, nickname);
    },[name,nickname]); // componentDidUpdate()와 DidMount 기능이 둘다있다. []state가 있으면 DidUpdate까지

  return (
    <div>
      <div>
        <input onChange={onChangeName} />  
        {/* onChange 함수호출후 setName에 타겟이된 value를 setName을 통해서 name에 저장 */}
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div> <b>이름 : </b> {name} </div>
        <div> <b>닉네임 : </b> {nickname} </div>
      </div>
    </div>
  )
}
