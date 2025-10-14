//JavaScript Conditional & Loop
//1. JavaScript Conditional

//if - else
// let suhu = 35;
// if (suhu >= 38) {
//   console.log("Suhu Panas");
// } else {
//   console.log("Suhu Normal");
// }

//if - else if - else
//Jika nilai 91 - 100 tampilkan A
//Jika nilai 81 - 90 tampilkan B
//Jika nilai 71 - 80 tampilkan C
//Jika nilai <= 70 tampilkan D
// let nilai = 80;
// if (nilai >= 91 && nilai <= 100) {
//   console.log("Grade A");
// } else if (nilai >= 81 && nilai <= 100) {
//   console.log("Grade B");
// } else if (nilai >= 71 && nilai <= 80) {
//   console.log("Grade C");
// } else if (nilai <= 70) {
//   console.log("Grade D");
// } else {
//   console.log("Out of range");
// }

//switch-case
// let hari = 1;
// switch (hari) {
//   case 1: // if (hari === 1)
//     console.log("Hari minggu");
//     break;
//   case 2:
//     console.log("Hari senin");
//     break;
//   case 3:
//     console.log("Hari selasa");
//     break;
//   case 4:
//     console.log("Hari rabu");
//     break;
//   case 5:
//     console.log("Hari kamis");
//     break;
//   case 6:
//     console.log("Hari jumat");
//     break;
//   case 7:
//     console.log("Hari sabtu");
//     break;
//   default:
//     console.log("Out of range");
// }

//2. JavaScript Loop

//for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//while loop
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//Built-in method Array
//1. forEach()
// numbers.forEach(function (value) {
//   console.log(value);
// });

//2. map()
// let output = numbers.map(function (value) {
//   return value + 2;
// });
// console.log(output);

//3. filter()
// let output = numbers.filter(function (value) {
//   return value > 2;
// });
// console.log(output);

//4. find()
let output = numbers.find(function (value) {
  return value > 2;
});
console.log(output);
