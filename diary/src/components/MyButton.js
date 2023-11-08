const MyButton = ({onClick, text, type })=>{

    const btnType = ["positive", "Negative"].includes(type) ?  type : "default";

    return(
        <button className={["MyButton", `Mybutton_${btnType}`].join(" ")} onClick={onClick}>{text}</button>
    );
};



export default MyButton;
