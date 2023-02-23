type mergeTypes = {
  (nums1: number[], m: number, nums2: number[], n: number): void;
};

const merge: mergeTypes = (nums1, m, nums2, n): void => {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (nums2[j] < nums1[i]) {
        console.log(nums2[j]);
      }
      console.log(nums1[i]);
    }
  }
};

const nums1 = [3, 5, 3, 0, 0, 0];
const m = 3;

const nums2 = [1, 2, 3];
const n = 3;

console.log(merge(nums1, m, nums2, n));
