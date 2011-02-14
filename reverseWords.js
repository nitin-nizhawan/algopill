function reverseWords(str){
    /**
     * sub routine to reverse a string
     * @param {Array} ar array of characters
     * @param {number} st start index
     * @param {number} end end index
     * @return {Array} array elements in reverse order
     */
    function reverseStr(ar,st,end){
        var i,tmp;
        var mid = Math.floor((st+end)/2);
        for(i=st;i<=mid;i++){
            tmp = ar[i];
            ar[i]=ar[end-i+st];
            ar[end-i+st] = tmp;
        }
        return ar;
    }
    
    // convert string to mutable array of chars
    var rv = [],tmp;
    for(var i=0;i<str.length;i++){
        rv.push(str.charAt(i));
    }
    // reverse every word in string
    var start = 0;
    for(i=0;i<rv.length;i++){
        if(rv[i]==' '){
            reverseStr(rv,start,i-1);
            start=i+1;
        }
    }
    // reverse the last word
    reverseStr(rv,start,rv.length-1);
    //reverse the whole string
    rv = reverseStr(rv,0,rv.length-1);
    // return after converting array to string again
    return rv.join('');
}

console.log(reverseWords("you love me"));
