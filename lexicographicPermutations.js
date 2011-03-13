//http://compprog.wordpress.com/2007/10/08/generating-permutations-2/

function lexicographicPermutations(str){
    function swap(ar,a,b){
        var tmp = ar[a];
        ar[a] = ar[b];
        ar[b] = tmp;
    }
    
    function next(mstr){
        var i = mstr.length - 2;
        /* Find the largest i */
        while ((i >= 0) && (mstr[i] > mstr[i + 1])){
            --i;
        }
        if (i < 0)
            return true;
        var k = mstr.length - 1;
        /* Find the largest element after vi but not larger than vi */
        while (mstr[i] > mstr[k]){
            --k;
        }
        swap(mstr,i,k);
        var j;
        k = 0;
          /* Swap the last n - i elements. */
        for (j = i + 1; j < Math.floor((mstr.length + i) / 2 + 1); ++j, ++k){
            swap(mstr,j, mstr.length - k - 1);
        }
        return false;
    }
    var permutations = [],
        mstr = str.split(''); // mutable string
        permutations.push(mstr.join("")); // add the given
        var done = true;
    do {
        if (!(done = next(mstr))){
        permutations.push(mstr.join(""));  /* P3 */
        }
    } while (!done);
        
    return permutations;
}


console.log(lexicographicPermutations("1234"));