function squareRootBisection(num){
    var min=1, max=num, 
        epsilon = num/1000000, // 10^(-6);
        mid,error;
    // square root of numbers smaller than 1 is bigger than the number
    if(num<=1.0){
        min = num;
        max = 1.0;
    } 
    mid = (min+max)/2;
    error = mid*mid-num;
    while(Math.abs(error)>epsilon){
        if(error<0){
            min = mid;
        } else {
            max = mid;
        }
        mid = (min+max)/2;
        error = mid*mid-num;
    }
    return mid;
}

console.log(squareRootBisection(0.004));
