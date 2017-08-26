let number = 1634;

function armstrongDetector(number) {
    let arrayVer = Array.from(number.toString());
    let lengthOfNumber = arrayVer.length;

    let sum = 0;
    for (let i = 0; i < lengthOfNumber; i++) {
        sum += (arrayVer[i] ** lengthOfNumber);

    }

    if (sum == number) return console.log("it's an armstrong number");
    return console.log("not an armstrong number");
}

armstrongDetector(number);