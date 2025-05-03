// 1. Write a function that takes a string as input and returns the reverse of the string?

// function reverseWord(word) {
//     return word.split('').reverse().join('')
// }

// let word = "agni"
// console.log(reverseWord(word));

//2. Write a JavaScript program to remove specified elements from the right of a given array of elements.?
// function removeElements(arr, count, newCount) {
//     if(count < 0 || newCount <= 0 && newCount >= arr.length){
//         return "no issue";
//     } else{
//         return arr.slice(count, newCount);
//     }
// }

// let array = [1,2,3,4,5,6,7,8];
// console.log(removeElements(array, 2, 5));

// 3. Write a JavaScript function that reverses a number.

// function reverseNum(number) {
//     let toString = number.toString();
//     let reverseString = toString.split('').reverse().join('');
//     return Number.parseInt(reverseString);
// }

// let num = 1356;
// console.log(reverseNum(num));

//4. Write a JavaScript function that checks whether a passed string is a palindrome or not?

// function isPalindrome(str) {
//     let word = str.replace(/\s+/g, '');
//     let newStr = word.split('').reverse().join('')
//     if(word === newStr){
//         return "this is palindrome";
//     } else{
//         return "this is faltu word";
//     }
// }

// let word = "nursesrun"
// console.log(isPalindrome(word));

//5. Write a JavaScript function that returns a string that has letters in alphabetical order.

// function orderedString(str) {
//     return str.replace(/\s+/g, '').split('').sort().join('')
// }

// let word = "yqfehkdlqh gwdohb"
// console.log(orderedString(word));

//6. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string

// function countVowels(str) {
//     // Define a regular expression to match all vowels (both uppercase and lowercase)
//     const vowels = str.match(/[aeiouAEIOU]/g);
    
//     // If there are matches, return the length of the array. Otherwise, return 0.
//     return vowels ? vowels.length : 0;
// }

// let word = "helly";
// console.log(countVowels(word));

//7. Write a JavaScript function that accepts an argument and returns the type

// function typeOfObject(obj) {
//     return typeof obj;
// }

// let a = "abcd";
// console.log(typeOfObject(a));

//8. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

// function secondLowestAndGreatest(arr) {
//     if (arr.length < 2) {
//         return "Array needs at least two elements";
//     }
    
//     // Remove duplicates by creating a Set and then converting back to an array
//     let uniqueArr = Array.from(new Set(arr));
    
//     if (uniqueArr.length < 2) {
//         return "Array needs at least two unique elements";
//     }
    
//     // Sort the unique array in ascending order
//     uniqueArr.sort((a, b) => a - b);
    
//     // Find the second lowest and second greatest numbers
//     const secondLowest = uniqueArr[1];
//     const secondGreatest = uniqueArr[uniqueArr.length - 2];
    
//     return {
//         secondLowest: secondLowest,
//         secondGreatest: secondGreatest
//     };
// }

// let nums = [1,10,50,60,8,0,50,6]
// console.log(secondLowestAndGreatest(nums));

//9. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen

// for (let i = 0; i < 15; i++) {
//     if(i % 2 === 0){
//         console.log(i +" is even"); 
//     } else{
//         console.log(i +" is odd");
//     }
    
// }

//10. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

// function findLongestWord(str) {
//     // Split the string into an array of words
//     const words = str.split(' ');

//     // Initialize a variable to store the longest word
//     let longestWord = '';

//     // Iterate through the array to find the longest word
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// let word = "The quicky brown fox jumps over the lazy dog"

// console.log(findLongestWord(word));