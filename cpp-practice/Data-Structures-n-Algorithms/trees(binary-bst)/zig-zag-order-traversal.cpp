// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/




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
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        
        vector<vector<int>>  result;
        
        if(root== NULL) return result;
            
        queue <TreeNode*> nodeQ ;
        nodeQ.push(root);
        bool LtoR = true;
        
        while(!nodeQ.empty()){
            int size = nodeQ.size();
            
            vector<int> row(size);
            
            for(int i=0; i<size; i++){
                TreeNode* node = nodeQ.front();
                nodeQ.pop();
                
                int index = LtoR ? i : (size-1-i);
                
                row[index] = node->val;
                
                if(node->left){
                    nodeQ.push(node->left);
                }
                
                if(node->right){
                    nodeQ.push(node->right);
                }
                
           }
                LtoR = !LtoR;
                result.push_back(row);
        }
        
        return result;
    }
};