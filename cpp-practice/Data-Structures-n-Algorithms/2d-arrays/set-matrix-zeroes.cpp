#include <bits/stdc++.h>
#include <vector>

class Solution {
public:
  
    void setZeroes(vector<vector<int> > &matrix) {
    int col0 = 1, rows = matrix.size(), cols = matrix[0].size();

    for (int i = 0; i < rows; i++) {
        if (matrix[i][0] == 0) col0 = 0;
        for (int j = 1; j < cols; j++)
            if (matrix[i][j] == 0)
                matrix[i][0] = matrix[0][j] = 0;
    }

    for (int i = rows - 1; i >= 0; i--) {
        for (int j = cols - 1; j >= 1; j--)
            if (matrix[i][0] == 0 || matrix[0][j] == 0)
                matrix[i][j] = 0;
        if (col0 == 0) matrix[i][0] = 0;
    }
}
};

/*

  void setZeroes(vector<vector<int>>& matrix) {
    vector<int> col(matrix.size(),0);
    vector<int> row(matrix[0].size(),0);    
    
    for(int i=0; i<matrix.size(); i++){
            for(int j=0; j<matrix[0].size(); j++){
                if(matrix[i][j]==0){
                    col.at(i)=-1;
                    row.at(j)=-1;
                }
            }
        }

        for(int i=0; i<matrix.size(); i++){
            for(int j=0; j<matrix[0].size(); j++){
                if(row[j]==-1 || col[i]==-1){
                    matrix[i][j]=0;
                }
            }
        }

    }
*/
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        
        for(int i=0; i<matrix.size(); i++){

            for(int j=0; j<matrix[0].size(); j++){

                if(matrix[i][j]== 0){
                    int constRow=i;
                    for(int k=0; k<matrix[i].size(); k++){
                       if(matrix[constRow][k]!=0){ 
                           matrix[constRow][k]=-1;
                       }
                    }

                     int constCol=j;
                    for(int k=0; k<matrix.size(); k++){
                       if(matrix[k][constCol]!=0){
                        matrix[k][constCol]=-1;

                       }

                    }
                }
            }
        }

          for(int i=0; i<matrix.size(); i++){

            for(int j=0; j<matrix[0].size(); j++){

                if(matrix[i][j]== -1){
                    matrix[i][j]=0;

                }
            }
        }

    }
};


class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
    vector<int> col(matrix.size(),0);
    vector<int> row(matrix[0].size(),0);    
    
    for(int i=0; i<matrix.size(); i++){
            for(int j=0; j<matrix[0].size(); j++){
                if(matrix[i][j]==0){
                    col.at(i)=-1;
                    row.at(j)=-1;
                }
            }
        }

        for(int i=0; i<matrix.size(); i++){
            for(int j=0; j<matrix[0].size(); j++){
                if(row[j]==-1 || col[i]==-1){
                    matrix[i][j]=0;
                }
            }
        }

    }
};