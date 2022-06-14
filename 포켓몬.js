function solution(nums) {
  let nums2 = new Set();
  nums.forEach((n) => nums2.add(n));

  if (nums2.size < nums.length / 2) return nums2.size;
  else return nums.length / 2;
}
