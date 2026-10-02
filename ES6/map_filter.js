// map() - 배열의 각 요소에 대해 새로운 배열로 반환
const arr = [1, 2, 3];

// newArr = [2, 4, 6]
const newArr = arr.map((x) => x * 2);
console.log(newArr);

// 객체가 요소인 배열
const users = [
    {name: 'Alice', age: 23},
    {name: 'Bob', age: 30},
    {name: 'Jerry', age: 25}
];

// 첫 번째 요소의 name 출력
console.log(users[0].name); // Alice
console.log(users[0].age); // 23


// 배열에서 이름만 출력
const names = users.map((user) => user.name); // ['Alice', 'Bob', 'Jerry']
console.log(names);

// filter() - 배열의 각 요소에 대해 조건을 만족하는 요소만 새로운 배열로 반환

const nums = [1, 2, 3, 4, 5];
// 배열에서 짝수만 출력 (nums % 2 == 0)
const evens = nums.filter((num) => num%2 == 0);
console.log(evens); // [2, 4]

// users 배열에서 나이가 30 이상인 요소 출력
const adults = users.filter((user) => user.age >= 30); 
console.log(adults); // [{name: 'Bob', age: 30}]

// users에서 나이가 30 이상인 사람의 이름만 출력 - filter(),map()를 함께 사용
const adultNames = users.filter((user) => user.age >= 30).map((user) => user.name);

console.log(adultNames); // ['Bob']

//forEach() - 배열의 각 요소에 대해 반복 수행
const userNames = []; 
users.forEach((user) => {
    userNames.push(user.name); // 요소추가
});
console.log(userNames); // ['Alice', 'Bob', 'Jerry']   