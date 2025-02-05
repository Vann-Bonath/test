function getSneakyNumbers(nums) {
    var duplicateNumber = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && !duplicateNumber.includes(nums[i])) {
                console.log("duplicateNumber I:", duplicateNumber[i]);
                duplicateNumber.push(nums[i]);
            }
        }
    }
    return duplicateNumber;
}
console.log(getSneakyNumbers([0, 1, 1, 0]));
