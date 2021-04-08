// //**************************************//// TASK 1 ////**********************************************************//


console.log('task 1 - method 1');

function propsCount(currentObject){ 

return Object.keys(currentObject).length;
}

    
    let mentor = { 
        course: "JS fundamental", 
        duration: 3,
        direction: "web-development",
    }
console.log(propsCount(mentor));


// I found this method in https://learn.javascript.ru/keys-values-entries (I don't know right this method or not)




console.log('task 1 - method 2');

function propsCount(currentObject){

let funct = Object.keys(currentObject);

return funct.length;
}
let mentor2 = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
}
console.log(propsCount(mentor2));



// //**************************************//// TASK 2 ////**********************************************************//

console.log('task 2');

const transport = {
    typeOfTransport : 'Car',
    bodyType :'Sedan',
    model : 'BMW',
    producingCountry : 'Germany',
    cost : '45000$'
}
function showvalues(transport){
    return Object.values(transport);
} 
function showkeys(transport){
    return Object.keys(transport);
}
console.log(showkeys(transport)); // and I found another method ----console.log(Reflect.ownKeys(transport));
console.log(showvalues(transport));


// //**************************************//// TASK 3 ////**********************************************************//


console.log('task 3');

class Person {
    constructor(name , surname) {
    this.name = name;
    this.surname = surname;
}

showFullName(){
return this.name + this.surname;
}
}
