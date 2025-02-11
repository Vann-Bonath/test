function kidsWithCandies(candies, extraCandies) {
    var kidWithTheMostCandy = Math.max.apply(Math, candies);
    var result = [];
    for (var _i = 0, candies_1 = candies; _i < candies_1.length; _i++) {
        var candy = candies_1[_i];
        if (candy + extraCandies >= kidWithTheMostCandy) {
            result.push(true);
        }
        else
            result.push(false);
    }
    return result;
}
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
