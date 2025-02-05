function getConcatenation(nums: number[]): number[] {
  const result = nums.concat(nums);
  return result;
}

console.log(getConcatenation([1, 2, 3]));
