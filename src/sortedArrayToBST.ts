class TreeNode {
  right: TreeNode | null;
  left: TreeNode | null;
  val: number;

  constructor(val: number) {
    this.right = null;
    this.left = null;
    this.val = val;
  }
}

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
    const length = nums.length;
    //if length is odd {root = length / 2}
    //if length is even {root = Math.floor()}

  return null;
};
