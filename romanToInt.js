function romanToInt(s) {
    var romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var ArrayOfStringS = s.split("");
    var sum = 0;
    for (var i = 0; i < ArrayOfStringS.length; i++) {
        var currentVal = romanMap[ArrayOfStringS[i]];
        var nextVal = romanMap[ArrayOfStringS[i + 1]] || 0;
        var temporaryValue = 0;
        if (currentVal < nextVal) {
            temporaryValue = Math.abs(currentVal - nextVal);
            i = i + 1;
        }
        else {
            temporaryValue = currentVal;
        }
        sum = sum + temporaryValue;
    }
    return sum;
}
console.log(romanToInt("XVMMMMMM"));
