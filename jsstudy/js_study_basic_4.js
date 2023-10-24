
async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts"); // fetch는 api 호출할수 있도록 도와주는 api이다
    let jsonResponse = await response.json();  // await 비동기 처리 - 뒤의 작업이 완료된후 다음 작업 진행하게 해준다 
    console.log(jsonResponse);
}
getData();


