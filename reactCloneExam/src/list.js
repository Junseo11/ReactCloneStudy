
const List = ({author,content,emotion,created_data}) =>{
    return(
        <div className="Item">
            <span className="info">
                작성자 : {author} | 감정 : {emotion} 
            </span>
            <span className="date">{new Date(created_data).toLocaleString()} </span>
            <br/><br/>
            <span className="content"> {content}</span>
        </div>
    );
}

export default List;