// HOF
let handleSum = (callback) => {
    console.log(callback(1, 2));
}

handleSum((a, b) => {
    return a + b;
});

// forEach();
let listNumber = [10, 20, 30, 100, -20];

for (let i = 0; i <listNumber.length; i++) {
    console.log(listNumber[i]);
}

listNumber.forEach((item, index, array) => {
    console.log(`${item} : ${index}`);
    console.log(array);
});

// map() : Tao ra mang moi
let newArray = listNumber.map((number, index) => {
    let newNumber = number * 2;
    return newNumber;
});

console.log(newArray);

let newListNumber = [1, 2, 3, 4];
// reduce() :
let sumListNumber = newListNumber.reduce((acc, cur, index, array) => {
    return (acc += cur);
}, 0);

console.log(sumListNumber);
