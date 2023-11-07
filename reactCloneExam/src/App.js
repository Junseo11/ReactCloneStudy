
import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import DiaryEditorr from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './lifecycle';
import OptimizeTest from './optimaizeTest';


const reducer =(state,action)=>{
  switch(action.type){
    case "INIT" :{
      return action.data;
    } 
    case "CREATE":{
      const created_data = new Date().getTime();
      const newItem = {
        ...action.data, created_data
      };
      return [newItem, ...state];
    }

    case "DELETE" :{ 
      return state.filter((it)=>it.id!==action.targetId);
    }

    case "EDIT":{
      return state.map((it)=> it.id === action.targetId? {...it, content: action.newcontent}: it);
    }

    default:
    return state;
  }
}

export const DiaryContext = React.createContext();
export const stateContext = React.createContext();

function App() {

  const [data, dispatch ] = useReducer(reducer, []);
 
  //const [data,setData] = useState([]);

  const deaId = useRef(0);

  const getData = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>res.json());

    const initData = res.slice(0,20).map((it)=>{
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random()*5)+1,
        created_data : new Date().getTime(),
        id : deaId.current++
      };
    });

    dispatch({type: "INIT", data: initData});
  };

  useEffect(()=>{
    getData();
  },[]);


const onCreate =useCallback(
(author, content, emotion) =>{
  dispatch({type: "CREATE", data:{author,content,emotion,id :deaId.current}});
  deaId.current+= 1;      
  },[]);

  const onEdit =useCallback((targetId,newcontent) =>{
    dispatch({type: "EDIT", targetId, newcontent});
  },[]);


  const onDelete = useCallback((targetId) =>{
    dispatch({type: "DELETE" , targetId })
  },[]);

  const getDiaryAnal= useMemo(()=>{
    const goodCount = data.filter((it) => it.emotion>=3).length;
    const bac = data.length - goodCount;
    return{goodCount,bac};
  },[data.length]);

  const memorizedpatches = useMemo(()=>{
    return {onCreate, onDelete, onEdit};
  },[]);

  const {goodCount,bac} = getDiaryAnal;

  return (

    <DiaryContext.Provider value={data}>
      <stateContext.Provider value={memorizedpatches}>
      
    <div className="App">
      <DiaryEditorr onCreate={onCreate} />
      <DiaryList onDelete={onDelete}onEdit = {onEdit} key={deaId.id}/>
    </div>
      </stateContext.Provider>
    </DiaryContext.Provider>
  );

}

export default App;
