//Question 5
//Print All Permutation Of A String Both Iteratively And Recursively.

let sampleString = "Dotun";




function interativePermutation(stringArg) {
    let stringLength = stringArg.length;
    numOfPermutations = getFactorial(stringLength);

    let arrayVersion = Array.from(stringArg);
    let initialArrayArrangement = Array.from(stringArg);

    for (let i = 0; i < arrayVersion.length; i++) {
        for (x = 0; x < arrayVersion.length; x++) {


            let oldvalue = arrayVersion[x];
            arrayVersion[x] = arrayVersion[i];
            console.log(arrayVersion)

        }

    }
}

function getFactorial(number) {
    let x = 1;
    for (let i = number; i >= 1; i--) {
        x = x * i;
    }
    return x;

}

interativePermutation(sampleString);