
/*
@param {list_int32} arr
@return {list_int32}
*/

//let x = [5, 8, 3, 9, 4, 1, 7];

function selection_sort(arr) {
    // Write your code here.
    
    var minValue;
    var minIndex;
    var currValue;
    var currIndex;
    var bFound = false;
    var i, k;
    
    for (i = 0; i < arr.length - 1; i++ ){
        currValue = arr[i];
        currIndex = i;
        minValue = arr[i];
        minIndex = i;        
        bFound = false;
        for (k = i + 1; k <= arr.length - 1; k++){            
            if (arr[k] < minValue) {
                minValue = arr[k];
                minIndex = k;
                //console.log('minValue=' + minValue, ' minIndex=' + minIndex + ' i=' + i + ' k=' + k);
                bFound = true;
            }
        }
        //if (i != minIndex) {
        if (bFound = true) {
            //arr[minIndex] = arr[i];                
            arr[minIndex] = currValue;
            arr[currIndex] = minValue;                
            console.log('minValue=' + minValue, ' minIndex=' + minIndex + ' i=' + i + ' k=' + k + ' arr=' + arr);
            bFound = false;
        }
            //document.write(arr);
    }
    return arr;
}

//selection_sort(x);
