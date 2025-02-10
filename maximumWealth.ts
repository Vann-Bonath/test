function maximumWealth(accounts: number[][]): number {
  let accountSum: number = 0;
  let biggestAccount: number = 0;
  for (let account of accounts) {
    accountSum = account.reduce((acc, num) => acc + num, 0);
    if (biggestAccount < accountSum) {
      biggestAccount = accountSum;
    }
  }

  return biggestAccount;
}

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
