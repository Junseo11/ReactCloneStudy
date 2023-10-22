//모듈화

const add = (a,b) => a+b;
const sub = (a,b) => a-b;

module.exports ={   //모듈객체 내보내기
    moduleName : "calc module",
    add : add,
    sub : sub
};