arr1 = [1, 2, 3, 4, 5];
arr2 = [2, 3, 1, 0, 5];


function notPresent(arr1, arr2) {
    let noticed = 0;
    let unoticed = 0;
    let equalNoticer = 0;

    for (let number1 in arr1) {
        for (let number2 in arr2) arr1[number1] == arr2[number2] ? noticed++ : unoticed++;
        if (noticed == 0) return `Number Not Present In Second Array is ${arr1[number1]}`;

        equalNoticer++;
        if (equalNoticer == arr1.length) return "both arrays to some extent have the same elements";
        //reset notice and unotice variables.

        noticed = 0;
        unoticed = 0;
    }


}

console.log(notPresent(arr1, arr2));