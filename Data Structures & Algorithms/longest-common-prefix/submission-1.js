class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let l = ""
        let i = 0
        while (true) {
            for (let j = 0; j < strs.length; j++) {
                if (!l[i]) {
                    // set first char
                    l = l + strs[j][i]
                }
                if (l[i] != strs[j][i]) {
                    return l.slice(0, i)
                }
            }
            i = i + 1
        }

    }
}
