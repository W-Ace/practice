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
const preorderTraversal = (root) => {
  if (!root) return [];

  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }

    result.push(node.val);
  }
  return result;
};

// iteration 2
const preorderTraversal2 = (root) => {
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
        stack.push([node.left, false]);
        stack.push([node, true]);
      }
    }
  }

  return result;
};

// morris
const preorderTraversal3 = (root) => {
  const output = [];
  let cur = root;

  while (cur) {
    if (!cur.left) {
      output.push(cur.val);
      cur = cur.right;
    } else {
      let pred = cur.left;
      while (pred.right && pred.right !== cur) {
        pred = pred.right;
      }

      if (!pred.right) {
        pred.right = cur;
        output.push(cur.val);
        cur = cur.left;
      }

      if (pred.right === cur) {
        pred.right = null;
        cur = cur.right;
      }
    }
  }

  return output;
};
