var promise = new Promise(function (성공, 실패) {
  setTimeout(function () {
    성공();
  }, 1000);
});

promise
  .then(function () {
    console.log("1초 대기 성공했습니다");
  })
  .catch(function () {
    console.log("실패했습니다");
  });
