
import { DiaryContext } from "./App";
import List from "./list";
import React,{ useContext, useEffect, useRef, useState } from "react";


const DiaryList = () =>{
    const diaryList = useContext(DiaryContext);
    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{diaryList.length} 개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it)=>(
                    <List key={it.id} {...it}/>
                    
                ))}
            </div>
            
        </div>
    );
};

    DiaryList.defaultProps = {
        diaryList: [],
    };


export default DiaryList;