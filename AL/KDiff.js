/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// HashTable
const findPairs = (nums, k) => {
  const countEle = {};
  const numsSet = new Set(nums);
  let pair = 0;

  nums.forEach((cNum) => {
    if (countEle[cNum] === undefined) {
      countEle[cNum] = 1;
    } else {
      countEle[cNum] += 1;
    }
  });

  numsSet.forEach((sNum) => {
    if ((k === 0 && countEle[sNum] > 1) || (k > 0 && countEle[sNum + k])) {
      pair += 1;
    }
  });
  return pair;
};

// Set
const findPairs2 = (nums, k) => {
  const numsSet = new Set();
  const repeatNums = new Set();
  let pair = 0;

  nums.forEach((num) => {
    if (numsSet.has(num)) {
      repeatNums.add(num);
    } else {
      numsSet.add(num);
    }
  });

  if (k === 0) {
    return repeatNums.size;
  }

  numsSet.forEach((num) => {
    if (numsSet.has(num + k)) {
      pair += 1;
    }
  });

  return pair;
};
