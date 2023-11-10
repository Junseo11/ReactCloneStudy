
import './App.css';

import{BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import React, { useReducer, useRef } from 'react';

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

  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiartDispatchContext = React.createContext();

const dummy= [
  {
    id:1,
    emotion:1,
    content : "오늘의일기1",
    date : 1699513074390,
  },
  {
    id:2,
    emotion:2,
    content : "오늘의일기2",
    date : 1699513074391,
  },

  {
    id:3,
    emotion:3,
    content : "오늘의일기3",
    date : 1699513074392,
  },

  {
    id:4,
    emotion:4,
    content : "오늘의일기4",
    date : 1699513074393,
  },
  {
    id:5,
    emotion:5,
    content : "오늘의일기5",
    date : 1699513074394,
  },
];


function App() {

  const [data, dispatch] = useReducer(reducer, dummy);
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
            <Route path='/Edit' element={<Edit/>}/>
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
