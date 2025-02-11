function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let kidWithTheMostCandy: number = Math.max(...candies);
  let result: boolean[] = [];

  for (let candy of candies) {
    if (candy + extraCandies >= kidWithTheMostCandy) {
      result.push(true);
    } else result.push(false);
  }
  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
