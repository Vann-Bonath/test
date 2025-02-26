function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i]; // return indices
    }
    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([3, 3], 6)); // Output: [0,1]
