
const List = ({author,content,emotion,created_data})=>{
    return(
        <div > 

            <div>작성자 : {author}</div>
            <div>일기 : {content}</div>
            <div>감정 : {emotion}</div>
            <div>작성 시간 : {created_data}</div>
        </div>
    );
}

export default List;