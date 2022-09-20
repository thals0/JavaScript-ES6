// default
function plus(a, b = 2 * a) {
  console.log(a + b);
}
plus(1);

// arguments
function func(a, b, c) {
  // console.log(arguments);
  // console.log(arguments[0]);
  // for (var i = 0; i < arguments.length; i++) {
  //   console.log(arguments[i]);
  // }
  console.log(...arguments);
}
func(1, 2, 3);
