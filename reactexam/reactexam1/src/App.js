import logo from './logo.svg';

import Myheader from './Myheader';
import Myfooter from './Myfooter';


function App() {
  
  const style ={
    App : {
      backgroundColor : "black",
    },
    h2:{
      color :"red",
    },
    bold_text:{
      color : "green",
    },
  };
  const name ="park";
  const func = ()=>{
    return "function";
  }

  return (
    <div style={style.App}>

      <h1 style={style.h2}>내 이름은 {name} {func()}</h1>
      <b style={style.bold_text}>
        {name}은 : {10%2 === 0 ? "찍수" : "홀수"}
      </b>
      <Myheader/>
      <header className="App-header">
        <h2 style={style.h2}>hello</h2>
      </header>
      <Myfooter/>
      <b id ="boldtxt">React.js</b>
    </div>
  );
}

export default App;
