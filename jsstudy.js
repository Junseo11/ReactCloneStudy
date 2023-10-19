
//변수설정
let age = 25;       // var 대신 let 사용 
console.log(age);
const a = 20;       // const는 상수

//백틱
let num = `name : ${age}`; // 템플릿 리터럴 백틱 사용

//형변환
let num1 = 12;
let num2 = "2";
console.log(num1*num2);  // 문자열 자동으로 숫자 추론

let numchecj = num1 === num2 //값 뿐만 아니라 타입까지 비교 


//함수 
console.log(getArea(1,2));

function getArea(a,b){      // function 키워드 사용
    return a+b;
}

// 함수 표현식 
let hi = function(){    //변수안에 함수 담을수 있다. 
    return "heool";
}


console.log(hi());   //변수 명을 사용해 함수 호출해야한다.
// 함수 표현식 사용시 함수는 호출보다 아래 있어야 한다.


//화살표함수
let hi2 = () => "ㅂㅂㅂ";  //함수명 없이 사용가능 
console.log(hi2());


// 콜백함수 다른 함수의 매개변수로 들어가는 함수
function mod(call){
    call();
}

function acallback(){   //콜백 다른 함수의 매개변수로 들어간다
    console.log("hwi");
}
mod(acallback);


//객체 
let person = { // 객체 리터럴 형식
    key : "value",  // 객체 프로퍼티
    key1 : "2",
    key2 : function(){

    }
};

console.log(person.key);
