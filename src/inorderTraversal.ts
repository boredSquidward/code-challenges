/**
 * left -> root -> right
 * Time complexity: O(n)
 * Auxiliary space: O(h)

 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "./treeNode";

type InorderTraversalType = {
  (root: TreeNode | null): number[];
};

const inorderTraversal: InorderTraversalType = (root) => {
  if (!root) return [];

  const stack: TreeNode[] = [root];

  const result: number[] = [];

  while (stack.length !== 0) {
    let cur: TreeNode = stack[stack.length - 1];

    if (cur?.left) {
      stack.push(cur.left);
      cur.left = null;
      continue;
    }

    if (!cur?.left) {
      if (cur.val) result.push(cur.val);
      stack.pop();
    }

    if (cur?.right) {
      stack.push(cur.right);
    }
  }

  return result;
};

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);
const g = new TreeNode(7);

a.left = b;
a.right = e;

b.left = c;
b.right = d;

e.left = f;
e.right = g;

//       a
//     /   \
//    b     e
//  /  \  /  \
// c   d f    g

console.log(inorderTraversal(a));
