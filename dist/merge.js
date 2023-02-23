"use strict";
const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, n);
    if (nums1[0] === undefined) {
        nums1[0] = nums2[0];
        nums2.shift();
    }
    for (let i = 0; i < m + n; i++) {
        if (nums2[0] <= nums1[i] || nums1[i] === undefined) {
            nums1.splice(i, 0, nums2[0]);
            nums2.shift();
        }
    }
};
const nums1 = [0];
const m = 0;
const nums2 = [1];
const n = 1;
merge(nums1, m, nums2, n);
