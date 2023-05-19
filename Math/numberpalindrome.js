//  Given a number check if it is a palindrome.
function checkPalindrome(n){
    let rev = 0
    while(n>0){
        let rem = n%10;
        rev = (rev*10)+rem
        n = n/10
    }
    return rev
}
function runProgram(input){
    var input = input.trim().split("\n")
    var tc = +input[0]
    var N = +input[1]
    if(checkPalindrome(N)===N){
        console.log("Yes it is a palindrome")
    }else{
        console.log("No")
    }
}
if (process.env.USER === "") {
    runProgram(`1
    252`);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}