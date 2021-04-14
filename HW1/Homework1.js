//**************************************//// TASK 2 ////
console.log('task 2');

const Surname = "Москвін";
console.log(Surname);


//**************************************//// TASK 3 ////

console.log('task 3');
const name1 = "very important text";
const name2 = "just text";
name2 = name1;
alert(name1);

We can also change Variables each other

const name1 = "very important text";
const name2 = "just text";
name1 = name2;
alert(name1);

//**************************************//// TASK 4 ////
console.log('task 4');

const DataTypes = {
    string: 'Some string',
    number: 2323,
    booleam: false,
    undefined: undefined,
    null: null,
};

//**************************************//// TASK  5 ////
console.log('task 5');

const isAdult = confirm("Are you already an adult ?");
console.log(isAdult);





//**************************************//// TASK  6 ////
console.log('task 6');

const myName = "Pasha";
const mySurname = "Moskvin";
const myEducationGroup = "JS 583 Core";
const myYearOfBirth = 1996;
const myMarriedStatus = false;

typeof myName;
typeof mySurname;
typeof myEducationGroup;
typeof myYearOfBirth;
typeof myMarriedStatus;

console.log(myYearOfBirth, myMarriedStatus, myName, mySurname, myEducationGroup);

const lesson1 = null;
const lesson2;

console.log(typeof lesson1, typeof lesson2);

//**************************************//// TASK 7 ////
console.log('task 7');

const userName = prompt("Dear User your name is?", "User");
const userEmail = prompt("Dear User your Email is?", "usermale@gmail.com");
const userPassword = prompt("Dear User your password is?", "qwerty");

alert(userName, userEmail, userPassword); 



//**************************************//// TASK 8 ////
console.log('task 8');

const amountSecondsInMinute = 60;
const amountSecondsInHour = (amountSecondsInMinute * 60);
const amountSecondsInDay = (amountSecondsInHour * 24);
const amountSecondsInMonth = (amountSecondsInDay * 30);

document.write(` Amount Seconds In Minute - ${amountSecondsInMinute};
Amount Seconds In Hour - ${amountSecondsInHour};
Amount Seconds In Day - ${amountSecondsInDay};
Amount Seconds In Month - ${amountSecondsInMonth};
`);
























