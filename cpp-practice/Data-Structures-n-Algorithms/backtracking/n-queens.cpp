// https://leetcode.com/problems/n-queens/

// https://www.youtube.com/watch?v=wGbuCyNpxIg&ab_channel=BackToBackSWE

#include <bits/stdc++.h>

class Solution {
    
    
public: 
    boolean isValid(int row, int col, vector <string> &board, int n){
        
        int duprow = row;
        int dupcol= col;
        
        while(row>=0 && col >=0){
            
            if(board[row][col] == 'Q') return false;
            
            row--;
            col--;
            
        }
        
        
        col = dupcol;
        row= duprow;
        
        while(col>=0){
            
            if(board[row][col] == 'Q') return false;
            
            col--;
        }
        
        
        while(row<n && col>=0){
            
            if(board[row][col] == 'Q') return false;
            
            row++;
            col--;
        }
        
        return true;
    }

    
public: 
    
    void solve(int col, vector <string> &board, &ans, int n){
        
        if(col==n){
            
            ans.push_back(board);
            return;
        }
        
        for(int row=0; row<n; i++){
            
            if(isValid(row, col, board, n)){
                
                board[row][col]= 'Q';
                solve(col+1, board, ans, n);
                board[row][col]= '.';
            }
        }
        
        
    }
    
    
public:
    vector<vector<string>> solveNQueens(int n) {
        
        vector <vector <string> > ans;
        vector<string> board(n);
        
        string s(n, ".");
        
        for(int i=0; i<=n; i++){
            board[i]= s;
        }
        
        solve(0, board, ans, n);
        
        return ans;
        
    }
};


// OPTIMISED - Using Hashing


class Solution {
    
    
public: 
    bool isValid(int row, int col, vector <string> &board, int n){
        
        int duprow = row;
        int dupcol= col;
        
        while(row>=0 && col >=0){
            
            if(board[row][col] == 'Q') return false;
            
            row--;
            col--;
            
        }
        
        
        col = dupcol;
        row= duprow;
        
        while(col>=0){
            
            if(board[row][col] == 'Q') return false;
            
            col--;
        }
        
        
        while(row<n && col>=0){
            
            if(board[row][col] == 'Q') return false;
            
            row++;
            col--;
        }
        
        return true;
    }

    
public: 
    
    void solve(int col, vector <string> &board, vector<int> &leftRow, vector<int> &lowerDiagonal, vector<int> &upperDiagonal, vector<vector <string>> &ans, int n){
        
        if(col==n){
            
            ans.push_back(board);
            return;
        }
        
//         for(int row=0; row<n; i++){
            
//             if(isValid(row, col, board, n)){
                
//                 board[row][col]= 'Q';
//                 solve(col+1, board, ans, n);
//                 board[row][col]= '.';
//             }
//         }
        
        
        for(int row=0; row<n; row++){
            if(leftRow[row]==0 && lowerDiagonal[row + col]==0 && upperDiagonal[n-1 + col-row ]==0){
               board[row][col]= 'Q';
                leftRow[row]=1;
                lowerDiagonal[row+ col]=1;
                upperDiagonal[n-1 + col-row]=1;
                
                solve(col+1, board,leftRow, lowerDiagonal, upperDiagonal, ans, n);
                board[row][col]= '.';
                leftRow[row]=0;
                lowerDiagonal[row+ col]=0;
                upperDiagonal[n-1 + col-row]=0;
                
                
                
            }
            
        }
        
    }
    
    
public:
    vector<vector<string>> solveNQueens(int n) {
        
        vector <vector <string> > ans;
        vector<string> board(n);
        vector <int> leftRow(n,0), lowerDiagonal(2*n-1, 0), upperDiagonal(2*n-1, 0);
        
        string s(n, '.');
        
        for(int i=0; i<=n; i++){
            board[i]= s;
        }
        
        solve(0, board,leftRow, lowerDiagonal, upperDiagonal, ans, n);
        
        return ans;
        
    }
};