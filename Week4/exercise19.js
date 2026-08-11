// Exercise 19: Palindrome Checker

function isPalindrome(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--){
        reversed += word[i];
    }

    return word === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));