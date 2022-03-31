/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// iteration 1
const inorderTraversal = (root) => {
  const stack = [];
  const result = [];

  while (root || stack.length > 0) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const node = stack.pop();
      result.push(node.val);
      root = node.right;
    }
  }

  return result;
};

// iteration 2
const inorderTraversal2 = (root) => {
  if (!root) return [];

  const stack = [[root, false]];
  const result = [];

  while (stack.length > 0) {
    const [node, visited] = stack.pop();
    if (node) {
      if (visited) {
        result.push(node.val);
      } else {
        stack.push([node.right, false]);
        stack.push([node, true]);
        stack.push([node.left, false]);
      }
    }
  }

  return result;
};
