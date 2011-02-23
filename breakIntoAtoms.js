function breakIntoAtoms(n,S){
    // Asumption , MAX length of S array is 30;

    var bitmap=[], // used as 30 bits bimap one for each number
        ithSet, // tmp variable 
        i,j; // loop counters
    // set to 0 
    for(i=0;i<n;i++){ 
        bitmap[i] = 0;
    }
    for(i=0;i<S.length;i++){
        ithSet = S[i];
        for(j=0;j<ithSet.length;j++){
            // set the ith bit of nth bitmap if ith set comtains number n;
            bitmap[ithSet[j]]|=1<<i;
        }
    }
    bitmap.sort(function(a,b){ return a-b; });
    var tmp = bitmap[0];
    var ans = 1;
    for(i=0;i<n;i++){
        if(tmp!=bitmap[i]){
            ans++;
            tmp = bitmap[i];
        }
    }
    return ans;
    
}


console.log(breakIntoAtoms(5,[[0,1,2],[2,3,4]]));
