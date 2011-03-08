function postorderTraversalIterative(root){
    /**
     * Node:{val:number,left:Node,right:Node}
     * sample input
     * var tree={ val:"F",
     *                 left:{ val:"B",
     *                        left:{ val:"A" },
     *                                right:{ val:"D",
     *                                          left:{val:"C"},
     *                                          right:{val:"E"}
     *                              }
     *                      },
     *                right:{val:"G",
     *                         right:{ val:"I",
     *                                   left:{val:"H"}
     *                                 }
     *                       }
     *   };
     */
    
   function peek(stack){
       return stack[stack.length-1];
   }
   
   var  stack = [root],
        output = [],top;
        
   while(stack.length>0){
       while(peek(stack).right){
           output.push(peek(stack).val);
           stack.push(peek(stack).right);
       }
       output.push(peek(stack).val);
       // backup to parent which has a left child
       while((top=stack.pop()) && !top.left){}
       // if parent was found, then push its left child
       if(top){
           stack.push(top.left);
       }
   }
 
   return output.reverse();
}


// "A, C, E, D, B, H, I, G, F"
var tree={ val:"F",
           left:{ val:"B",
                  left:{ val:"A" },
                  right:{ val:"D",
                          left:{val:"C"},
                          right:{val:"E"}
                        }
                 },
           right:{val:"G",
                  right:{ val:"I",
                          left:{val:"H"}
                        }
                 }
         };

var tree2 = {
             val:34,
             left:{
                 val:2,
                 left:{
                     val:0   // leaf
                 },
                 right:{
                     val:6,
                     left:{
                         val:5,
                         right:{
                             val:6  // leaf
                         }
                     },right:{
                         val:12,
                         left:{
                             val:7 // leaf
                         },
                         right:{
                             val:23 // leaf
                         }
                     }
                 }
             },
             right:{
                 val:45,
                 left:{
                     val:43 // leaf
                 },
                 right:{
                     val:78,
                     left:{
                         val:67 //leaf
                     },
                     right:{
                         val:89 // leaf
                     }
                 }
             }
};
console.log(postorderTraversalIterative(tree));