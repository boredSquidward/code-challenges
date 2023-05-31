export class TreeNode {
  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number | null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
