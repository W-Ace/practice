// 驗證回文

const Palindromic = (str) => {
  let l = 0;
  let r = str.length - 1;

  while (l <= r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l += 1;
    r -= 1;
  }

  return true;
};
