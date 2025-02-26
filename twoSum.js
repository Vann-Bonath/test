function twoSum(nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result = [i, j];
                return result;
            }
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
