// 비동기 처리 


//async
function hello(){
    return "hi";
}

async function helloAsync(){  //async키워드 적용시 promise를 처리하는 비동기 함수가 된다 
    await delay(3);     // await 뒤에 있는 함수 작동 끝나기 전까지 그 밑에 작동 실행 x -> 동기적인
    return "hello";
}

console.log(hello());
console.log(helloAsync());
helloAsync().then((res)=>{  //async키워드 사용시 then 키워드 사용가능   async붙은 함수의 리턴값을 then으로 사용가능하다 
    console.log(res);
});

function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("기다림");
            resolve();  //비동기 작업할수 있도록 도와준다   작업을 성공적으로 완료했다고 알려줌
        },ms);
    });
}