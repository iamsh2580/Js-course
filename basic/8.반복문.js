//반복문
//:동일한 작업을 여러번 반복

//for
//for(초기값,조건,코드 실행 후 작업){...}

for(let i=0;i<10;i++){
    console.log(i+1);
}

//while
// 벼눗값 while(변수<10){..}

let j=0;
while(j<10){
    console.log(j);
    j++;
}

//do-while
//변수값 do{...}while(조건)

//break :멈추고 빠져나옴
//continue:멈추고 다음 반복으로 진행

while(true){
    let answer=confirm("계속?");
    if(!answer){
        break;
    }
}

//continue
for(let i=0;i<10;i++){
    if(i%2){
        continue;
    }
    console.log(i);
}
//먕확한 횟수가 정해졌으면 for 그외에는 while