class grandFather {
  constructor(name) {
    this.성 = "lee";
    this.이름 = name;
  }
  sayHi() {
    console.log("Hi");
  }
}

class father extends grandFather {
  constructor(name) {
    super(name);
    this.age = 50;
  }
  sayHi() {
    console.log("Hello"); // hello
    super.sayHi(); // hi
  }
}

let father1 = new father("주용");

console.log(father1);
