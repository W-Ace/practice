const rFibonacci = (n) => {
  if (n <= 1) {
  	return n;
  }
  
  return fibonacci(n - 2) + fibonacci(n - 1);
}

const iFibonacci = (n) => {
  let prevPrev = 0,
  		pre = 0,
      cur = 1;
      
  for (let i = 1; i < n; i++) {
  	prevPrev = pre;
    pre = cur;
    cur = prevPrev + pre;
  }
  
  return cur;
}
