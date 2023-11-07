import React,{ useEffect, useRef, useState,useContext} from "react";
import { DiaryContext,stateContext } from "./App";

const List = ({id,author,content,emotion,created_data}) =>{

    const {onDelete} = useContext(stateContext);
    const {onEdit} = useContext(stateContext);

    const[isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);  
    const [localcontent, setLocalContent] = useState(content);

    useEffect(()=>{
        console.log(`${id}번째 아이템 랜더`);
    })

    const handleRemov = () =>{
        if(window.confirm(`${id}번째 데이터 진짜 삭제?`)){
            onDelete(id);
        }
    }

    const quitEdit = () =>{
        setIsEdit(false);
        setLocalContent(content);
    }

    const localcontentRef = useRef();

    const handleEdit = () =>{
        if(localcontent.length<5){
            localcontentRef.current.focus();  // ref를 사용해 현재 ref가 가르키고 있는 dom구조를 focus 한다
            return;
        }

        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
            onEdit(id,localcontent);
            toggleIsEdit();
        }
      
    }

    return(
        <div className="Item">
            <span className="info">
                작성자 : {author} | 감정 : {emotion} 
            </span>
            <span className="date">{new Date(created_data).toLocaleString()} </span>
            <br/><br/>
            
            <div className="content">
                {isEdit ? (
                    <>
                        <textarea
                        ref={localcontentRef}
                            value={localcontent}
                            onChange={(e)=>setLocalContent(e.target.value)}
                        ></textarea>
                        
                        <button onClick={quitEdit}>수정취소</button>
                        <button onClick={handleEdit}>수정완료</button>
                    </>
                ):(
                    <>{content}
                        <button onClick={handleRemov}>삭제하기</button>
                        <button onClick={toggleIsEdit}>수정하기</button>
                    </>
                )}
            
            </div>
        </div>
    );
}

export default React.memo(List);