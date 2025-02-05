function getSneakyNumbers(nums: number[]): number[] {
  let duplicateNumber: number[] | null = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && !duplicateNumber.includes(nums[i])) {
        duplicateNumber.push(nums[i]);
      }
    }
  }

  return duplicateNumber;
}

console.log(getSneakyNumbers([0, 1, 1, 0]));
