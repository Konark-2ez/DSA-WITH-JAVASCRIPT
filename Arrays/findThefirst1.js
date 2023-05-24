//find the first 1 in an array
let arr = [0,0,0,0,0]
function check(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            return i;
        }
    }
    return -1
}
console.log(check(arr))