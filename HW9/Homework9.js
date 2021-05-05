// //**************************************//// TASK 1 ////
console.log("task 1");

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// //**************************************//// TASK 2 ////

console.log("task 2");

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// //**************************************//// TASK 3 ////

console.log("task 3");

function mul(...res) {
  let result = 1;
  let isNumber;
  for (let i of res) {
    if (typeof i == "number") {
      result = result * i;
      isNumber = true;
    }
  }
  return isNumber ? result : 0;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// //**************************************//// TASK 4////
console.log("task 4");

let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// //**************************************//// TASK 5////
console.log("task 5");

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
function mapBuilder(keysArray, valuesArrays) {
  const map = new Map();
  for (i of keysArray) {
    map.set(i, valuesArrays[i - 1]);
  }
  return map;
}
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
