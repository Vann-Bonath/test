function minimumOperations(nums) {
    var divisibleNumber = [];
    for (var i = 0; i < nums.length; i++) {
        console.log("nums[i]", nums[i]);
        if ((nums[i] + 1) % 3 === 0) {
            divisibleNumber.push(nums[i]);
        }
        else if ((nums[i] - 1) % 3 === 0) {
            divisibleNumber.push(nums[i]);
        }
    }
    console.log(divisibleNumber);
    return divisibleNumber.length;
}
console.log(minimumOperations([1, 2, 3, 4]));
