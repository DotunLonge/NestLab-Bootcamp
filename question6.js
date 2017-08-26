let word_one = "Dtoun";
let word_two = "Dotun";


// to be qualified as an anagram, the words must match in length;
// and have the exact words no matter the re-arrangement;


Array.removeSpace = (word) => {

    let new_word = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            new_word += word[i];
        }
    }

    return new_word;

}

Array.exists = (Arry, word) => {
    for (let i = 0; i < Arry.length; i++) {
        if (Arry[i] == word) return true;
    }
    return false;
}

let anagramDetector = ((word1, word2) => {

    word1 = Array.removeSpace(Array.from(word1));
    word2 = Array.removeSpace(Array.from(word2));

    let noticer = 0;
    let toHandleRepeatWords = [];

    if (word1.length == word2.length) {
        for (let i = 0; i < word1.length; i++) {
            for (let y = 0; y < word2.length; y++) {
                if (word1[i] == word2[y]) {
                    if (Array.exists(toHandleRepeatWords, word1[i]) == false) {
                        toHandleRepeatWords.push(word1[i]);
                        noticer = noticer + 1;
                    }
                }
            }
        }
        if (noticer != word1.length) return console.log("Not An Anagram");

        return (console.log("It's An Anagram"));
    } else {
        return console.log("words not even the same length, cant be an anagram bro");
    }
})(word_one, word_two);