//Given a number, check if it is Armstrong Number or Not.
let n =153
function armstrong(n){
    let count = 0,temp = n,original=n
    
    while(temp>0){
        count++
        temp = Math.floor(temp/10)
        
    }
    
    console.log(count)
    let sum = 0
    while(original!=0){
        let rem = original % 10
        sum += Math.pow(rem,count)
        original = Math.floor(original/10)
    }
    console.log(sum)
    return sum
}

if(armstrong(n)===n){

    console.log("It is armstrong")
}else{
    console.log("it is not");
}