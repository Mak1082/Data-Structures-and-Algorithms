// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


//O(n) - Linear Time
function fibonacciIterative(n){
  let a=0,b=1,c=1;
  if(n==0){return a;}
  if(n==1){return b;}
  if(n==2){return c;}
  a=1;
  for(let i=3;i<=n;i++){
    c=a+b;
    a=b;
    b=c;
  }
  return c;
}

//O(2^n) - Exponential Time
function fibonacciRecursive(n) {
  if(n==0) return 0;
  return n==1?1:fibonacciRecursive(n-2)+fibonacciRecursive(n-1);
}

fibonacciRecursive(40)

//In this case the Recursive solution is not the best solution as it has time complexity of 2^N which is more than Linear Time

//But everything has pros and cons and we will see how recursion will be more efficient than the classical approaches.