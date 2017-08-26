arr = [1, 2, 3, 4, 5, 6, 77, 77, 8, 9, 10];

function findDuplicate(arr) {
    let noticer = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr.length; y++) {
            arr[i] == arr[y] ? noticer++ : "";
        }
        if (noticer >= 2) return arr[i];
        noticer = 0;

    }
}

console.log(findDuplicate(arr));