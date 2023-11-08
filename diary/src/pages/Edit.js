import { useNavigate, useSearchParams } from "react-router-dom";


const Edit =()=>{
    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();

    const path = query.get('path');
    console.log(path);

    const park = query.get("park");
    console.log(park);


    return(
        <div>
            <h2>이곳은 Edit입니다</h2>
            <button onClick={()=>setQuery({who: "susu"})}></button>
            <button onClick={()=>{
                navigate("/");
            }}>홈으로 이동</button>

            <button onClick={()=>{
                navigate(-1);
            }}>뒤로가기</button>
        </div>
    );
};

export default Edit;