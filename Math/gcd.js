//calculate and return the gcd
function gcd(a,b){
    if(b===0){
        return a
    }
    return (b,a%b)
}

console.log(gcd(10,20))
