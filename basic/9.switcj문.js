//switch
/*
switch(평가){
    case A:
        //A일때 실행 코드
    case B:
        //B일때 실행 코드
}
*/
//break;를 만나지 않으면 해당 밑 case의 실행문도 다 실행

let fruit =prompt("무슨 과일을 사고 싶나요?");

switch(fruit){
    case 사과:
        console.log("1000원");
        break;
    case 바나나:
        console.log("1500원");
        break;
    case "멜론":
    case "수박":
        console.log("2000원");
        break;
    default:
        console.log("품절입니다");
    }