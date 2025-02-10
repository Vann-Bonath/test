function findWordsContaining(words, x) {
    var letters = "";
    var indexOfWordContainX = [];
    for (var i = 0; i < words.length; i++) {
        letters = words[i];
        for (var j = 0; j < letters.length; j++) {
            var letter = "";
            letter = letters[j];
            if (letter === x) {
                indexOfWordContainX.push(i);
                break;
            }
        }
    }
    return indexOfWordContainX;
}
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
