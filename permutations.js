function permutations(str){
    // util function swap
    function swap(ar,a,b){
        var tmp = ar[a];
        ar[a] = ar[b];
        ar[b] = tmp;
    } 
    /**
     * recursive function
     * @param {Array} buff output buffer
     * @param {Array} arr representing elements of input string
     * @param {number} start
     * @param {number} end
     */ 
    function permute(buff,arr,start,end){
        var i,range = end-start;
        if(end-start==1){
            buff.push(arr.join("")); // output
        } else {
            for(i=0;i<range;i++){
                swap(arr,start,start+i);
                permute(buff,arr,start+1,end);
                swap(arr,start,start+i);
            }
        }
    }
    
    
    var buff = [];
    permute(buff,str.split(""),0,str.length);
    return buff;
}

console.log(permutations("abc"));

