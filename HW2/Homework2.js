//**************************************//// TASK 1 ////
console.log("task 1");

let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log(res1);
console.log(typeof res1);

let res2 = "" + Boolean(x) + y;
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = (!y + "") * x;
console.log(res4);
console.log(typeof res4);

//**************************************//// TASK 2 ////
console.log("task 2");

let numberUser = prompt(
  "Hey User, please Enter any random positiv numberUser",
  ""
);

if (numberUser > 0 && numberUser % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}
if (numberUser % 7 === 0) {
  console.log(false);
}

//**************************************//// TASK 3 ////
console.log("task 3");

const array = [];
array[0] = 2323;
array[1] = "Random string";
array[2] = true;
array[3] = null;

console.log(array.length);

array[4] = prompt("Hey, User can you put random value?!", "");
console.log(array[4]);

let newArray = array.shift(function (arr) {
  delete array[0];
});
console.log(newArray);

//**************************************//// TASK 4 ////
console.log("task 4");

let cities = ["Rome", "Lviv", "Warsaw"];
let citiesAdd = cities.join("*");

console.log(citiesAdd);

//**************************************//// TASK 5 ////
console.log("task 5");

let isAdult = prompt(
  "Hey User, Are you already 18 years old? How old are you???",
  ""
);
if (isAdult >= 18) {
  console.log("Oooh yeah, you are already 18 years old, congratulations");
}
if (isAdult > 10 && isAdult < 18) {
  console.log("Sorry User, but you are not yet 18");
}
if (isAdult >= 0 && isAdult <= 10) {
  console.log("Sorry User, You are soooo young((((");
}

//**************************************//// TASK 6 ////
console.log("task 6");

let triangleSideA = Number(
  prompt("User, Enter please Side A at your Triangle's", "")
);
let triangleSideB = Number(
  prompt("User, Enter please Side B at your Triangle's", "")
);
let triangleSideC = Number(
  prompt("User, Enter please Side C at your Triangle's", "")
);

// task 6 (a);

if (triangleSideA > 0 && triangleSideB > 0 && triangleSideB > 0) {
  let pr = (triangleSideA + triangleSideB + triangleSideC) / 2;
  let triangleArea = Math.sqrt(
    pr * (pr - triangleSideA) * (pr - triangleSideB) * (pr - triangleSideC)
  );
  console.log(triangleArea.toFixed(3));
} else {
  console.log("Incorrect data");
}

// task 6 (b);

if (
  triangleSideA * triangleSideA + triangleSideB * triangleSideB ===
    triangleSideC + triangleSideC ||
  triangleSideB * triangleSideB + triangleSideC * triangleSideC ===
    triangleSideA * triangleSideA ||
  triangleSideA * triangleSideA + triangleSideC * triangleSideC ===
    triangleSideB * triangleSideB
) {
  console.log("The triangle is right");
} else {
  console.log("The triangle isn`t right");
}

//**************************************//// TASK 7 ////
console.log("task 7");
//First method

let timeNow = new Date();
let hourNow = timeNow.getHours();
switch (true) {
  case hourNow <= 11 && hourNow >= 5:
    alert("Good morning!");
    break;
  case hourNow >= 12 && hourNow < 17:
    alert("Good day!");
    break;
  case hourNow >= 18 && hourNow <= 23:
    alert("Good evening!");
    break;
  case hourNow >= 23 || hourNow <= 5:
    alert("Good Night!");
    break;
}

//Second method

let time = new Date();
let hourNow = timeNow.getHours();

if (hourNow <= 11 && hourNow >= 5) {
  console.log("Good morning!");
} else if (hourNow >= 12 && hourNow < 17) {
  console.log("Good day!");
} else if (hourNow >= 18 && hourNow <= 23) {
  console.log("Good evening!");
} else {
  console.log("Good Night!");
}
