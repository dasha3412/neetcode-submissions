class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for (let i = 0; i < strs.length; i++) {
            const charArray = new Array(26).fill(0)
            const word = strs[i]
            for (let j = 0; j < word.length; j++) {
                const idx = word.charCodeAt(j) % 97
                charArray[idx] += 1
            }
            const mapKey = charArray.join(',')
            if (res[mapKey]) {
                const list = res[mapKey]
                list.push(word)
                res[mapKey] = list
            } else {
                res[mapKey] = [word]
            }
        }
        return Object.values(res)
    }
}
