let Arr = [13,4,10,13,33,10,16,16,16]

function countPairs(Arr, n){
     ans = 0;
    for (i= 0; i < n; i++)
        for (j = i+1; j < n; j++)
 
            // finding the index with same
            // value but different index.
            if (Arr[i] == Arr[j])
                ans++;
     return ans;
}


console.log(countPairs(Arr, 13))

 