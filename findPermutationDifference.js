function findPermutationDifference(s, t) {
    var arrayS = s.split("");
    var arrayT = t.split("");
    var arraySIndex = [];
    var isTequalToSIndex = [];
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        arraySIndex.push(arrayS.indexOf(arrayS[i]));
        for (var j = 0; j < t.length; j++) {
            if (arrayS[i] === arrayT[j]) {
                isTequalToSIndex.push(arrayT.indexOf(arrayT[j]));
                break;
            }
        }
    }
    for (var i = 0; i < arraySIndex.length; i++) {
        result = result + Math.abs(arraySIndex[i] - isTequalToSIndex[i]);
    }
    return result;
}
console.log(findPermutationDifference("abcde", "edbac"));
