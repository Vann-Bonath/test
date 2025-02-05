function buildArray(nums: number[]) {
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}

buildArray([5, 0, 1, 2, 3, 4]);
