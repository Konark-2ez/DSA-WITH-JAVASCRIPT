//Given an array of integers nums, return the number of good pairs.
//A pair (i, j) is called good if nums[i] == nums[j] and i < j
var goodPair = function(nums) {
    let count=0,i=0,j=1
    while(i<nums.length ){
       if(nums[i]===nums[j] && i != j){
           count++
       }
       if(j === nums.length-1){
           j = i
           i++
       }
       j++
    }
    
    return count

};
function runProgram(input){
    var input = input.trim().split("\n")
    var tc = +input[0]
    var num =  input[1].trim().split(" ").map(Number)
    console.log(goodPair(num))
}
if (process.env.USER === "") {
    runProgram(`1
    1 2 3 1 1 3`);
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