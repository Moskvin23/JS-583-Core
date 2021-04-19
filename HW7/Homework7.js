// //**************************************//// TASK 1 ////

let openWin = window.open(
  "https://softservestudyhard.com",
  "SoftServeStudy",
  'width=300,height=300,left = 500,top = 300',

);
resizeTo(function () {
  openWin.resizeTo(500, 500);
}, 2000);

moveTo(function () {
  openWin.moveTo(200, 200);
}, 4000);

setTimeout(function () {
  openWin.close();
}, 6000);

// //**************************************//// TASK 2 ////
    
function changeCSS() {
  document.getElementById("text").style.cssText =
    "color: orange;  font-family:'Comic Sans MS'; font-size:20px;";
}
document.getElementById("button").addEventListener("click", changeCSS);


// //**************************************//// TASK 3 ////

let btn1 = document.querySelector('#button-blue');
let btn2 = document.querySelector('#button-pink');
let btn3 = document.querySelector('#button-brown');
let link = document.querySelector('#yellow');

btn1.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'blue'
});
btn2.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "pink";
});
btn3.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "brown";
});
btn3.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "white";
});

link.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "yellow";
});

link.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "white";
});
// //**************************************//// TASK 4 ////

let list = document.getElementById("list");
let deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", () => {
  let toRemove = list.value;
  for (let i of list.options) {
    if (i.value === toRemove) {
      i.remove();
    }
  }
});



// //**************************************//// TASK 5 ////

let liveButton = document.getElementById("live_button");
let liveText = document.getElementById("text");

liveButton.addEventListener("click", () => {
  liveText.innerHTML = "I was pressed!";
});

liveButton.addEventListener("mouseenter", () => {
  liveText.innerHTML = "Mouse on me!";
});

liveButton.addEventListener("mouseleave", () => {
  liveText.innerHTML = "Mouse is not on me!";
});



// //**************************************//// TASK 6 ////

window.addEventListener("resize", () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  document.getElementById(
    "task 6"
  ).innerHTML = `Width: ${width}, Height: ${height}`;
});

// //**************************************//// TASK 7 ////


const Country = {
  usa: ["New-York", "Washington", "Boston", "Chikago"],
  ger: ["Dressden", "Berlin", "Frankfurt", "Dortmund"],
  ukr: ["Lviv", "Odessa", "Rivne", "Sumy"],
};




document.getElementById("country").addEventListener(
  "change",
  function () {
    document.getElementById("cities").selectedIndex = document.getElementById(
      "country"
    ).selectedIndex;
  },
  false
);