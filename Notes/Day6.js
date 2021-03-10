console.log(1); //stack

console.log(2); //stack

setTimeout(function () {
  console.log(3);
}, 3000); //queue

console.log(4); //stack

//js looks for more code
//stack is empty, no more code!
//it will go to queue, will start lookign for code to execute
//it will add to stack
