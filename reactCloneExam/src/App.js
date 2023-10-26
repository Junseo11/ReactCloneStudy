
import './App.css';
import DiaryEditorr from './DiaryEditor';
import DiaryList from './DiaryList';

const dummylist =[
  {
    id: 1,
    author: "q",
    content : "하이 1",
    emotion:1,
    created_data: new Date().getTime()
  },
  {
    id: 2,
    author: "w",
    content : "하이 2",
    emotion:2,
    created_data: new Date().getTime()
  },
  {
    id: 3,
    author: "e",
    content : "하이 3",
    emotion:3,
    created_data: new Date().getTime()
  }

]

function App() {
  return (
    <div className="App">
      <DiaryEditorr/>
      <DiaryList diaryList={dummylist}/>
    </div>
  );
}

export default App;
