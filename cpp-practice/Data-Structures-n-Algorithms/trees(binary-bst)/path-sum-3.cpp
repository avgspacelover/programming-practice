// https://leetcode.com/problems/path-sum-iii/

// imp solution: https://leetcode.com/problems/path-sum-iii/discuss/779575/C%2B%2B-3-DFS-Based-Solutions-Explained-and-Compared-up-to-~100-Time-~75-Space






/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

class Solution {
public:
    int res = 0, sum;
    int seen[1001];
    void dfs(TreeNode* root, long long partialSum = 0, int pos = 1) {
        // updating partialSum with the current node
        partialSum += root->val;
        // checking if we already found an interval summing up to that
        for (int i = 0; i < pos; i++) if (seen[i] == partialSum - sum) res++;
        // updating seen
        seen[pos] = partialSum;
        // searching potential left and right branches
        if (root->left) dfs(root->left, partialSum, pos + 1);
        if (root->right) dfs(root->right, partialSum, pos + 1);
    }
    int pathSum(TreeNode* root, int targetSum) {
        sum = targetSum;
        // seen set with initial value 0 will help us match from the root
        seen[0] = 0;
        if (!root) return res;
        dfs(root);
        return res;
    }
};


