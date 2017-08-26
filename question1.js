/*
 * Oludotun Longe 
 * Full-stack developer
 * Planet NEST
 * 26th Aug, 2017
 */


//Find the third form last element in an array, in a single interation


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2];
let arr3 = [1, 2, 3];

function getThirdFromLastElement(arr) {
    if (arr.length < 3) return "not possible because array length is less than 3"
    if (arr.length == 3) return arr[0];
    if (arr.length > 3) return arr[(arr.length - 1) - 2];
}


console.log(getThirdFromLastElement(arr));