const rFibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  return rFibonacci(n - 2) + rFibonacci(n - 1);
};

const iFibonacci = (n) => {
  let prevPrev = 0;
  let pre = 0;
  let cur = 1;

  for (let i = 1; i < n; i++) {
    prevPrev = pre;
    pre = cur;
    cur = prevPrev + pre;
  }

  return cur;
};
