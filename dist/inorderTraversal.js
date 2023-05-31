"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const treeNode_1 = require("./treeNode");
const inorderTraversal = (root) => {
    if (!root)
        return [];
    const stack = [root];
    const result = [];
    while (stack.length !== 0) {
        let cur = stack[stack.length - 1];
        if (cur === null || cur === void 0 ? void 0 : cur.left) {
            stack.push(cur.left);
            cur.left = null;
            continue;
        }
        if (!(cur === null || cur === void 0 ? void 0 : cur.left)) {
            if (cur.val)
                result.push(cur.val);
            stack.pop();
        }
        if (cur === null || cur === void 0 ? void 0 : cur.right) {
            stack.push(cur.right);
        }
    }
    return result;
};
const a = new treeNode_1.TreeNode(1);
const b = new treeNode_1.TreeNode(2);
const c = new treeNode_1.TreeNode(3);
const d = new treeNode_1.TreeNode(4);
const e = new treeNode_1.TreeNode(5);
const f = new treeNode_1.TreeNode(6);
const g = new treeNode_1.TreeNode(7);
a.left = b;
a.right = e;
b.left = c;
b.right = d;
e.left = f;
e.right = g;
console.log(inorderTraversal(a));
