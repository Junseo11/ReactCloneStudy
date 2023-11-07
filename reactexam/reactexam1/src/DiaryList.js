import ListItem from "./ListItem";
import React from "react";

const DiaryList = ({onDelete,onEdit,data}) =>{

    return(
        <div className="DiaryList" >
            {data.map((it)=>(
                <div className="item">
                    <ListItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit}/>
         
                </div>
            ))}
        </div>
    )
}

export default React.memo(DiaryList);