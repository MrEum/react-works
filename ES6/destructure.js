// 배열 구조 분해 할당
const arr = [1, 2];
console.log(arr[0]); // Output: 1
console.log(arr[1]); // Output: 2

// 구조 분해 할당으로 배열의 값을 변수에 할당
const [x, y] = arr;
console.log(`x = ${x}`); // Output: 1
console.log(`y = ${y}`); // Output: 2

// 객체 구조 분해 할당
const product = {
    pname: "무선키보드", price: 30000

};
console.log(product.pname); // Output: 무선키보드
console.log(product.price); // Output: 30000

const {pname, price} = product;
console.log(`pname = ${pname}`); // Output: 무선키보드
console.log(`price = ${price}`); // Output: 30000   

