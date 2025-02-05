function differenceOfSums(n, m) {
    var num1 = [];
    var num2 = [];
    for (var i = 1; i < n + 1; i++) {
        if (i % m !== 0) {
            num1.push(i);
        }
        else if (i % m === 0) {
            num2.push(i);
        }
    }
    var sumOfNum1 = num1.reduce(function (acc, curr) { return acc + curr; }, 0);
    var sumOfNum2 = num2.reduce(function (acc, curr) { return acc + curr; }, 0);
    console.log(sumOfNum1);
    console.log(sumOfNum2);
    return sumOfNum1 - sumOfNum2;
}
console.log(differenceOfSums(10, 3));
