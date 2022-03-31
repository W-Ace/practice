const add = (a, b, c) => a + b + c;

const curry = (fn) => {
  const run = (...args) => (
    args.length === fn.length
      ? fn.apply(this, args)
      : (...remainArgs) => run(...args, ...remainArgs)
  );

  return run;
};

const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3)); // 6
console.log(curryAdd(1, 2)(3)); // 6
console.log(curryAdd(1)(2, 3)); // 6
