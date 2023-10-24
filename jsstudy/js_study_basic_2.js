//객체 ~ promise 등 

// 3항연산자
let a =3; 
a >= 0 ? console.log("양수") : console.log("음수");  

let b = [];
const result = b.length === 0 ? "빈배열": "빈배열" ; // 변수에 대입
console.log(result);



const getName = (person) =>{    //person에는 undfined가 들어간다
    if(!person){
        return "객체가 아닙니다.";      //변수가 정의되있지 않으면 오류 x undfined
    }
    else{
        return person.name;
    }
};

let person;
const name = getName(person);
console.log(name);


//조건문 업그레이드
function isKorea(food){
    if(["a","b","c"].includes(food)){
        return true;
    }
    else{
        return false;
    }
}

console.log(isKorea("a"));
console.log(isKorea("s"));

const meal = {
    한식 : "불고기",
    중식: "멘보샤",
    일식 : "초밥"
};

const getMeal = (mealType) =>{
    return meal[mealType] || "굶기";    //meal 객체 리터럴의 타입 key로 접근 
};

console.log(getMeal("중식"));
console.log(getMeal()); //아무것도 안넣으면 or 의 두번째 출력


//배열 비 구조화 할당
let ar = ["a","b","c"];
let [one,two,three] = ar;   //변수 배열 비 구조화 할당
console.log(`${one} ${two} ${three}`);

let f = 1;
let f1 = 2;     

[f,f1] = [f1,f];    //순서 바꾸기
console.log(f,f1);

//객체 비구조화 할당 
let object = {one: "one" , two : "two" , three: "three"};
let {one1, two1: two2, three1}= object;  // 키 값을 기준으로 할당 따라서 순서 달라져도 상관없음 


//spread 연산자 
const aar = ["a","b"];
const bar = ["a","b","c"];
const car = [...aar,...bar];   //...을 붙이면 축소 시켜 보여줄수 있다
console.log(car);


//비동기 - 여러 작업을 동시에 실행시킨다 
function taskA(a,b,cb){
    setTimeout(() =>{
        const res = a+b;
        cb(res)
    },2000);    //2 초 뒤에 작업 수행 
}

taskA(1,2,(res) =>{
    console.log(res);
});        // taskA의 작업이 끝날때까지 출력창은 동작하지 않는다 -> 동기처리
console.log("코드끝")   //먼저 지시된 작업 전에 다른 작업 실행 -> 비동기 

function taskB(a,cb){   // taskA보다 먼저 실행된다. 1초만 기다리기 때문 
    setTimeout(()=>{
        const res = a*2;
        cb(res);
    },1000);
}

taskB(7,(res)=>{    //콜백함수 - 다른 함수의 매개변수로 전달되는 함수
    console.log(res);
})


//promise 객체 - 줄지은 콜백을 해결 
function isPos(num, resolve, reject){   //콜백함수를 통해 각 함수 불러온다 
    setTimeout(()=>{
        if(typeof num === "number"){
            resolve(num >= 0 ? "양수" : "음수");
        }
        else{
            reject("숫자형 값 x");

        }
    },2000);
}

isPos('a',(res)=>{          // 콜백 함수 성공 함수와 실패 함수를 인수로 전달 
    console.log("성공적으로 수행됨 :",res)
},
(err)=>{
    console.log("실패 : ",err)
});
 
function isPosP(num){
    const executor = (resolve, reject) =>{      //비동기 작업을 실질적으로 실행하는 함수
        setTimeout(()=>{
            if(typeof num === "number"){
                resolve(num >= 0 ? "양수" : "음수");
            }
            else{
                reject("숫자형 값 x");
            }
        },2000); 
    };

    const asyncTask = new Promise(executor); // executor을 실행 priomise 객체로 생성하고 호출하면 executor 가 바로 수행된다  
    return asyncTask;   //promise 반환 
}
 
const res = isPosP([]);     //executer의 결과값 사용가능 
res     //promise 객체 반환받아서 사용한다 
.then((res)=>{console.log("작업성공:",res); //resolve 받아온다 
})
.catch((err)=>{ // reject 받아온다
    console.log("작업실패",err) 
});


function tA(a,b){
    const executorA = (resolve, reject) =>{
        setTimeout(()=>{
            const res = a+b;
            resolve(res);
        },3000);
    }
    const sync = new Promise(executorA);
    return sync;
}

function tB(a){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a+1;
            resolve(res);
        },1000)
    });

}

function tC(a){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a*2;
            resolve(res);
        },2000);
    });

}

tA(5,1).then((ares)=>{
    console.log("res:",ares);
    tB(ares).then((bres)=>{
        console.log("resb:",bres);
        tC(bres).then((cres)=>{
            console.log("resc",cres);
        })
    })
})



