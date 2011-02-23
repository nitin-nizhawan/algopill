function breakIntoAtoms(n,S){
    var bitmap=[];
    // set to 0xfffffff 
    for(var i=0;i<n;i++){
        bitmap[i] = 0;
    }
    for(var j=0;j<S.length;j++){
        for(var k=0;k<S[j].length;k++){
            // set the jth bit of nth bitmap if jth set comtains number n;
            bitmap[S[j][k]]|=1<<j;
        }
    }
    bitmap.sort(function(a,b){ return a-b; });
    var tmp = bitmap[0];
    var ans = 1;
    for(var l=0;l<n;l++){
        if(tmp!=bitmap[l]){
            ans++;
            tmp = bitmap[l];
        }
    }
    return ans;
    
}


console.log(breakIntoAtoms(5,[[0,1,2],[2,3,4]]));
