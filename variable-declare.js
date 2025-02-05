function scoreOfString(s) {
    var result = 0;
    for (var i = 0; i < s.length - 1; i++) {
        result = result + Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return result;
}
console.log(scoreOfString("zaz"));
