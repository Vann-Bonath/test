function numIdenticalPairs(nums) {
    var goodPair = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                goodPair.push([i, j]); // Add the good pair to the array
            }
        }
    }
    console.log(goodPair);
    return goodPair.length;
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
