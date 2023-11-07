import React, { useEffect, useState } from "react";


const CounterA = React.memo(({count})=>{
    console.log(count);
    return(<div>{count}</div>);
});

const CounterB = ({obj})=>{
    console.log(obj.count);
    return(<div>{obj.count}</div>);
};

const arequal = (prev,next) =>{
    if(prev.obj.count == next.obj.count){
        return true;
    }
    else{
        return false;
    }
}

const MemorB = React.memo(CounterB,arequal);

const OptimizeTest = () =>{

    const [count,setCount] = useState(1);
    const [obj,setObj] = useState({
        count : 1,
    });

    return(
    <div style={{padding:50}}>
        <div>
            <h2>counter a</h2>
            <CounterA count={count}/>
            <button onClick={()=> setCount(count)}>button a</button>
        </div>

        <div>
            <h2>counter b</h2>
            <MemorB obj = {obj}/>
            <button onClick={()=> setObj({count:obj.count})}>button b</button>
        </div>
    </div>
    );
};

export default OptimizeTest;