//22. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function swapCase(input) {
//     let swapped = '';

//     for (let char of input) {
//         if (char === char.toUpperCase()) {
//             swapped += char.toLowerCase();
//         } else {
//             swapped += char.toUpperCase();
//         }
//     }

//     return swapped;
// }

// // Example usage:
// let inputString = 'The Quick Brown Fox';
// let outputString = swapCase(inputString);
// console.log(outputString); 

//23. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (let i = 0; i < a.length; i++) {
//     // console.log(a[i]);
//     let arr = a[i]
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
        
//     }
// }


// 24. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// function removeDuplicatesIgnoreCase(arr) {
//     let uniqueArray = [];

//     // Convert each item to lowercase and use a Set to ensure uniqueness
//     let lowercaseSet = new Set(arr.map(item => item.toLowerCase()));

//     // Convert the Set back to an array
//     uniqueArray = Array.from(lowercaseSet);

//     return uniqueArray;
// }

// // Example usage:
// let arr = ['Apple', 'orange', 'Banana', 'apple', 'ORANGE', 'banana', 'grape'];
// let uniqueArray = removeDuplicatesIgnoreCase(arr);
// console.log(uniqueArray); 


//25. Write a JavaScript program to find the leap years in a given range of years.

// function leapYear(startYear, endYear) {
//     let leapYear = [];
    
//     for (let index = startYear; index <= endYear; index++) {
//         if((index % 4 === 0 && index % 100 !== 0) || (index % 400 === 0)){
//             leapYear.push(index);
//         }
        
//     }

//     return leapYear;
   
// }

// console.log(leapYear(2000, 2024));

// 26. Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4


// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         // Check if target is present at mid
//         if (arr[mid] === target) {
//             return mid;
//         }

//         // If target is greater, ignore left half
//         if (arr[mid] < target) {
//             left = mid + 1;
//         } 
//         // If target is smaller, ignore right half
//         else {
//             right = mid - 1;
//         }
//     }

//     // Target not found in the array
//     return -1;
// }

// // Example usage:
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// console.log(binarySearch(items, 1)); 
// console.log(binarySearch(items, 5)); 
// console.log(binarySearch(items, 6)); 


// 27. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// function computeSumOfArrays(array1, array2) {
//     let maxLength = Math.max(array1.length, array2.length);
//     let result = [];

//     for (let i = 0; i < maxLength; i++) {
//         let sum = (array1[i] || 0) + (array2[i] || 0);
//         result.push(sum);
//     }

//     return result;
// }

// // Sample arrays
// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];

// // Compute the sum of arrays
// let resultArray = computeSumOfArrays(array1, array2);
// console.log(resultArray); 


//28. Write a JavaScript program to find duplicate values in a JavaScript array

// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6,6, 1];
// let check_duplicate = (array) => {
//     let dup_ele = []
//     for (num in array) {
//         for (num2 in array) {
//             if (num === num2) {
//                 continue;
//             }
//             else {
//                 if (array[num] === array[num2]) {
//                     dup_ele.push(array[num]);
//                 }
//             }
//         }
//     }
//     return [...new Set(dup_ele)];
//   }
  
//   console.log(check_duplicate(arr))

// 29. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// function removeItem(arr){
//     return arr.filter((item)=>{
//         return item !== null && item !== 0 && item !== "" && item !== false && item !== undefined && !Number.isNaN(item)
//     })
// }

// let array = [1,false,"","b",NaN,"c",undefined,0,2,4]
// console.log(removeItem(array))

//30. Write a JavaScript function to sort the following array of objects by title value

// function sortByTitle(arr) {
//     // Using the sort() method with a custom comparator function
//     arr.sort((a, b) => {
//         let titleA = a.title.toLowerCase();
//         let titleB = b.title.toLowerCase();

//         if (titleA < titleB) {
//             return -1;
//         }
//         if (titleA > titleB) {
//             return 1;
//         }
//         return 0;
//     });

//     return arr;
// }

// // Sample array of objects
// let books = [
//     { title: 'Harry Potter', author: 'J.K. Rowling' },
//     { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
// ];

// // Sort by title
// sortByTitle(books);

// // Output the sorted array
// console.log(books);

// 31. Write a JavaScript function that merges two arrays and removes all duplicate elements.

// function mergeArray(arr1, arr2) {
//     let mergedArray = arr1. concat(arr2) 
    
//     let uniqueArr = [... new Set(mergedArray)]
//     return uniqueArr
// }

// let array1 = [1, 2, 3, 4];
// let array2 = [3, 4, 5, 6];

// let a = array1 + array2
// console.log(a);

// console.log(mergeArray(array1, array2));

// 32. Write a JavaScript program to reverse the order of characters in the string.

// function reverseString(str) {
//     let lowerStr = str.toLowerCase()
//     let reversedString = lowerStr.split('').reverse().join('')
//     return reversedString;
// }


// console.log(reverseString("Agni"));

// 33. Write a JavaScript program to redirect to a specified URL

// function redirectTo(url) {
//     window.location.href = url;     // this helps to redirect to specified url
// }

// // Usage
// redirectTo('https://www.example.com');

//34. Write a JavaScript program to convert an asynchronous function to return a promise



// 35. Write a JavaScript program that returns the singular or plural form of the word based on the input number.

// function pluralize(count, word) {
//     if(count === 1){
//         return `${count} ${word}`;
//     } else{
//         return `${count} ${word}s`;
//     }
// }

// console.log(pluralize(2, "apple"));


// 36. Write a JavaScript program to perform left-to-right function composition for asynchronous functions.

// [doubt] need to clear 

// 37. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function

// [doubt] need to clear

// 38. Write a JavaScript program to create an object from the specified object, where all keys are in lowercase

// function toLowerCaseKey(obj) {
//     let newObj = []
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             newObj[key.toLowerCase()] = obj[key]
//         }
//     }
//     return newObj
// }

// const originalObj = {
//     Name: 'Alice',
//     AGE: 25,
//     Country: 'Wonderland'
// };

// console.log(toLowerCaseKey(originalObj));


// 39. Write a JavaScript program to check if the given argument is a string.

// function isString(arg){
//     if(typeof arg === 'string'){
//         return "this is string"
//     } else{
//         return "this is not a string"
//     }
// }

// console.log(isString(2));

// 40. Write a JavaScript program to check if the provided integer is a prime number or is not
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


//   console.log(isPrime("30"));

