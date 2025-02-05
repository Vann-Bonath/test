function minimumOperations(nums: number[]): number {
  let divisibleNumber: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] + 1) % 3 === 0) {
      divisibleNumber.push(nums[i]);
    } else if ((nums[i] - 1) % 3 === 0) {
      divisibleNumber.push(nums[i]);
    }
  }
  return divisibleNumber.length;
}

console.log(minimumOperations([1, 2, 3, 4]));
