//Higher Order Function
//Higher order functions là hàm hoạt động trên các hàm khác , bằng cách lấy chúng làm tham số hoặc trả về chúng. Nói một cách đơn giản, một Higher-Order function là hàm nhận một hàm dưới dạng đối số hoặc trả về hàm dưới dạng đầu ra.
// Higher order function trong Javascript giúp viết code nhanh gọn, có thể tạo hàm stateful hoặc stateless. Higher order function (HOF) gắn liền với khái niệm callback, closure và currying trong Javascript
//First Class Function

function cha() {
    let x = 10
    return function con(p) {
        x++
        return x + p
    }
}
// console.log(cha())
// console.log(cha()(1))
// console.log(cha()(1))

// var func = cha()

// console.log(func)
// console.log(func(1))
// console.log(func(1))

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));