// //**************************************//// TASK 1 ////

console.log('task 1');

 function calcRectangeArea(a , b) {
         a = prompt("Enter the :", "");
         b = prompt("Enter the height :", "");
        if (isNaN(a) || isNaN(b)) {
             throw new typeError('It`s not a number');

        }
        return a * b;
    }
    try {
        let result = calcRectangeArea();
        console.log(result);
    } catch (error){console.log('Sorry, but you entered not numbers, but letters(((');

    }

//**************************************//// TASK 2 ////

         console.log('task 2');

    function checkAge(){
         let ageUser = prompt('Hey User!, can you enter, your age please?',' ');
        if (!ageUser) {
            throw new Error('Sorry User, but you didn`t enter anything , please enter your age',' ');

        } else if (isNaN(ageUser)) {
            throw new Error('Sorry User, but this isn`t a number, please enter your age',' ');

        } else if (ageUser <=14) {
            throw new Error('Sorry User, but you are too joung',' ');
        } else {
            alert('Access is open for you');
        }
    }

    try {
        checkAge();
    }

    catch (error){
        alert(error.name + ':' + error.message);

}

//**************************************//// TASK 3 ////

console.log('task 3');

class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}
 function showMonthName(month){
 let listmonth = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
 }
 let res = listmonth[month];
if (res = listmonth[month]){
return res;
}
throw new MonthException('Incorrect month number');
}
try  {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
}
catch (errors) {
    console.log(errors.name + ':' + errors.message);
}

//**************************************//// TASK 4 ////

console.log("task 4");

function showUser(id) {
  if (id < 0){
    throw new Error('Sorry User,but you must enter a number for your ID : ' + id);
  }
   return { id: id };
}

function showUsers(ids) {
   result = [];
  for(id of ids) {
    try {
      result.push(showUser(id));
    } catch (exception) {
      console.log(exception.message);
    }
  }
  return result;
}
console.log(showUsers([7, -12, 44, 22]));
