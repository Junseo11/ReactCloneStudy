import DiaryEdior from "../components/DiaryEditor";
import { useEffect } from "react";


const New =()=>{

    useEffect(()=>{
        const titleEle = document.getElementsByTagName("title")[0];
        titleEle.innerHTML = `감성 일기장 - 새 일기`;
    },[])


    return <div> <DiaryEdior/></div>
};

export default New;