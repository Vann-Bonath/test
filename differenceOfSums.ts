function differenceOfSums(n: number, m: number): number {
  let num1: number[] = [];
  let num2: number[] = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % m !== 0) {
      num1.push(i);
    } else if (i % m === 0) {
      num2.push(i);
    }
  }
  let sumOfNum1 = num1.reduce((acc, curr) => acc + curr, 0);
  let sumOfNum2 = num2.reduce((acc, curr) => acc + curr, 0);

  return sumOfNum1 - sumOfNum2;
}

console.log(differenceOfSums(10, 3));
