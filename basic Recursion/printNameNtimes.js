//print name N times using 
function print(i,n){
    if(i===0){
        return 
    }
    console.log(i,n)
    return print(i-1,n)
  
}
print(10,"Konark")