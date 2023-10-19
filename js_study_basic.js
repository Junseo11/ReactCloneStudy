
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
        return `function ${this.key1}`  // this는 자신 객체 

    }
};

person.key1 = "vaye1";  //프로퍼티 수정
person.key3 = "new";    //프로퍼티 추가
person.key = null; // 프로퍼티 삭제

console.log(person.key2());


//배열 
let arr = [1,2,3,4];   //배열 리터럴 (자료형이 달라도 상관없다 
arr.push(5);    //배열 마지막에 추가
console.log(arr);


//배열 내장함수
arr.forEach((elm) => console.log(elm));  //순회

arr= arr.map((elm)=>elm*2); // 순회하면서 새로운 인덱스를 리턴 -> 원래 인덱스를 바꿔준다
console.log(arr);

let number =3;
console.log(arr.includes(number));  // 배열에 해당 값이 존재하는지 확인
console.log(arr.indexOf(number));


const arr1 = [
    {num: 1, color : "red"},
    {num: 2, color : "red1"},
    {num: 3, color : "red2"},
    {num: 4, color : "red3"}
]
console.log(arr1.slice(0,3));

let chars = ["나","다","가"];
chars.sort();   //원본 배열의 정렬
console.log(chars);

let n = [0,1,3,2,10,30,20]  //이대로 정렬시 아스키값대로 정렬된다
const compare = (a,b) =>{
    if(a>b){
        return 1;         //양수가 리턴되면 a가 뒤로 가게된다
    }
    if(a<b){
        return -1;
    }
    else{
        return 0;
    }
};

n.sort(compare);
console.log(n);


console.log(chars.join(","))    //인덱스 사이에 , 추가