import { Link } from "react-router-dom"

const RouteTest = ()=>{
    return(
    <>
        <Link to={'/'}>홈</Link>
        <br/>
        <Link to={'/Edit'}>edit</Link>
        <br/>
        <Link to={'/New'}>new</Link>
        <br/>
        <Link to={'/Diary'}>Diary</Link>
    </>

    );
};

export default RouteTest;