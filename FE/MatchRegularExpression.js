/**
 * input
 * [abc][zyx][e]
 *
 * output
 * axe
 */

const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const matchRegularExpression = (expression) => {
  const arr = expression.split('][');
  let result = '';

  arr[0] = arr[0].replace('[', '');
  arr[arr.length - 1] = arr[arr.length - 1].replace(']', '');
  arr.forEach((str) => {
    result += str[randomRange(0, str.length - 1)];
  });
  return result;
};

console.log(matchRegularExpression('[abc][zyx][e]'));
