//논리연산자
//|| or
//&& and
// ! not

//or: 첫번쨰 true를 발견하는 즉시 멈춤
//and: 첫번째 false를 발견하는 즉시 머뭋ㅁ

//비율이 적은 순으로 앞에 배치해야 성능이 좋다

const age=prompt("나이가?");
const isAge =age>19;

if(isAge){
    console.log("돌아가");
}

const gender="f";
const name="jane";
const isAdult=true;

//우선순위  and >or
if(gender ==='M' && name==='Mike' ||isAdult){
    console.log("통과");
}