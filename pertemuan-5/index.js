// IIFE & Callback Function
// 1. IIFE (Immediately Invoked Function Expression)
//    self-executing anonymous function

// (function () {
//   console.log("Hello World");
// })();

// // IIFE with parameter & return value
// let output = (function (fullName) {
//   return "Hello " + fullName;
// })("John Doe");
// console.log(output);

//2. Callback Function
// function passed into another function as an argument
// function greetings(callback) {
//   callback();
// }
// //callback function must be an anonymous function
// greetings(function () {
//   console.log("Hello Callback");
// });

//Callback with parameter & return value
function greetings(callback) {
  let result = callback("John Doe");
  return result;
}
//callback function must be an anonymous function
let output = greetings(function (fullName) {
  return "Hello " + fullName;
});

console.log(output);

//Exercise #01
//Buat program untuk menghitung BMI dgn menggunakan
//IIFE & Callback Function yg memiliki parameter &
//return value.
