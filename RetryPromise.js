Promise.retry = (func, times = 3) => {
  return new Promise(async (resolve, reject) => {
    try {
      await func();
      resolve();
    } catch(e) {
      times--;
      if (!times) reject();
      else Promise.retry(func, times);
    }
  })
}

const execute = (str) => {
  console.log(str);
  return new Promise((resolve, reject) => {
    setTimeout(() =>  Math.random() > 0.5 ? resolve() : reject(), 500);
  })
}

Promise.retry(execute.bind(null, 'execute'));