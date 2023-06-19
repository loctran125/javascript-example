const fs = require("fs");

const start = Date.now();

function time(start) {
  return Date.now() - start;
}

// setTimeout(()=>{
//     const lag = time(start)
//     console.log(`setTimeOut 1 - 0ms: thời gian chạy ${lag}ms` )

// }, 0)

// setTimeout(()=>{
//     const lag = time(start)
//     console.log(`setTimeOut 2 - 0ms: thời gian chạy ${lag}ms` )

// }, 0)

// fs.readFile(__filename, ()=>{
//     setTimeout(()=>{
//         const lag = time(start)
//         console.log(`setTimeOut 1 - 0ms: thời gian chạy ${lag}ms` )

//     }, 0)

//     setTimeout(()=>{
//         const lag = time(start)
//         console.log(`setTimeOut 2 - 0ms: thời gian chạy ${lag}ms` )

//     }, 0)
// })

// fs.readFile(__filename,()=>{
//     console.log("I/O callback:" + __filename)
// })
setImmediate(function () {
  const lag = time(start);
  console.log(`setImmediate - 0ms: thời gian chạy ${lag}ms`);
}, 0);
process.nextTick(function () {
  const lag = time(start);
  console.log(`nextTick - 0ms: thời gian chạy ${lag}ms`);
}, 0);
