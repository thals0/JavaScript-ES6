// ES6 방법으로 상속 기능 구현
// class

class 부모 {
  constructor(name) {
    this.name = name;
    // 자식이 직접 함수를 가짐
    // this.sayHi = function () {
    //   console.log("hi");
    // };
  }
  // 부모.prototype에 추가됨
  sayHi() {
    console.log("hi");
  }
}

// class에 함수 추가 (여러개 가능)
부모.prototype.sayHello = function () {
  console.log("hello");
};
let 자식 = new 부모("lee");
console.log(자식);

// 부모의 prototype 출력
자식.__proto__;
Object.getPrototypeOf(자식);
