"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inorderTraversal = void 0;
const treeNode_1 = require("./treeNode");
const inorderTraversal = (root) => {
    const result = [];
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
        if (current.right)
            stack.push(current.right);
    }
    return result;
};
exports.inorderTraversal = inorderTraversal;
function isSymmetric(root) {
    const treeVals = [];
    return false;
}
const a = new treeNode_1.TreeNode(1);
const b = new treeNode_1.TreeNode(2);
const c = new treeNode_1.TreeNode(3);
a.right = b;
b.left = c;
console.log((0, exports.inorderTraversal)(a));
