// https://leetcode.com/problems/diameter-of-binary-tree/


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
    int diameterOfBinaryTree(TreeNode* root) {
        if(root==NULL) return 0;
               
        int dia = 0;
            
        height(root, dia);
        
        return dia;
    }

    int height(TreeNode* root, int  &maxi ) {
        if(root==NULL) return 0;
        
        int left= height(root->left, maxi);
        int right= height(root->right, maxi);
        
        maxi= max(maxi,left + right) ;
        
        return 1 + max(left, right);
    }
    

// brute force
// int height(TreeNode* root){
//         if(root==NULL) return 0;
//         int x=height(root->left);
//         int y=height(root->right);
        
//         return max(x,y)+1;
//     }
//     int maxi=0;
//     int diameterOfBinaryTree(TreeNode* root) {
//         if(root==NULL) return 0;
        
//         int x=height(root->left);
//         int y= height(root->right);
        
//         maxi=max(maxi,x+y);
//         int left= diameterOfBinaryTree(root->left);
//         int right=diameterOfBinaryTree(root->right);
        
//         return maxi;
//     }
};