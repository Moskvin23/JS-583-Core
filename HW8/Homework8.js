// //**************************************//// TASK 1 ////

console.log("task 1");
function upperCase(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's first character is uppercase");
  } else {
    console.log("String's first character is not uppercase");
  }
}
upperCase("regexp");
upperCase("RegExp");

// //**************************************//// TASK 2 ////

console.log("task 2");

function checkEmail(str) {
  const reg = /\S+@\S+\.\S+/;

  console.log(reg.test(str));
}
checkEmail("Qmail2@gmail.com");

// //**************************************//// TASK 3 ////

console.log("task 3");

let re = /d(B+)(d)/gi;
let myArray = re.exec("cdbBdbsbz");
console.log(myArray);

// //**************************************//// TASK 4 ////

console.log("task 4");

function reg(str) {
  const reg = /\w+/g;

  return str.match(reg).reverse().join(",");
}

console.log(reg("Java Script"));

// //**************************************//// TASK 5 ////

console.log("task 5");

function creditCard(str) {
  let creditCard = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  if (creditCard.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(creditCard("9999-9999-9999-9999"));

// //**************************************//// TASK 6 ////

console.log("task 6");

function checkEmail(str) {
  const demand = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  if (demand.test(str)) {
    console.log("Email is correct!");
  } else {
    console.log("Email isn`t correct!");
  }
}

checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");

// //**************************************//// TASK 7 ////

console.log("task 7");

function checkLogin(str1) {
  const demand1 = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
  const req = /[0-9\.]+/g;
  const res = str1.match(req);
  const result = demand1.test(str1);
  console.log(`${str1} ${result} - ${res}`);
}

checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
