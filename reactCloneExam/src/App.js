
import { useRef, useState } from 'react';
import './App.css';
import DiaryEditorr from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './lifecycle';


function App() {

  const [data,setData] = useState([]);

  const deaId = useRef(0);

  const onCreate = (author, content, emotion) =>{
    const created_data = new Date().getTime;
    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id : deaId.current
    };
    deaId.current+= 1;      
    setData([newItem, ...data]);
  };

  const onEdit = (targetId,newcontent) =>{
    setData(
      data.map((it)=>
        it.id === targetId ? {...it,content : newcontent} : it  ));
  };


  const onDelete = (targetId) =>{
    const newDataList = data.filter((it)=>it.id!=targetId);
    setData(newDataList);
    console.log(`${targetId}가 삭제되었습니다`);
  }

  return (
    <div className="App">
      <Lifecycle/>
      <DiaryEditorr onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} onEdit = {onEdit}/>
    </div>
  );
}

export default App;
