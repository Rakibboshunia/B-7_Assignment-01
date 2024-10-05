// 1. Function to calculate the difference between two numbers
function calculateDifference(a, b){
    return a - b;
}

// 2. Function to check if a number is odd
function isOdd(num){
    return num % 2 !== 0;
}

// 3. Function to find the minimum number in an array
function findMin(arr){
    return Math.min(...arr);
}

// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0);
}

// 5. Function to sort an array in descending order
function sortArrayDescending(arr){
    return arr.sort((a, b) => b - a);
}

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7. Function to count vowels in a string
function countVowels(str){
    let vowels = 'aeiouAEIOU';
    return Array.from(str).filter(letter => vowels.includes(letter)).length;
}

// 8. Function to find the average of an array of numbers
function findAverage(arr){
    return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}
