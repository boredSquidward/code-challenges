"use strict";
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
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
            result.push(cur.val);
            stack.pop();
        }
        if (cur === null || cur === void 0 ? void 0 : cur.right) {
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
console.log(inorderTraversal(a));
