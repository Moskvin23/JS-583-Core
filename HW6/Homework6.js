// //**************************************//// TASK 1 ////

document.getElementById("test").innerHTML = "Last ";

document.querySelector("#test").innerHTML = "Last";

let id = document.getElementById("test");
id.innerHTML = "Last";
//There are three methods :)

// //**************************************//// TASK 2 ////

// document.getElementById('image').src = 'cat.jpg';
// alert(document.querySelector('.image').src);

// //**************************************//// TASK 3 ////

let p = document.querySelectorAll("#text p");
for (let i = 0; i < p.length; i++) {
  p[i].innerHTML = `Selector text ${i}: ${p[i].innerHTML}`;
}

// //**************************************//// TASK 4 ////

let list = document.getElementById("list");

result = [
  list.firstElementChild.innerHTML,
  list.lastElementChild.innerHTML,
  list.firstElementChild.nextElementSibling.innerHTML,
  list.lastElementChild.previousElementSibling.innerHTML,
  list.lastElementChild.previousElementSibling.previousElementSibling.innerHTML,
];
alert(result);

// //**************************************//// TASK 5 ////

document.querySelector("h1").style.background = "lightgreen";
let myNodes = document.querySelectorAll("#myDiv p");
myNodes[0].style.fontWeight = "bold";
myNodes[1].style.color = "red";
myNodes[2].style.textDecoration = "underline";
myNodes[3].style.fontStyle = "italic";
document.querySelector("span").style.display = "none";
document.getElementById("myList").style.cssText =
  "display: inline-flex; list-style:none;";

// //**************************************//// TASK 6 ////

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

input1.value = prompt("input1", "");
input2.value = prompt("input2", "");

tmp = input1.value;
input1.value = input2.value;
input2.value = tmp;

// //**************************************//// TASK 7 ////

main = document.createElement("main");
main.classList.add("mainClass");

div = document.createElement("div");
div.setAttribute("id", "myDiv");

p = document.createElement("p");
p.innerHTML = "First paragraph";

div.appendChild(p);
main.appendChild(div);
document.body.appendChild(main);
