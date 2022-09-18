// constructor(생성자)

let student1 = {
  name: "kim",
  age: 24,
  sayHi: function () {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  },
};

// 부모
function Student(name, age) {
  // this : 새로 생성되는 Object(instance)
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  };
}

// prototype
Student.prototype.gender = "여";

// 자식
let student1 = new Student("kim", 15);
let student2 = new Student("lee", 24);
// student1에 없는 요소는 부모의 요소를 상속받아옴
console.log(student1.gender);
console.log(student1);
student1.sayHi();
student2.sayHi();

// __proto__로 강제로 부모 등록
let 부모 = { name: "kim" };
let 자식 = {};
자식.__proto__ = 부모;
console.log(자식.name);

// ES5 방법으로 상속 기능 구현
// Object.create(물려받을 부모 object);

let 부모 = { name: "kim", age: 50 };
let 자식 = Object.create(부모);
// 1. 자식이 name을 직접 가지고 있나? X
// 2. 그럼 자식의 부모 prototype에는 name이 있나? O
console.log(자식); // {}
console.log(자식.name); // kim

자식.age = 20;
console.log(자식); // { age: 20 }

// 자식의 자식도 만들기 가능 (상속 가능)
let 손자 = Object.create(자식);
console.log(손자); // {}
console.log(손자.name); // kim
