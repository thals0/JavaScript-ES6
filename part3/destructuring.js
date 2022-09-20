let arr = [2, 3, 4];
let [a, b, c] = [2, 3, 4];

let obj = { name: "lee", age: 30 };
// let name = obj.name;
// let age = obj.age;

// let { name, age } = { name: "lee", age: 20 };
// 변수명 변경 가능 name -> lastName
// 기본값(default parameter 지정 가능)
let { name: lastName, age = 24 } = { name: "lee" };

// 반대로 변수들을 object에 집어넣고 싶은 경우
let nick = "lee";
let id = "bay";
// let object = { nick: nick, id: id };
let object = { nick, id };

// 함수 파라미터 만들 때도 destructuring 문법 사용가능
// let obj = { name: "lee", age: 30 };
function func({ a, b }) {
  console.log(a);
  console.log(b);
}
func({ a: "lee", b: 30 });
