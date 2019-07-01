// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if(number==0){
    return 1;
  }
  else{
    return number*findFactorialRecursive(number-1);
  }
}

function findFactorialIterative(number) {
  let fact=1;
  for(let i=1;i<=number;i++)
  {
    fact=fact*i;
  }
  return fact;
}

findFactorialRecursive(6);
findFactorialIterative(4);
