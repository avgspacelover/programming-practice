// https://leetcode.com/problems/balanced-binary-tree/




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
    
    int balancedTreeCheck( TreeNode* node){
        if(node== NULL) return 0;
        
        int leftht = balancedTreeCheck(node->left);
        
        if(leftht == -1) return -1;
        
        int rightht = balancedTreeCheck(node->right);
        
        if(rightht == -1) return -1;
        
        if(abs(leftht - rightht) > 1) return -1;
        
        return max( leftht, rightht) + 1 ;
    }
    
    
    bool isBalanced(TreeNode* root) {
        
        return balancedTreeCheck( root) != -1 ;
    }
    
};