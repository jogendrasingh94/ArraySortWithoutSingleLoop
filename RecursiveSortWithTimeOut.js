function SortRecursive(arr){
  if(arr[0]===0){console.log('0')}else{
  setTimeout(function(){
  let a=arr[0]
  console.log(a)
  },arr[0]);
  }
  if(arr.length===1)return;
  bubbleSortRecursive(arr.slice(1,arr.length))
}

bubbleSortRecursive([3,4,5,1,2,9,10,12,0,0,11,45,677]);
