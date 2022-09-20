// primitive data type
let name1 = "lee";
let name2 = name1;
name1 = "kim";
console.log(name1); // kim
console.log(name2); // lee

// reference data type
let name1 = { name: "lee" };
let name2 = name1;
name1.name = "kim";
console.log(name1); // { name: 'kim' }
console.log(name2); // { name: 'kim' }

// primitive/reference data type 예제1
let name1 = { name: "lee" };
let name2 = { name: "lee" };

console.log(name1 === name2);
// false : 가리키는 화살표가 다르기 때문

// primitive/reference data type 예제2
let name1 = { name: "lee" };
function 변경(obj) {
  obj.name = "park";
}
변경(name1);
console.log(name1); // { name: "park" }

// 재할당해주는 함수
function 변경2(obj) {
  obj = { name: "park" };
}
변경2(name1);
console.log(name1); // { name: "lee" }
