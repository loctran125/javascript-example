//Function trả về promise, sẽ thực thi function1 xong rồi mới thực thi function 2
function returnPromise1() {
  return new Promise(function a(resolve, reject) {
    setTimeout(function b() {
      console.log("do1");
      resolve("do2");
      console.log("do3");
    }, 5000);
  });
}
function returnPromise2() {
  return new Promise(function c(resolve, reject) {
    setTimeout(function d() {
      console.log("do4");
      resolve("do5");
      console.log("do6");
    }, 4000);
  });
}

returnPromise1()
  .then(function e(data) {
    console.log("do7");
    console.log(data);
    return returnPromise2();
    console.log("do8");
  })
  .then(function f(data) {
    console.log(data);
  });
