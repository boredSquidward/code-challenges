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

class TreeNode {
  val: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: string) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

type InorderTraversalType = {
  (root: TreeNode | null): string[];
};

const inorderTraversal: InorderTraversalType = (root) => {
  if (!root) return [];

  const stack: TreeNode[] = [root];

  const result: string[] = [];

  while (stack.length !== 0) {
    let cur: TreeNode = stack[stack.length - 1];

    if (cur?.left) {
      stack.push(cur.left);
      cur.left = null;
      continue;
    }

    if (!cur?.left) {
      result.push(cur.val);
      stack.pop();
    }

    if (cur?.right) {
      stack.push(cur.right);
    }
  }

  return result;
};

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");
const g = new TreeNode("g");

a.left = b;
a.right = e;

b.left = c;
b.right = d;

e.left = f;
e.right = g;

//       a
//     /   \
//    b     e
//   / \   / \
//  c   d f   g

console.log(inorderTraversal(a));
