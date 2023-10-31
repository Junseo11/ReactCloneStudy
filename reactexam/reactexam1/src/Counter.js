import React, {useState} from "react"; 
import OddEvenResult from "./OddEvenResult";

const Counter = ({a}) =>{
    const [count,setCount] = useState(a);   
    const onIncrease = () =>{
        setCount(count +1);
    };
    const onMinus = () =>{
        setCount(count-1);
    };
    
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onMinus}>-</button>
            <OddEvenResult count = {count}/>
        </div>
    );
};

Counter.defaultProps ={
    initialValue: 0,
};

export default Counter;