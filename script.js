// Problem 1: Reverse a String
function reverseString(str) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String
function countVowels(str) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            count++;
        }
    }
    return count;
}

// console.log(countVowels("programming"));

// Problem 3: Palindrome Check
function isPalindrome(str) {
    let lowerStr = str.toLowerCase();
    let reversedStr = "";

    for(let i = lowerStr.length - 1; i >= 0; i--) {
        reversedStr += lowerStr[i];
    }

    if (lowerStr === reversedStr) {
        return true;  
    } else {
        return false; 
    }
}

// console.log("Problem-3A:", isPalindrome("madam"));
// console.log("Problem-3B:", isPalindrome("hello"));

// Problem 4: Find Maximum Number
function findMax(arr) {
    let max = arr[0]; 
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// console.log(findMax([5, 1, 9, 3])); 

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
    let unique = [];

    for(let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
    let sum = 0;

    for(let num of arr) {
        sum += num;
    }
    return sum;
}

// console.log(sumArray([1, 2, 3, 4])); 

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
    let evenNumbers = [];

    for(let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    return evenNumbers;
}

// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));  

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
    let words = str.split(" ");
    let capitalizedWords = [];

    for(let word of words) {
        let capitalized = word[0].toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalized);
    }

    return capitalizedWords.join(" ");
}

// console.log(capitalizeWords("hello world")); 

// Problem 9: Factorial with loop
function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// console.log(factorial(5)); 