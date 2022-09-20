// getter, setter

let student = {
  name: "bay",
  age: 24,
  // getter: return이 있어야함
  get nextAge() {
    return this.age + 1;
  },
  // setter: 파라미터가 1개 있어야함
  set setAge(age) {
    this.age = parseInt(age);
  },
};

student.setAge = "23";
student.nextAge;

// class에서도 getter, setter 사용가능
class person {
  constructor() {
    this.name = "bay";
    this.age = 24;
  }
  get nextAge() {
    return this.age + 1;
  }
  set setAge(age) {
    this.age = parseInt(age);
  }
}
let person1 = new person();
