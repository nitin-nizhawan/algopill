function squareRootNewtonRaphson(num){
    var sqroot = num/2, 
        epsilon = num/1000000; //10^(-6);
    var error = sqroot*sqroot - num;
    while(Math.abs(error)>epsilon){
        // xn+1 = xn - (xn*xn - num)/(2*xn);
        sqroot = sqroot - (error)/(2*sqroot);
        error = sqroot*sqroot - num;
    }
    return sqroot;
}

console.log(squareRootNewtonRaphson(3535334));
