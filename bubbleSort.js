//let x = [5, 8, 3, 9, 4, 1, 7];

function bubble_sort(arr) {
    // Write your code here.
    
    var i, k, t;

    for (i = arr.length -1; i >= 0; i--){
        for (k = arr.length - 1; k>=0; k--){
            if (arr[k] < arr[i]) {
                //swap (arr[i], arr[k])    

                t = arr[i];
                arr[i] = arr[k];
                arr[k] = t;
            
            }
        }
    }
    
    return arr;
}

function swap (a1, a2){
    var t;
    t = a1;
    a1 = a2;
    a2 = t;
    console.log('a1=' + a1, ' a2=' + a2);
}
