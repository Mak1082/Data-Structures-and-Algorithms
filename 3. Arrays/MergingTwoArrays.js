
function mergeSortedArrays(arr1, arr2)
{
  let i=0,j=0, mergedArray=[];
  while((i<arr1.length) && (j<arr2.length))
  {
    if(arr1[i]>arr2[j]) { mergedArray.push(arr2[j]); j++; }
    else if(arr1[i]<arr2[j]) { mergedArray.push(arr1[i]); i++; }
    else if(arr1[i]==arr2[j]) { mergedArray.push(arr1[i]); mergedArray.push(arr2[j]); i++; j++;}
    console.log(mergedArray);
  }
  while(j<arr2.length) { mergedArray.push(arr2[j]); j++; }
  while(i<arr1.length) { mergedArray.push(arr1[i]); i++; }
  return mergedArray;
}


mergeSortedArrays([0,3,4,31], [3,4,6,30]);

