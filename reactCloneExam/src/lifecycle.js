import React,{useEffect,useState} from "react";

const UnmountTest = () =>{

    useEffect(()=>{
        console.log("mount");

        return ()=>{
             console.log("unmount");
            };
    },[]);

    return <div>
        Unmount Testing conpnent;
    </div>
}

const Lifecycle = () =>{
    const [isVisible,setIsvisible] = useState(false);
    const toggle = () => setIsvisible(!isVisible);

    return (
        <div style={{padding:20}}>
            <button onClick={toggle}>on/off</button>
            {isVisible && <UnmountTest/>}
    
        </div>
    );
};

export default Lifecycle;