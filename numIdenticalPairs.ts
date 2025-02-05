function numIdenticalPairs(nums: number[]): number {
  let goodPair: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        goodPair.push([i, j]);
      }
    }
  }

  return goodPair.length;
}

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
