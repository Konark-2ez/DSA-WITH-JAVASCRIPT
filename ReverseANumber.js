//Given a number N reverse the number and print it.

//Naive Approach
function reverse(N){
    let rev = 0
    while(N!=0){
        let digit = N%10
        rev = rev * 10 + digit
        N = N/10
    }
    return rev
}

//Using .toString()
function reverse(N){
    let rev = ""
    N = N.toString()
    for(let i=N.length-1;i>=0;i--){
        rev += N[i]
    }
    return parseInt(rev)
}


function runProgram(input){
    var input = input.trim().split("\n")
    var N = +input[0]
    console.log(reverse(N))
}
if (process.env.USER === "") {
    runProgram(`256`);
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