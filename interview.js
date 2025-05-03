//1)Write a function that takes an array of numbers and returns a new array where each element is doubled.

// function double(arr) {
//     newArr = arr.map((item)=>item*2)
//     return newArr
// }

// console.log(double([2,3,6]));

//2)Create a function that takes an array of numbers and returns a new array containing only the even numbers

// function evenNumbers(arr) {
//     let evenArr = arr.filter((item)=>{
//         return item % 2 === 0
//     })
//     return evenArr;
// }

// let array = [1,2,3,4,5,6,7,8,9];
// console.log(evenNumbers(array));
// console.log(array);

//3)Implement a function that calculates the sum of all the elements in an array using the reduce function.

// function sum(arr) {
//     return arr.reduce((a,b)=>(a+b),0)
// }
// console.log(sum([1,2,3,4,5,6]));

//4)Write a function that finds the maximum value in an array of numbers using the reduce function.

// function maxValue(arr) {
//     if(arr.length === 0){
//         throw error("array is empty")
//     }

//     return arr.reduce((max, current)=>{
//         if(max > current){
//             return max
//         } else{
//             return current
//         }
//     })
// }

// console.log(maxValue([1,2,5,6,10,20,7,30]));

//5)Implement a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter function.

// function isPrime(num) {
//     newNum = parseInt(num);
//     if (newNum <= 1) return false;
//     if (newNum <= 3) return true;
  
//     if (newNum % 2 === 0 || newNum % 3 === 0) return false;
  
//     for (let i = 5; i * i <= newNum; i += 6) {
//       if (newNum % i === 0 || newNum % (i + 2) === 0) return false;
//     }
  
//     return true;
//   }

//   function filterPrimeNumbers(arr) {
//     let newArr = []
//     for(item of arr){
//         if(isPrime(item) === true){
//             newArr.push(item)
//         }
//     }
//     return newArr
//   }

//   console.log(filterPrimeNumbers([1,2,3,4,5,6,7,8,9]));

//6)Create a function that takes an array of objects and sorts them based on a specified property using the sort function.

// function sortArray(arr, key) {
//    let newArr = arr.sort((a,b)=>{
//         if(a[key] < b[key]){
//             return -1
//         } 
//         if(a[key] > b[key]){
//             return 1
//         }
//         return 0;
//     })
//     return newArr
// }

// const people = [
//     { name: 'Bob', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Charlie', age: 20 }
// ];

// console.log(sortArray(people, "age"));


//7)Write a function that removes duplicate values from an array using the filter function.

// using filter method
// function removeDuplicates(arr) {
//    return arr.filter((value, index, self)=> self.indexOf(value)===index)
// }
// console.log(removeDuplicates([1,2,3,3,1,2,55,4,4,5]));

// using set method
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1,3,2,5,5,2,3,1,7,9,7]));
// 8)Write a function that accepts any number of arguments and returns their sum using the rest parameter.

// function sumOfNums(...num) {
//    return num.reduce((a, b) => (a+b), 0)
// }

// console.log(sumOfNums(1,2,3,4,5));

//9)Create a function that takes any number of arguments (numbers) and calculates the average using the rest parameter.

// function averageOfNums(...num) {
//     let sum = num.reduce((a,b)=>(a+b),0)
//     return sum/num.length
// }

// console.log(averageOfNums(1,2,3,4,5));

//10)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

// function largestNumber(...num) {
//     let sortedArr = num.sort((a, b) => (a-b))
//     let largest = sortedArr[sortedArr.length - 1];
//     return largest;
// }

// console.log(largestNumber(2,3,5,6,8,1,0,-2,-1));

//11)Write a function that takes a variable number of arrays as arguments and returns a single array containing all the elements from the input arrays, using the rest parameter.

// function combineArrays(...args) {
//     let newArr = args.flat();
//     return newArr;
// }

// console.log(combineArrays([1,2,3],[4,5,6],[9,8,7]));

//12)Implement a function that takes a variable number of string arguments and returns an array containing only the strings with a length greater than a specified value using the rest

// function findStrings(length , ...str) {
//     return str.filter((item)=>item.length>=length);
// }

// console.log(findStrings(3, "apple", "cherry", "abc", "abcd", "a"));

//13)Edit in array of object  property without changing original array of object.

// function updateProperty(arr, property, value, newValue) {
//     return arr.map(item => {
//         if (item[property] === value) {
//             return { ...item, [property]: newValue };
//         }
//         return { ...item };
//     });
// }

// const originalArray = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 20 }
// ];

// console.log(originalArray);

// let updatedArray = updateProperty(originalArray, "name", "Bob", "Charlie");
// console.log(updatedArray);