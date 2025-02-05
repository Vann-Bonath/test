function finalValueAfterOperations(operations) {
    var result = 0;
    for (var i = 0; i < operations.length; i++) {
        if (operations[i] === "X++" || operations[i] === "++X") {
            console.log("operations[i]", operations[i]);
            result = result + 1;
            console.log("++", result);
        }
        else {
            result = result - 1;
            console.log("--", result);
        }
    }
    return result;
}
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
