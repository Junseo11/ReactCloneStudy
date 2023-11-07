import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Container from './Container';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';



function App() {

  const deaId = useRef(0);

  const [data, setData] = useState([]);

  const getData = async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>res.json());

    const initData = res.slice(0,20).map((it)=>{
      return{
        author : it.email,
        text : it.body,
        emotion : Math.floor(Math.random()*5)+1,
        create_date : new Date().getTime(),
        id : deaId.current ++
      }
    });
    setData(initData);
  };


  
  const onCreate = useCallback((author, text, emotion)=>{
    const create_date = new Date().getTime();
    const newItem = {
      author: author,
      text: text,
      emotion: emotion,
      create_date,
      id: deaId.current
    };
    deaId.current ++
    setData((data)=>[newItem, ...data]);
  },[]);


  useEffect(()=>{
    getData();
  },[]);

  const onDelete =useCallback((Id)=>{
    setData((data)=> data.filter((it)=>it.id !== Id));
  },[]);

  const onEdit = useCallback((targetId, newContent)=>{
    setData((data)=>data.map((it)=>it.id === targetId ? {...it,text : newContent} : it))
  },[]);

  return (
    <div className="App">
      <DiaryEditor onCreate ={onCreate}/>
      <DiaryList onDelete={onDelete} onEdit={onEdit} data={data}/>
    </div>
  );
}

export default App;
