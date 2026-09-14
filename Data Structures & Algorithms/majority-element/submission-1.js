class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const m = {}
        const maj = Math.floor(nums.length / 2)
        console.log(maj)
        for (let num in nums) {
            const elem = nums[num]
            console.log(elem)
            if (m[elem]) {
                const newVal = m[elem] + 1
                if (newVal > maj) {
                    return elem
                }
                m[elem] = m[elem] + 1
            } else {
                const newVal = 1
                if (newVal > maj) {
                    return elem
                }
                m[elem] = newVal
            }
        }
    }
}
