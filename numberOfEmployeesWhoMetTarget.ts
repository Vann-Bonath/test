function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  let achievedTarget: number = 0;
  for (let hour of hours) {
    if (hour >= target) {
      achievedTarget++;
    }
  }

  return achievedTarget;
}

console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
