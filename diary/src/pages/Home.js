import { useContext, useEffect, useState } from "react";

import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { DiaryStateContext } from "../App";

// 컴포넌트
import DiaryList from "../components/DiaryList";

const Home =()=>{

    useEffect(()=>{
        const titleEle = document.getElementsByTagName("title")[0];
        titleEle.innerHTML = `감성 일기장`;
    },[]);

    const diaryList = useContext(DiaryStateContext);

    const [curDate, setCurDate] = useState(new Date());
    const [data,setData] = useState([]);    // 


    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`;

    const increaseMonth = () => setCurDate(
        new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate())
    );

    const decreaseMonth = ()=>{
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()));
    }


    // 달에 따라서 데이터가 다르게 보이게 해야한다 
    useEffect(()=>{
        const firstDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            1
        ).getTime()

        const lastDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth()+1,
            0,
            23,
            59,
            59
    
        ).getTime();

        setData(diaryList.filter((it)=> firstDay<= it.date && it.date<=lastDay));
    },[diaryList,curDate]);

    useEffect(()=>{
        console.log(data);
    },[data]);


    return(
        <div>
            <MyHeader headText={headText} leftchild={<MyButton text={"<"} onClick={decreaseMonth}/>} 
            rightChild={<MyButton text={">"} onClick={increaseMonth}/>}/>

            <DiaryList diaryList={data}/>

        </div>
    );
};

export default Home;