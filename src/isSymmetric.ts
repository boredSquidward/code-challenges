import { TreeNode } from "./treeNode";

type InorderTraversalType = {
  (root: TreeNode): number[];
};

export const inorderTraversal: InorderTraversalType = (root) => {
  const result: any[] = [];
  const stack = [root];

  while (stack.length !== 0) {
    const current = stack[stack.length - 1];

    if (current.left) {
      stack.push(current.left);
      continue;
    }

    if (!current.left) {
      result.push(current.val);
      result.push(null);
      stack.pop();
    }

    if (current.right) stack.push(current.right);
  }

  return result;
};

function isSymmetric(root: TreeNode | null): boolean {
  const treeVals: any[] = [];
  return false;
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);

a.right = b;
b.left = c;

console.log(inorderTraversal(a));
