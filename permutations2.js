function permutations(str){
    function rotate(ar,a,b){
      var i,save = ar[b-1];
      for(i=b-1;i>a;i--){
          ar[i]=ar[i-1];
      }
      ar[a]=save;
    }
    function permute(buff,arr,start,end){
        var i,range = end-start;
        if(end-start==1){
            buff.push(arr.join(""));
        } else {
            for(i=0;i<range;i++){
                rotate(arr,start,end);
                permute(buff,arr,start+1,end);
            }
        }
    }
    var buff = [];
    permute(buff,str.split(""),0,str.length);
    return buff;
}

console.log(permutations("1234"));