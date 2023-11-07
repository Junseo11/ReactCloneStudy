import React,{ useState } from "react";


const ListItem = ({id,author,create_date,text,emotion,onDelete,onEdit})=>{

    const [isEdit,setIsEdit] = useState(false);
    const toggle = ()=> setIsEdit(!isEdit);

    const [content ,setConttent] = useState(text);

    const handleRemov =()=>{
        if(window.confirm("진짜 삭제?")){
            onDelete(id);
        }
    }

    const quitEdit = ()=>{
        setIsEdit(false);
        setConttent(text);
    }

    const handelsubmit=()=>{
        onEdit(id,content);
        setIsEdit(false);
    }

    return(
        <div>
            <div>작성자 : {author}</div>
            <div>시간 : {new Date(create_date).toLocaleString()}</div>
            <div>내용 : {text}</div>
            <div>감정 : {emotion}</div>

            <div>
                {isEdit ? (
                    <>
                        <textarea onChange={(e)=>setConttent(e.target.value)} value={content}></textarea>           
                        <button onClick={quitEdit}>수정취소</button>
                        <button onClick={handelsubmit}>수정완료</button>

                    </> 
                ):(
                    <>
                    <button onClick={toggle}>수정하기</button>
                    <button onClick={handleRemov}>삭제하기</button>
                    </>
                    
                )}
            </div>
            

        </div>
    )
}

export default React.memo(ListItem);