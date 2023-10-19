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