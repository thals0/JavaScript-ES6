async function plus() {
  var calc = new Promise((성공, 실패) => {
    var result = 1 + 1;
    성공(result);
  });
  var result = await calc;
  console.log(result);
}
plus();
