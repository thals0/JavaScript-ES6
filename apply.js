// apply
let arr = [10, 20, 30];
function plus(a, b, c) {
  console.log(a + b + c);
}
plus.apply(undefined, arr);

let person = {
  hi: function () {
    console.log(this.name + " hi");
  },
};

let person2 = {
  name: "bay",
};
person.hi();
person.hi.apply(person2);
