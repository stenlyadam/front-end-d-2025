//JavaScript Function
//Cara 1. Function declaration
// function greetings(){
//     console.log("Hello World")
// }
// greetings() //call function
//Cara 2. Function expression
// const greetings2 = function (){
//     console.log("Hello World")
// }
// greetings2()

//Function with input (argument & parameter)
//and output (return value)

//Cara 1
//                 parameter
// function greetings(fullName){
//     return "Hello " + fullName
// }

//                      argument
// let output = greetings("John Doe")
// console.log(output)


//Cara 2
// const greetings2 = function(fullName){
//     return "Hello " + fullName
// }
// let output2 = greetings2("Jane Doe")
// console.log(output2)

//Global, Local, Block Scope Variable
let x = 10 //Global Variable
console.log(x) //10
function func1() {
    let y = 20 //Local Variable
    console.log(x) //10
    console.log(y) //20
    if(true){
        let z = 30 //Block Variable
        console.log(x) //10
        console.log(y) //20
        console.log(z) //30
    }
    // console.log(z) //ERROR
}
// console.log(y) //ERROR
func1()

//Mini Exercise
//Modifikasi mini exercise terakhir ttg menghitung BMI
//dengan menggunakan function dimana berat & tinggi
//sebagai argument (input) dan BMI sebagai output
function calculateBMI(berat, tinggi){
    let bmi = berat / (tinggi * tinggi)
    return bmi > 25 ? "BMI anda : " + bmi + ", kategori kelebihan berat badan" : "BMI anda : " + bmi + ", kategori normal"
}

let output = calculateBMI(90, 1.7)
console.log(output)

//Pelajari dirumah tentang IIFE & callback function