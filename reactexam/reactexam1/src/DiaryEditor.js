import { useEffect, useRef, useState } from "react";
import React from "react";

const DiaryEditor=({onCreate})=>{

    useEffect(()=>{
        console.log("asdf");
    })

    const authorRef = useRef();
    const textRef = useRef();

    const [state,setstate] = useState({
        author : "",
        text : "",
        emotion : 1
    });

    const onHandleChange=(e)=>{
        console.log(e.target.name);
        setstate({
            ...state,
            [e.target.name] : e.target.value
            
        });

    };

    const onhandleSubmit= ()=>{
        if(state.author.length<1){
            authorRef.current.focus();
        }
        if(state.text.length<5){
            textRef.current.focus();
        }


        onCreate(state.author, state.text, state.emotion);
    }


    return(
        <div className="DiaryEditor">
            <div>
                <input ref={authorRef} name="author" value={state.author} onChange={onHandleChange}/>
            </div>

            <div>
                <textarea ref={textRef} name="text" value={state.text} onChange={onHandleChange}/>
            </div>
            <div>
                <select name="emotion" value={state.emotion} onChange={onHandleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </div>
            <div>
                <button onClick={onhandleSubmit}>저장</button>
            </div>
        </div>
    );
}

export default React.memo(DiaryEditor);