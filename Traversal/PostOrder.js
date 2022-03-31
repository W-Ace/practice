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
const postorderTraversal = (root) => {
  if (!root) return [];

  const result = [];
  const stack = [];

  let cur = root;

  while (cur || stack.length > 0) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else if (!cur) {
      const node = stack[stack.length - 1].right;

      if (node) {
        cur = node;
      } else {
        let popNode = stack.pop();

        result.push(popNode.val);

        while (stack.length > 0 && stack[stack.length - 1].right === popNode) {
          popNode = stack.pop();
          result.push(popNode.val);
        }
      }
    }
  }
  return result;
};

// iteration 2
const postorderTraversal2 = (root) => {
  if (!root) return [];

  const result = [];
  const stack = [[root, false]];

  while (stack.length > 0) {
    const [node, visited] = stack.pop();
    if (node) {
      if (visited) {
        result.push(node.val);
      } else {
        stack.push([node, true]);
        stack.push([node.right, false]);
        stack.push([node.left, false]);
      }
    }
  }

  return result;
};

// morris
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
