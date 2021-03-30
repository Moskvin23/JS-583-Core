//**************************************//// TASK 1 ////**********************************************************//


let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log(res1);
console.log(typeof res1); 

let res2 = "" + Boolean(x) + y;
console.log(res2);
console.log(typeof res2); 

let res3 = x < y ;
console.log(res3); 
console.log(typeof res3); 

let res4 = (!y + '') * x;
console.log(res4); 
console.log(typeof res4); 


//**************************************//// TASK 2 ////**********************************************************//

let numberUser = prompt('Hey User, please Enter any random positiv numberUser','') 

if (numberUser > 0 && numberUser % 2 === 0)  { console.log(true)} else
{console.log(false);}
if (numberUser %7===0) {console.log(false);}



//**************************************//// TASK 3 ////**********************************************************//


const array = [];
array[0] = 2323;
array[1] = 'Random string';
array[2] = true;
array[3] = null;

console.log(array.length);

array[4]= prompt('Hey, User can you put random value?!','')
console.log(array[4]);

let newArray = array.shift(function(arr){delete array[0]});
console.log(newArray);
    

//**************************************//// TASK 4 ////**********************************************************//

let cities = ["Rome", "Lviv", "Warsaw"]; 
let citiesAdd = cities.join('*');

console.log(citiesAdd);

//**************************************//// TASK 5 ////**********************************************************//



let isAdult = prompt('Hey User, Are you already 18 years old? How old are you???','');
if (isAdult >= 18){ console.log('Oooh yeah, you are already 18 years old, congratulations')};
if (isAdult >10 && isAdult <18 ){ console.log('Sorry User, but you are not yet 18')};
if (isAdult >= 0 && isAdult <=10){console.log('Sorry User, You are soooo young((((')};

//**************************************//// TASK 6 ////**********************************************************//

 let triangleSideA = Number(prompt('User, Enter please Side A at your Triangle\'s' ,''));
 let triangleSideB = Number(prompt('User, Enter please Side B at your Triangle\'s' ,''));
 let triangleSideC = Number(prompt('User, Enter please Side C at your Triangle\'s' ,''));
 let firstTask = (triangleSideA + triangleSideB + triangleSideC);
console.log(firstTask);

let secondTask = (triangleSideA + triangleSideB + triangleSideC );

//a<c and b<c ********** If these formulas are suitable then is right triangle)

    if (triangleSideA < triangleSideC && triangleSideB < triangleSideC){
         console.log(secondTask.toFixed(3));
    } else { (triangleSideA > triangleSideC && triangleSideB > triangleSideC );
         (console.log('Incorrect data')) };


//**************************************//// TASK 7 ////**********************************************************//

//First method

let timeNow = new Date();
	
switch(time.getDay()) {
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
    case 11:
		console.log('Good morning!');
		break;
	case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:                                     
		console.log('Good day!');
		break;  
    case 18:
    case 19:
    case 20:
    case 21:
    case 22: 
    case 23:
        console.log('Good evening!');
	default:
		console.log('Good Night!');
		break;
}

//Second method

let time = new Date();
let hourNow = timeNow.getHours();

if (hourNow <= 11 && hourNow >= 5) {
    console.log('Good morning!');
} else if (hourNow >= 12 && hourNow< 17){
    console.log('Good day!');
} else if (hourNow >=18 && hourNow <=23){
    console.log('Good evening!');
} else {console.log('Good Night!');
}