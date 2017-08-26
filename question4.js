//Question
//Find the second highest number in an integer array


//Answer
/*
My Method to find the second largest number in an array would be to sort the array in any order first,
i choose to sort it in ascending order and 
then literally pick the second to last number 
*/

let sampleArray = [134, 52, 23, 64];

function findSecondHighestNumber(arr) {

    for (let i = 0; i <= arr.length; i++) {

        for (x = 0; x < arr.length; x++) {

            if (arr[i] < arr[x]) {

                let old_Value_Of_Second = arr[x];

                let old_Value_Of_First = arr[i];

                arr[i] = old_Value_Of_Second;

                arr[x] = old_Value_Of_First;

            }


        }
    }

    return arr[arr.length - 2];
}

let number = findSecondHighestNumber(sampleArray);

console.log(number);