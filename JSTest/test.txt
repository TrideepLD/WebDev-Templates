function longestString(array) {
    let longestLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (longestLength < array[i].length) {
            longestLength = array[i].length;
        }
    }
    return longestLength;
}

let arr = ["Hi", "Greetings", "Salutations"];

console.log(longestString(arr));