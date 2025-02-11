function numberOfEmployeesWhoMetTarget(hours, target) {
    var achievedTarget = 0;
    for (var _i = 0, hours_1 = hours; _i < hours_1.length; _i++) {
        var hour = hours_1[_i];
        if (hour >= target) {
            achievedTarget++;
        }
    }
    return achievedTarget;
}
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
