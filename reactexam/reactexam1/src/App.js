import React from 'react';
import Container from './Container';
import Counter from './Counter';


function App() {

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
    </Container>
  );
}

export default App;
