function heapSort(list){
    // left child 
    function left(p){
        return 2*p+1;
    }
    // right child
    function right(p){
        return 2*p+2;
    }
    // parent node
    function parent(c){
        return Math.floor((c-1)/2);
    }
    // restore heapproperty assuming that child trees of x are max-heaps
    function heapify(list,x,size){
       var largest = x,tmp;
        while(x>=0){
            if(right(x)<size&&list[right(x)]>list[largest]){
                largest = right(x);
            }
            if(left(x)<size&&list[left(x)]>list[largest]){
                largest = left(x);
            }
           if(largest==x){
               break;
           }
           tmp =  list[largest];
          list[largest] = list[x];
          list[x] = tmp;
          x = largest;
        }
    }
    
   // variable declarations
   var i,tmp,size;

   // create heap datastructure 
   for(var i=parent(list.length-1);i>=0;i--){
       heapify(list,i,list.length);
   }
 
   // sort the values by pulling out max value from the top of heap
   size = list.length;
   while(size>0){
      //swap 
       tmp = list[0];
       list[0] = list[size-1];
       list[size-1] = tmp;
       heapify(list,0,size-1);
       size--;    
   }
   return list;
}


console.log(heapSort([23,45,346,57,24,68,254,8,27,2,1,8,9,4,7,0,34,56,78,7,34,67,34,7,4,3,8,34,65,3]));
