let n = 10110
function countOne(n) {
    while(n){
        n = n & (n-1);
        count++;
    }
    return count;
}
console.log(countOne(n))