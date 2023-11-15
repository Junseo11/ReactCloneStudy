
import './App.css';

import{BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import React, { useEffect, useReducer, useRef } from 'react';

const reducer =(state, action)=>{
  let newState = [];
  switch(action.type){
    case "INIT":{
      return action.data;
    }
    case "CREATE":{
      const newItem = {
        ...action.data
      };
      newState= [newItem,...state];
      break;
    }
    case "REMOVE":{
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
    case "EDIT":{
      newState = state.map((it)=>it.id === action.data.id ? {...action.data} : it)
      break;
    }

    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));

  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiartDispatchContext = React.createContext();



function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(()=>{
    const diaryList =localStorage.getItem("diary");
    if(diaryList){
      const diarylist = JSON.parse(diaryList).sort((a,b)=> b.id - a.id);

      if(diarylist.length>=1){
        dataId.current = diarylist[0].id+1;

        dispatch({type:"INIT",data:diarylist });
      }
    }
  },[]);




  const dataId = useRef(0);

  const onCreate =(date, content, emotion)=>{
    dispatch
    ({
      type : "CREATE",
      data : 
      {
        id : dataId.current,
        date : new Date(date).getTime(),
        content,
        emotion 
      }
    });
    dataId.current++;
  };

  const onRemove =(targetId)=>{
    dispatch({type : "REMOVE",targetId});
  };

  const onEdit =(targetId, newContent, date, emotion)=>{
    dispatch({ 
      type : "EDIT",
      data : {
        id : targetId,
        content : newContent,
        date : new Date(date).getTime(),
        emotion : emotion
      }
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiartDispatchContext.Provider value={{onCreate,onEdit,onRemove}}>
        <BrowserRouter>
          <div className='App'>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Edit/:id' element={<Edit/>}/>
            <Route path='/New' element={<New/>}/>
            <Route path='/Diary/:id' element={<Diary/>}/>
          </Routes>
         </div>
        </BrowserRouter>
      </DiartDispatchContext.Provider>
    </DiaryStateContext.Provider>   
  );
}

export default App;
