
const EmotionItem =({emotion_desc, emotion_img, emotion_id,onClick, isSelected})=>{
    return(
        <div className={["emotion_item", isSelected ? `emotion_on_${emotion_id}` : "emotion_off"].join(" ")} key={emotion_id} onClick={()=>onClick(emotion_id)}>
            <img src={emotion_img}/>
            <span>{emotion_desc}</span>
        </div>
    )
};

export default EmotionItem;