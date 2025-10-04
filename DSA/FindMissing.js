function FindMissing(arr){
    if(arr.length === 0) return 1;
    const n = arr.length+1;
   let expectedSum =(n*(n+1))/ 2 ;
    let actualsum = 0;
    for(let i=0;i<arr.length; i++){
        actualsum += arr[i];
    }
    return expectedSum - actualsum;
    
}
const result =  FindMissing([1,2,4,5,6,7]);
console.log(result)
       
