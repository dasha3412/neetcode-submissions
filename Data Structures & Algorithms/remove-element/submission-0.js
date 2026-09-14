class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0
        for (let i = 0, j = 0; i < nums.length; i++) {
            let idx = i + j
            while (idx < nums.length) {
                if (nums[idx] == val) {
                    j += 1
                    idx = i + j
                } else {
                    nums[i] = nums[idx]
                    k += 1
                    break
                }
            }
        }
        return k
    }
}
