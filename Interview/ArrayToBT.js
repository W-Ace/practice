class ListNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const arrayToBT = (nums) => {
  const root = new ListNode(nums[0]);
  const queue = [root];
  let i = 1;

  while (i < nums.length) {
    const node = queue.shift();
    const leftVal = nums[i];

    if (leftVal || leftVal === 0) {
      node.left = new ListNode(leftVal);
      queue.push(node.left);
    }

    if (i + 1 === nums.length) {
      break;
    }

    const rightVal = nums[i + 1];
    if (rightVal || rightVal === 0) {
      node.right = new ListNode(rightVal);
      queue.push(node.right);
    }

    i += 2;
  }
  return root;
};

console.log(arrayToBT([3, 2, 1, 4]));
