const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let i,j;
  for(i=0;i<array.length;i++){
    for(j=0;j<array.length;j++){
      if(array[j]>array[j+1]){
        array[j]=array[j]+array[j+1];
        array[j+1]=array[j]-array[j+1];
        array[j]=array[j]-array[j+1];
      }
    }
  }
  return array;
}

bubbleSort(numbers);
//console.log(numbers);