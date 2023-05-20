//Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.

let n=7
function checkPrime(n) {
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

if(checkPrime(n)){
    console.log("It is a prime number")
}
else{
    console.log("It is not a prime number")
}