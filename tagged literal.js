// tagged literal
let 변수 = "bay";
let 문자 = `안녕하세요 ${변수} 입니다`;

function 해체분석기(문자들, 변수들) {
  // console.log(문자들);
  // console.log(변수들);
  console.log(문자들[0] + 변수들 + 문자들[1]);
}

해체분석기`안녕하세요 ${변수} 입니다`;

// tagged literal 연습문제1
let pants = 20;
let socks = 100;
function 해체분석기(a, b, c) {
  console.log(a[1] + b + a[0] + c);
}
function 해체분석기(a, ...b) {
  console.log(a[1] + b[0] + a[0] + b[1]);
}
해체분석기` pants ${pants} socks ${socks}`;

// tagged literal 연습문제2
// let pants = 0;
// let socks = 100;

function 해체분석기(a, ...b) {
  if (b[0] === 0) {
    console.log("바지 안 팔아요" + a[1] + b[1]);
  } else {
    console.log(a[0] + b[0] + a[1] + b[1]);
  }
}
해체분석기` pants ${pants} socks ${socks}`;
