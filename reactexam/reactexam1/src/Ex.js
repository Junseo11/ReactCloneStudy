import { useState } from "react";
import List from "./List";


const Ex = ({list}) =>{

    const [state,setState] = useState("s");
    console.log(state)

    const handeler = (ee) =>{
        setState(ee.target.value)
        console.log(state);
    }

    const hansubmit = () =>{
        let [a,b] = state.split(" ").map(value => parseInt(value));
        console.log(a+b)

    }


    return(
    <div>
        <p value={state}></p>
        <input value={state} onChange={handeler}/>
        <br/>

        <button style={{width:50}} onClick={hansubmit}>+</button>


        <hr/>
        

        <div>
            {list.map((it)=>(
                <List id ={it.id} {...it}/>
                  
            ))}
        </div>

    </div>); 
};

export default Ex;

