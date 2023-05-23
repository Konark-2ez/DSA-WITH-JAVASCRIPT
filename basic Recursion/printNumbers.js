//print numbers from 1 to N

function print(n){
    if(n===0){
        return 
    }
    console.log(n)
    return print(n-1)
  
}
print(4)