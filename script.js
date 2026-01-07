// Problem 1: Reverse a String
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// console.log("Problem-1:",reverseString("hello"));

// Problem 2: Count Vowels in a String
function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            count++;
        }
    }
    return count;
}

// console.log("Problem-2:", countVowels("programming"));

// Problem 3: Palindrome Check
function isPalindrome(str) {
    let lowerStr = str.toLowerCase();
    let reversedStr = "";

    for (let i = lowerStr.length - 1; i >= 0; i--) {
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