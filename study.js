

async function d(){
    await delay(5);
    return "코드종료";
}

function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("기다리는중");
            resolve();
        },ms);
    });
}

d().then((res)=>{
    console.log(res);
});





