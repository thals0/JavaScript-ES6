// Rest 파라미터
function func2(a, b, ...Rest) {
  console.log(Rest);
}
func2(1, 2, 3, 4, 5, 6, 7, 8);
