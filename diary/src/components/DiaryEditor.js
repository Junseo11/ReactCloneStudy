import { useCallback, useContext, useEffect, useRef, useState } from "react";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import {Navigate, useNavigate} from "react-router-dom";
import EmotionItem from "./EmotionItem";
import { DiartDispatchContext } from "../App";
import { StringToDate } from "../util/date";
import { emotionList } from "../util/emotion";

const DiaryEdior =({isEdit, originData})=>{
    const navigate = useNavigate();
    const [date,setDate] = useState(StringToDate(new Date()));
    const [emotion, setImotion] = useState(3);
    const [content, setContent] = useState("");
    const {onCreate, onEdit,onRemove} = useContext(DiartDispatchContext);

    const contentRef = useRef();


    const onEmotionHandle = useCallback((emotion)=>{
        setImotion(emotion);
    },[]);

    const handleSubmit = () =>{
        if(content.length<1){
            contentRef.current.focus();
            return;
        }

        if(window.confirm(isEdit ? "일기를 수정하시겠습니까" : "일기를 저장하시겠습니까")){
            if(isEdit){
                onEdit(originData.id,date,content,emotion);
            }
            else{
                onCreate(date,content,emotion);
            }
        }
   
        navigate('/');
    };

    const handleRemove = ()=>{
        if(window.confirm("정말 삭제하시겠습니까?")){
            onRemove(originData.id);
            navigate('/',{replace:true});
        }
        else{

        }

    }

    useEffect(()=>{
        if(isEdit){
            setDate(StringToDate(new Date(parseInt(originData.date))));
            setImotion(originData.emotion);
            setContent(originData.content);
        }

    },[isEdit,originData]);

    return (
        <div className="DiaryEdior">
            <MyHeader leftchild={<MyButton onClick={()=> navigate(-1)} text={"<뒤로가기"}/>} headText={isEdit? "일기 수정하기":"새 일기 쓰기"} 
            rightChild={isEdit && <MyButton onClick={handleRemove} text={"삭제하기"} type={"Negative"}/>}/>

            <div>
                <section>
                    <h4>오늘은 언제인가요?</h4>

                    <div className="input-Box">
                        <input className="input-date" type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                </section>

                <section>
                    <h4>오늘의 감정</h4>
                    <div className="emotionitem_wrapper">
                        {emotionList.map((it)=>{
                            return <EmotionItem key={it.emotion_id} {...it} onClick={onEmotionHandle} isSelected={emotion === it.emotion_id}/>
                        })
                        }
                    </div>
                </section>

                <section>
                    <h4>오늘의 일기</h4>
                    <div className="input_diary">
                        <textarea value={content} onChange={(e)=> setContent(e.target.value)} ref={contentRef} placeholder="오늘은 어땠나요?"/>
                    </div>
                </section>

                <section>
                    <div className="control_box">
                        <MyButton text={"뒤로가기"} onClick={()=>navigate(-1)}/>
                        <MyButton text={"제출"} type={"positive"} onClick={handleSubmit}/>
                    </div>
                </section>

 
            </div>
        </div>
    );
};

export default DiaryEdior;