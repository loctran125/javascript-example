const year = 2023;
function getDate(month, day) {
  return `${this.year}-${month}-${day}`;
}
const object = { year: 2024 };

console.log(getDate.call(null, 3, 8));
console.log(getDate.call(object, 3, 8));
console.log(getDate.apply(object, [3, 8]));
console.log(getDate.bind(object)(3, 8));
