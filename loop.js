const total = 1000000;
const milArr = Array(total);

console.time("timer");

// for(let index = 0; index < total; index++){ //2.54ms
// }

// for(let index = 0; index < milArr.length; index++){ //2.84ms
// }

// milArr.map(element =>{ //8.40ms
// })

milArr.forEach(element =>{ //1.82ms
})

// for (const iterator of milArr) { //17ms
// }
console.timeEnd("timer");


