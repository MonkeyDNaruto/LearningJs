const stepCount = [1231, 3244, 4244, 7456, 2523, 3442, 5342];

const totalCount = stepCount.reduce((preCount, nextCount) => 
    preCount + nextCount);
console.log(totalCount);