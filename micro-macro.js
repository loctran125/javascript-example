console.log("đây là code đồng bộ 1");

setTimeout(() => {
  console.log("đây là setTimeOut");
});
Promise.resolve().then(() => {
  console.log("Đây là promise 1");
});
queueMicrotask(() => {
  console.log("đây là queueMicrotask");
});
Promise.resolve().then(() => {
  console.log("Đây là promise 2");
});
console.log("đây là code đồng bộ 2");
