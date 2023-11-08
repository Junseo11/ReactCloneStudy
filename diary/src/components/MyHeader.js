const MyHeader =({headText, leftchild, rightChild})=>{
    return(
        <header>
            <div className="head_btn_left">{leftchild}</div>
            <div className="head_text">{headText}</div>
            <div className="head_btn_right">{rightChild}</div>
        </header>
    );
};

export default MyHeader;