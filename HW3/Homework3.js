//**************************************//// TASK 1 ////**********************************************************//

// This is the first method through *FOR*
console.log('Task 1 - Method 1 ');
let arr = [2, 3, 4, 5], multip = 1;
for (let i=0; i < arr.length; i++) {
    multip *= arr[i];
}
console.log(multip);  // result 120

//This is the second method through *WHILE*
console.log('Task 1 - Method 2');
multip=1;
let i = 0; 
while (i<arr.length){
    multip *= arr[i];
    i++;
}
console.log(multip); // result 120;

//**************************************//// TASK 2 ////**********************************************************//

function f() {
    console.log('Task 2');
for(i=0; i <= 15; i++) {
    if ( i % 2===0 ) {
        console.log(i + ' is even');
    } else { console.log( i + ' is odd');
}
}
}
f();

//**************************************//// TASK 3 ////**********************************************************//

// let randoms = [...Array(5)].map(() => Math.floor(Math.random() * 500));

// console.log(randoms);  // I found interesting method on the internet

console.log('task 3');
function randArray(k) {
    let randomNumber = [];
    let i = 0;
    while (i < k) { randomNumber.push(Math.ceil(Math.random() * 500));
        i++;
    }
    console.log(randomNumber);
}
randArray(5);

//**************************************//// TASK 4 ////**********************************************************//
console.log('task 4');
let a = Number(prompt('Hey User! Can you to enter the base?', '0'));
let b = Number(prompt('Hey User! Can you to enter the exponent?', '0'));

function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a ** b;
    }
    return NaN;
}

console.log(raiseToDegree(a, b));




//**************************************//// TASK 5 ////**********************************************************//

console.log('task 5');
function findMin(){
     return Math.min.apply(Math, arguments);
      
} 
console.log(findMin(12, 14, 4, -4, 0.2));


//**************************************//// TASK 6 ////**********************************************************//


console.log('Task 6');

function findUnique(arr) {
    let = new Set(arr);
    if (let.size == arr.length) {
        return true;
    }
    return false;
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

//**************************************//// TASK 7 ////**********************************************************//

console.log('task 7');

function Elem(arr, num = 1) {
    let newArray = arr.slice(-num)
    return console.log(newArray)
}
console.log(Elem([3, 4, 10, -5])); // -5
console.log(Elem([3, 4, 10, -5], 2)); // [10, -5]
console.log(Elem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]




//**************************************//// TASK 8 ////**********************************************************//
console.log('task 8');

let str = 'i love java script';
 
function capitalize(str) {

 return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})

}   

console.log(capitalize(str)); // 'I Love Java Script'
