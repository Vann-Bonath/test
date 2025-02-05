function shuffle(nums, n) {
    var middle = Math.ceil(nums.length / 2);
    var firstHalf = nums.slice(0, middle);
    var secondHalf = nums.slice(middle);
    var shuffledArray = [];
    for (var i = 0; i < n; i++) {
        shuffledArray.push(firstHalf[i], secondHalf[i]);
    }
    return shuffledArray;
}
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
