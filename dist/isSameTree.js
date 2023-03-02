"use strict";
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const preorderTraversal = (root) => {
    if (!root)
        return [];
    const stack = [root];
    const result = [];
    while (stack.length !== 0) {
        const current = stack.pop();
        if (current)
            result.push(current.val);
        if (current === null || current === void 0 ? void 0 : current.right)
            stack.push(current.right);
        if (current === null || current === void 0 ? void 0 : current.left)
            stack.push(current.left);
        if ((current === null || current === void 0 ? void 0 : current.right) && !(current === null || current === void 0 ? void 0 : current.left))
            result.push(null);
    }
    return result;
};
function isSameTree(p, q) {
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;
    const firstTree = preorderTraversal(p);
    const secondTree = preorderTraversal(q);
    if (secondTree.length !== firstTree.length)
        return false;
    for (let i = 0; i < firstTree.length; i++) {
        if (firstTree[i] !== secondTree[i])
            return false;
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
