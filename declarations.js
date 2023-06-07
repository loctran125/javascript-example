//example 1
// let a;
// console.log(a); //undefined

//example 2
// console.log(a); // ReferenceError: a is not defined
// let a = 1;

//example 3
// if (true) {
//   var a = 1;
//   let b = 2;
// }
// console.log(a); // 1
// console.log(b); //ReferenceError: b is not defined

//example 4
function x() {
  var a = 1;
  let b = 2;
  global.c = 3;
}
x();
console.log(a); //ReferenceError: a is not defined
console.log(b); //ReferenceError: b is not defined
console.log(c); // 3