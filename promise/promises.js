const promise1 = new Promise(function a(resolve, reject) {
  setTimeout(function b() {
    resolve("hello");
  }, 5000);
});

const promise2 = new Promise(function c(resolve, reject) {
  setTimeout(function d() {
    resolve("worlds");
  }, 4000);
});

(async () => {
  console.time("timeLeap");

  const p1 = await promise1;

  const p2 = await promise2;

  console.log(`${p1} ${p2}`);

  console.timeEnd("timeLeap");
})();
