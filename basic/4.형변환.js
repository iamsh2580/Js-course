//형변환
//자동형변환

//String() : 문자형으로 변환 
//Number() : 숫자형으로 변환
//Boolean() : 불린형으로 볂환

String(3);

//Number 
Number("1234"); //숫자로써진 문자 (문자 포함시 NaN)
Number("True"); //1
Number("False"); //0
Number(null) //0
Number(undefined) //NaN
Number(0) //false
Number('0') //true
Number('') //false
Number(' ') //true


//boolean 
//아래는 모두 false 이외는 트루
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)