function smallestEvenMultiple(n: number): number {
  if (n % 2 === 0) {
    return n;
  }
  return n * 2;
}

console.log(smallestEvenMultiple(6));
