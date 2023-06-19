// function makeRequest(location){
//     return new Promise((resolve, reject) =>{
//         console.log(`Making Request to ${location}`)
//         if(location == 'Google')
//             resolve('Google says hi')
//         else
//             reject('We can only talk to Google')
//     })
// }
// function processRequest(response){
//     return new Promise((resolve, reject) =>{
//         console.log('Processing response')
//         resolve(`Extra Information + ${response}`)
//     })
// }

// makeRequest('Google').then(response => {
//     console.log("Response Reveived")
//     return processeRequest(response)
// }).then(processedResponse =>{
//     console.log(processedResponse)
// }).catch(err =>{
//     console.log(err)
// })

// async function doWork(){
//     try {
//         const response = await makeRequest('Facebook')
//         console.log('Response Received')
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse)
//     } catch (error) {
//         console.log(error)
//     }
// }

// doWork()
// async function abc() {
//     console.log(8);

//     await Promise.resolve(2).then(console.log);

//     console.log(3);
//   }

//   setTimeout(() => {
//     console.log(1);
//   }, 0);

//   abc();

//   queueMicrotask(() => {
//     console.log(0);
//   });

//   Promise.resolve(4).then(console.log);

//   console.log(6);

// (async () => {
//   async function abc() {
//     console.log(8);

//     await Promise.resolve(2).then(function a(data){
//       console.log(data);

//     });
//     console.log(3);
//   }

//   setTimeout(function b(){
//     console.log(1);
//   }, 0);

//   await abc();

//   queueMicrotask(function c(){
//     console.log(0);
//   });

//   Promise.resolve(4).then(function d(data){
//     console.log(data);
//   });

//   console.log(6);
// })()

const a = { b: 1, c: 2, d: 3 };

function z({ b: x, c: y }) {
  //console.log(arguments)
  console.log(x, y);
}
z(a);
