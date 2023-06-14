global.prop = 43
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func()); // Expected output: 42

const logProp = test.func;
console.log(logProp()); // Expected output: 43 this binding to global variable



const logProp2 = test.func.bind(test);
console.log(logProp2());