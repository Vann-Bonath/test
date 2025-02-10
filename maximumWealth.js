function maximumWealth(accounts) {
    var accountSum = 0;
    var biggestAccount = 0;
    for (var _i = 0, accounts_1 = accounts; _i < accounts_1.length; _i++) {
        var account = accounts_1[_i];
        accountSum = account.reduce(function (acc, num) { return acc + num; }, 0);
        if (biggestAccount < accountSum) {
            biggestAccount = accountSum;
        }
    }
    return biggestAccount;
}
console.log(maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
]));
