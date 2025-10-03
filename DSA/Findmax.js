function FindMax(arr){
    let max = arr[0];
    for(let i =1; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
const result =  FindMax([1,5,78,65]);
console.log(result)



//2nd method
function FindMax(arr){
    return Math.max(...arr)
}
const data =   FindMax(arr);
console.log(data)

