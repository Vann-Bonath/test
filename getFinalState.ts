function getFinalState(
  nums: number[],
  k: number,
  multiplier: number
): number[] {
  for (let i = 0; i < k; i++) {
    let minIndex = nums.indexOf(Math.min(...nums));
    nums[minIndex] *= multiplier;
  }
  return nums;
}

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
