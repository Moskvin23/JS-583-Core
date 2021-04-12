// //**************************************//// TASK 1 ////


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



// //**************************************//// TASK 2 ////

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


// //**************************************//// TASK 3 ////


console.log('task 3');

class Person {
 constructor(name , surname) {
    this.name = name;
    this.surname = surname;
}

showFullName(){
return this.name + ' ' + this.surname;
}
}
class Student extends Person {
    constructor(name , surname , year){
      super(name , surname);
      this.year = year;
    }

   showFullName(midleName) {
       return `${this.name}  ${this.surname} ${midleName}`;
    }
     showCourse() {
    let yearNow = new Date().getFullYear();
   return yearNow - this.year;
  }
}
let stud1 = new Student("Petro", "Petrenko", 2015);

console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5


// //**************************************//// TASK 4 ////

console.log('task 4');

class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    return this.dayRate * this.workingDays;
  }
  showSalaryWithExperience() {
    return this.showSalary() * this.experience;
  }
  get experience() {
    return this.#experience;
  }
  set experience(value) {
      this.#experience = value;
      }
       toString() {
        return this.fullName + ': ' + this.showSalaryWithExperience();
    }

  }
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + " salary " + worker1.showSalary());
console.log("New experience: " + worker1.experience);
console.log(String(worker1));
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(String(worker1));

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName + " salary " + worker2.showSalary());
worker2.experience = 1.5;
console.log(String(worker2));

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName + " salary " + worker3.showSalary());
worker3.experience = 1.5;
console.log(String(worker3));

workers = [worker1, worker2, worker3];
workers.sort((w1, w2) =>
  w1.showSalaryWithExperience() > w2.showSalaryWithExperience() ? 1 : -1
);
console.log("Sorted salary:");
for (item of workers) {
  console.log(String(item));
}



// //**************************************//// TASK 5 ////

console.log('task 5');

class GeometricFigure {
  constructor() {}

    getArea(){

      return 0;
    }

    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
class Triangle extends GeometricFigure {
  constructor(a, h) {
    super();
    this.a = a;
    this.h = h;
  }

    getArea() {
      let area = (this.a * this.h)/2;
      return area;
    }
}
class Square extends GeometricFigure {
  constructor(l) {
    super();
    this.l = l;
  }

  getArea() {
   let area = this.a * this.a;
    return area;
  }
   toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends GeometricFigure {
  constructor (r) {
    super();
    this.r = r;
  
  }
  getArea() {
    let area = Math.PI * this.r * this.r;
    return area; 
  }
    toString(){
     return Object.getPrototypeOf(this).constructor.name;
    }
  }
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  function handleFigures(figures) {
    let totalArea = 0;

    figures.forEach((item) => {
      if (item instanceof GeometricFigure) {
        console.log(
          `Geometric figure: ${item.toString()} - area: ${item.getArea()}`
        );
        totalArea += item.getArea();
      }
    });

    return totalArea;
  }

  console.log(handleFigures(figures));
















 