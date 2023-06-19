//Khi khai báo new promise thì promise đã được thực thi mặc dù không gọi p1 


const p1 = new Promise(function a(resolve, reject) {
  setTimeout(function b() {
    console.log("do1");
    resolve("do2");
    console.log("do3");
  }, 5000);
});

const p2 = new Promise(function c(resolve, reject) {
  setTimeout(function d() {
    console.log("do4");
    resolve("do5");
    console.log("do6");
  }, 4000);
});

p1.then(function e(data) {
  console.log("do7");
  console.log(data);
  return p2;
}).then(function f(data) {
  console.log("do8");
  console.log(data);
});
