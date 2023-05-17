// Given an integer N , write program to count number of digits in N.
function check(N){
    let count=0
    while(N!=0){
       N = N/10
       count++
    }
    return count
}
function runProgram(input){
    var input = input.trim().split("\n")
    var tc = +input[0]
    var N = +input[1]
    console.log(check(N))
}
if (process.env.USER === "") {
    runProgram(`1
    25`);
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
