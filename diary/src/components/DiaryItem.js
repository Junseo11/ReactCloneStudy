import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import React from "react";
import { useEffect } from "react";

const DiaryItem =({id, content,date, emotion })=>{

    const navigate = useNavigate();
    const strDate = new Date(date).toLocaleDateString();

    const goDetail = ()=>{
        navigate(`/diary/${id}`);
    };

    return <div className="DiaryItem">
        <div className={["emotion_img_wrapper",`emotion_img_wrapper${emotion}`].join(' ')} onClick={goDetail}>
            <img src={process.env.PUBLIC_URL + `esset/emotion${emotion}.png`}/> 
        </div>
        
        <div className="info_wrapper" onClick={goDetail}>
            <div className="diary_date">{strDate}</div>
            <div className="diary_content_preview">{content.slice(0,25)}</div>
        </div>

        <div className="editBtn">{<MyButton text={"수정하기"} onClick={()=>{
            navigate(`/edit/${id}`);
        }} /> }</div>

    </div>
};

export default React.memo(DiaryItem);