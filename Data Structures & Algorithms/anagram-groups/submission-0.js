class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagMap = new Map();
        for (let i = 0; i < strs.length; i++) {
            const sorted = [...strs[i]].sort((a, b) => a.localeCompare(b)).join("")
            if (anagMap.has(sorted)) {
                let newList = anagMap.get(sorted)
                newList.push(strs[i])
                anagMap.set(sorted, newList)
            } else {
                anagMap.set(sorted, [strs[i]])
            }
        }
        const allGroups = []
        anagMap.forEach((value, key) => {
            allGroups.push(value)
        })
        return allGroups
    }
}
