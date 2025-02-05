function buildArray(nums) {
    var ans = [];
    for (var i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    console.log(ans);
}
console.log(buildArray([5, 0, 1, 2, 3, 4]));
