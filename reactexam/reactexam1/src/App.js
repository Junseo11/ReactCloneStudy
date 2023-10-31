import React from 'react';
import Container from './Container';
import Counter from './Counter';
import Ex from './Ex';


function App() {

  const dummylist =[
    {
      id: 1,
      author: "q",
      content : "하이 1",
      emotion:1,
      created_data: new Date().getTime()
    },
    {
      id: 2,
      author: "w",
      content : "하이 2",
      emotion:2,
      created_data: new Date().getTime()
    },
    {
      id: 3,
      author: "e",
      content : "하이 3",
      emotion:3,
      created_data: new Date().getTime()
    }
  
  ]

  const couterprop = {
    a:1,
    b:2,
    c:3,
    d:4,
    initialValue: 5,
  };

  return (
    <Container>
    <div>
      <Counter {...couterprop} /> 
    </div>


    <h2>계산기 예제 만들기</h2>
    <p>input으로 숫자 입력 버튼 클릭하면 결과 리스트로 반환</p>
      <Ex a={100} list={dummylist} {...couterprop}  />

    </Container>
  );
}

export default App;
