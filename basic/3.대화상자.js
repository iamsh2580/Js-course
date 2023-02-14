//alert: 알려줌
//prompt: 입력받음
//confirm : 확인받음

//prompt
const name = prompt("이름을 입력");
alert("횐영합니다," + name+"님");
console.log(`환영`+name+'님');
const name2=prompt("예약일을 입력","2020-10");//후자는 디폴트 값으로 입력창에 뜬다

//confirm
const isAdult=confirm("성인?");
console.log(isAdult);
//확인 -> true, 취소 ->false

//특징
//스크립트 일시 정지
//스타일링 불가능

