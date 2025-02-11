function countConsistentStrings(allowed, words) {
    var allowedSet = new Set(allowed); // Use a Set for quick lookup
    console.log(allowedSet);
    var consistentWordCount = 0;
    for (var j = 0; j < words.length; j++) {
        var word = words[j].split(""); // Corrected index
        console.log(word, "/");
        // Check if all characters in the word are allowed
        if (word.every(function (char) { return allowedSet.has(char); })) {
            consistentWordCount++;
        }
    }
    return consistentWordCount;
}
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));
