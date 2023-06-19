//khi sử dụng promise all, nếu 1 promise bị reject, các promise khác vấn tiếp tục thực thi
//tuy nhiên: khi promise bị reject, promise.all sẽ trả về trạng thái rejected ngay lập tức
const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('promise 1 successfully!');
      resolve(1);
    },1000);
});

const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('promise 2 reject!')
      reject('error');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('promise 3 successfully!');
      resolve(3);
    },5000);
});

Promise.all([promise1, promise2, promise3])
    .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.log(error);
  })

//thứ tự log sẽ là:
// promise 1 successfully!
// promise 2 reject!
// error
// promise 3 successfully!