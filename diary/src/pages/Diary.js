import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyHeader from "../components/MyHeader";
import {StringToDate} from "../util/date"
import MyButton from "../components/MyButton";
import { emotionList } from "../util/emotion";

const Diary =()=>{
    const {id} = useParams();

    const navigater = useNavigate();

    const diarylist = useContext(DiaryStateContext);
    const [originDiary, setOriginDiary] = useState();

    useEffect(()=>{
        const titleEle = document.getElementsByTagName("title")[0];
        titleEle.innerHTML = `감성 일기장 - ${id}번째 일기`;
    },[])

    useEffect(()=>{
        const targetDiary = diarylist.find((it)=> parseInt(it.id) === parseInt(id));

        if(targetDiary){
            setOriginDiary(targetDiary);
        }
        else{
            navigater("/",{replace: true});
        }
    },[id,diarylist]);


    if(!originDiary){
        return <div className="DiaryPage">로딩중입니다...</div>
    }
    else{
        const currentEmotion = emotionList.find((it)=>parseInt(it.emotion_id) == parseInt(originDiary.emotion));
        console.log(currentEmotion);
        return(
            <div className="diary">
                <MyHeader leftchild={<MyButton text={"<뒤로가기"} 
                onClick={()=>navigater(-1)}/>} 
                headText={`${StringToDate(new Date(originDiary.date))}기록`}
                rightChild={<MyButton text={"수정하기"} onClick={()=>navigater(`/Edit/${originDiary.id}`)}/>}
                />

                <article>
                    <section>
                        <h4>
                            오늘의 감정
                        </h4> 
                        <div className={["diary_img_wrapper",`diary_img_wrapper_${currentEmotion.emotion_id}`].join(" ")}><img src={currentEmotion.emotion_img}/></div>
                        <div className="emotion_descript">{currentEmotion.emotion_desc}</div>
                    </section>

                    <section>
                        <h4>오늘의 일기</h4>
                        <div className="diary_content_wrapper">
                            <p>{originDiary.content}</p>
                        </div>
                    </section>
                </article>

                
            </div>
        );

    }
};

export default Diary;