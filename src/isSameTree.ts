class TreeNode {
  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number | null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//preorder traversal: root -> left -> right
const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const stack: TreeNode[] = [root];
  const result: any[] = [];

  while (stack.length !== 0) {
    const current = stack.pop();

    if (current) result.push(current.val);
    if (current?.right) stack.push(current.right);
    if (current?.left) stack.push(current.left);
    if (current?.right && !current?.left) result.push(null);
  }

  return result;
};

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;

  const firstTree: number[] = preorderTraversal(p);
  const secondTree: number[] = preorderTraversal(q);

  if (secondTree.length !== firstTree.length) return false;

  for (let i = 0; i < firstTree.length; i++) {
    if (firstTree[i] !== secondTree[i]) return false;
  }

  return true;
}

const p = new TreeNode(0);
const a = new TreeNode(1);

const q = new TreeNode(1);
const b = new TreeNode(0);

p.left = a;
q.left = b;

console.log(isSameTree(p, q));
