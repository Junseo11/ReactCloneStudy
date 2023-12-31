import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEdior from "../components/DiaryEditor";

const Edit =()=>{
    const navigate = useNavigate();

    const {id} = useParams();
    const diaryList = useContext(DiaryStateContext);

    const [originData, setOriginData] = useState();

    useEffect(()=>{
        const titleEle = document.getElementsByTagName("title")[0];
        titleEle.innerHTML = `감성 일기장 - ${id}번째 일기 수정`;
    },[])


    useEffect(()=>{
        const targetDiary = diaryList.find((it)=> parseInt(it.id) === parseInt(id));

        if(targetDiary){
            setOriginData(targetDiary);
        }
        else{
            navigate("/",{replace : true });
        }
      
    },[id,diaryList]);

    return(
        <div>
            {originData && <DiaryEdior originData={originData} isEdit={true}/>}
        </div>
    );
};

export default Edit;