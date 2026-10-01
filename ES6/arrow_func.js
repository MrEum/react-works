// 화살표 함수
// 제곱수 계산
let square = function(x) {
    return x * x;
}

let square2 = (x) => {
    return x * x;
}

//  코드가 한 줄일때 {}블럭과 return 생략 가능
let square3 = (x) => x * x;

console.log(square(3)); // Output: 9
console.log(square2(3)); // Output: 9
console.log(square3(3)); // Output: 9

// 매개변수가 없는 함수
let message = () => console.log("Good Luck!");
message(); // Output: Good Luck!