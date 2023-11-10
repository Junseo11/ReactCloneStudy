import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import DiaryItem from "./DiaryItem";

const optionList = [
    {value : "latest", name : "최신순"},
    {value : "oldest", name : "오래된순"}
];

const filterList =[
    {value : "all", name : "전체"},
    {value: "good", name: "좋은것만"},
    {value: "bed", name: "나쁜것만"}
];


const SortOption = ({value, onChange, optionList})=>{
    return(
        <select className="SortOption" value={value} onChange={(e)=>onChange(e.target.value)}>
            {optionList.map((it,idx)=>{
                return <option value={it.value} key={idx}>{it.name}</option>
            })}
        </select>
    );
};


const DiaryList =({diaryList}) =>{      // 필터를 거쳐 가지고 있는 리스트 

    const [option, setOption] = useState('latest');
    const [filter, setFilter] = useState('all');

    const navigate = useNavigate();

    const sortProcess = () =>{

        const filteroption = (item)=>{
            if(filter === "good"){
                return parseInt(item.emotion) <= 3;
            }
            else{
                return parseInt(item.emotion) >3;
            }

        }

        const compare = (a,b) =>{
            if(option =="latest"){
                return parseInt(b.date) - parseInt(a.date);
            }else{
                return parseInt(a.date) - parseInt(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(diaryList));

        const filteredList = filter === "all" ? copyList : copyList.filter((it)=> filteroption(it));

        const sortList = filteredList.sort(compare);

        return sortList;
    };
    return(
        <div className="DiaryList">
            <div className="menu_wrpper">
                <div className="left_col">
                    <SortOption value={option} onChange={setOption} optionList={optionList} />
                    <SortOption value={filter} onChange={setFilter} optionList={filterList}/>
                </div>
                <div className="right_col">
                    <MyButton text={"작성페이지로 이동"} type={'positive'} onClick={()=>navigate("./New")}/>
                </div>
            </div>
    
            {sortProcess().map((it)=>{
                return <DiaryItem key={it.id} {...it}/>
            })}
        </div>
    );
};

DiaryList.defaultProps ={  // prop받지 않을 경우 빈배열 리턴
    diaryList:[],
};

export default DiaryList;