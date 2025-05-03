// 11. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not

// function isPrime(number) {
//     if(number <= 0){
//         return "must give a positive number"
//     } 

//     for (let i = 2; i < Math.sqrt(number); i++) {
//         if(number % i === 0){
//             return "number is not prime";
//         } 
        
//     }

//     return "number is prime"
// }

// console.log(isPrime(3));

//12. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

// function secondLowestAndGreatest(arr) {
//     if(arr.length<2){
//         return "atleast put two numbers";
//     }
//    let newArr = arr.sort((a,b)=>(a-b))

//    let secondGreatest = newArr[newArr.length - 2];
//    let secondLowest = newArr[1];

//    return {secondGreatest: secondGreatest,
//             secondLowest: secondLowest
//         }
// }

// let nums = [5,6,9,2,3,1,5,6,4,3,1,4]
// console.log(secondLowestAndGreatest(nums));

//14. Write a JavaScript conditional statement to find the largest of five numbers

// function findLargest(a, b, c, d, e) {
//     let largest = a;

//     if (b > largest) {
//         largest = b;
//     }
//     if (c > largest) {
//         largest = c;
//     }
//     if (d > largest) {
//         largest = d;
//     }
//     if (e > largest) {
//         largest = e;
//     }

//     return largest;
// }

// console.log(findLargest(1,3,4,6,6));

// 15. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// StudentName Marks
// David        80
// Vinoth       77
// Divya        88  
// Ishitha      95
// Thomas       68

// const myObj = [
//     {name: "David", marks: 80},
//     {name: "Vinoth", marks: 77},
//     {name: "Divya", marks: 88},
//     {name: "Ishitha", marks: 95},
//     {name: "Thomas", marks: 68},
// ];

// let totalMarks = myObj.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue.marks
//     // console.log(sum);
//     // return sum/myObj.length
// },0)
// // console.log(totalMarks);
// let averageMarks = totalMarks/myObj.length;
// console.log(average);

//16. The grades are computed as follows :

// <60      F
// <70      D
// <80      C
// <90      B
// <100     A
// let grade;
// if (averageMarks < 60) {
//     grade = 'F';
// } else if (averageMarks < 70) {
//     grade = 'D';
// } else if (averageMarks < 80) {
//     grade = 'C';
// } else if (averageMarks < 90) {
//     grade = 'B';
// } else {
//     grade = 'A';
// }

// console.log("averageMarks: " + averageMarks);
// console.log("grade: " + grade);

//17. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz"

// for (let i = 1; i <= 30; i++) {
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FIzzBuzz");
//     } else if(i % 5 === 0){
//         console.log("Buzz");
//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     } else{
//         console.log(i);
//     }
// }

// 18. Write a JavaScript program to find the Armstrong numbers of 3 digits

// function isArmstrongNumber(num) {
//     let digits = num.toString().split('');
//     let sumOfCubes = 0;

//     for (let digit of digits) {
//         sumOfCubes += Math.pow(parseInt(digit), 3);
//     }

//     return sumOfCubes === num;
// }

// function findArmstrongNumbers() {
//     let armstrongNumbers = [];

//     for (let i = 100; i <= 999; i++) {
//         if (isArmstrongNumber(i)) {
//             armstrongNumbers.push(i);
//         }
//     }

//     return armstrongNumbers;
// }

// let armstrongNumbers = findArmstrongNumbers();
// console.log("Armstrong numbers of 3 digits are:", armstrongNumbers);

//19. Write a JavaScript function to check whether an `input` is an array or not.

// function checkArray(arg) {
//     if(Array.isArray(arg) === true){
//         return "it is an array"
//     } else{
//         return "it is not an array"
//     }
// }

// console.log(checkArray([1,2]));

// 20. Write a JavaScript program to sort the items of an array.

// function sortArray(arg) {
//    let newArg = arg.sort((a,b) => (a-b))
//    return newArg;
// }

// console.log(sortArray([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]));

// 21. Write a JavaScript program to find the most frequent item in an array.

// function mostFrequentItem(arr) {
//     let frequencyMap = {};
//     let maxCount = 0;
//     let mostFrequent;

//     // Create a frequency map
//     for (let item of arr) {
//         if (frequencyMap[item]) {
//             frequencyMap[item]++;
//         } else {
//             frequencyMap[item] = 1;
//         }
//     }

//     // Find the most frequent item
//     for (let item in frequencyMap) {
//         if (frequencyMap[item] > maxCount) {
//             maxCount = frequencyMap[item];
//             mostFrequent = item;
//         }
//     }

//     return `${mostFrequent} ( ${maxCount} times )`;
// }

// // Sample array
// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(mostFrequentItem(arr1)); // Output: a ( 5 times )

