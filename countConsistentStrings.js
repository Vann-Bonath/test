function countConsistentStrings(allowed, words) {
    var allowedText = allowed.split("");
    var consistentWordCount = 0;
    var i = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        i++;
        if (word.includes(allowedText[i])) {
            consistentWordCount++;
        }
    }
    return consistentWordCount;
}
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
