function getFinalState(nums, k, multiplier) {
    for (var i = 0; i < k; i++) {
        var minIndex = nums.indexOf(Math.min.apply(Math, nums));
        nums[minIndex] *= multiplier;
    }
    return nums;
}
console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
