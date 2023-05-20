//Given a number, print all the divisors of the number. A divisor is a number that gives remainder as zero when divided.
let n = 150
function printDiv(n){
    let result = ""
    for(let i=1;i<=n;i++){
        if(n%i===0){
            result += i + " "
        }
    }
    return result
}
console.log(printDiv(n))