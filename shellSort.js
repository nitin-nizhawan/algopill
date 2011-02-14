function shellSort(list){
   function insertionSort(list,start,inc){
       var i;
       for(i=start+inc;i<list.length;i+=inc){
         tmp=list[i];
         var j=i-inc ;
         while(j>=start&&list[j]>tmp){
             list[j+inc]=list[j];
             j-=inc;
         }
         list[j+inc]=tmp;
       }
   }
   var n=list.length,inc=Math.round(n/2);
   while(inc>0){
     for(var start=0;start<inc;start++){
         insertionSort(list,start,inc);
     }
     inc=Math.round(inc/2.2);
   }
   return list;
}


console.log(shellSort([23,45,346,57,24,68,254,8,27,2,1,8,9,4,7,0,34,56,78,7,34,67,34,7,4,3,8,34,65,3]));
