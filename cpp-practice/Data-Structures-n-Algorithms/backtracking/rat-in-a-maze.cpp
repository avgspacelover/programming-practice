#include <bits/stdc++.h>
using namespace std;


// class Solution{
    
//     void solve(int i, int j,vector <vector<int>> &a, int n, vector <string> &ans, string move, vector<vector <int>> &vis){

//         if(i==n-1 & j==n-1){
//             ans.push_back(move);
//             return;
//         }

//         // down
//         if(i+1 <n && !vis[i+1][j] && a[i+1][j]==1){
//             vis[i][j]=1;
//             solve(i+1, j,a,n,ans, move + 'D', vis);
//             vis[i][j]=0;
//         }

//         // left
//         if(j-1>=0 && !vis[i][j-1] && a[i][j-1]==1){
//             vis[i][j]=1;
//             solve(i, j-1,a,n,ans, move + 'L', vis);
//             vis[i][j]=0;
//         }

//         // right
//         if(j+1 <n && !vis[i][j+1] && a[i][j+1]==1){
//             vis[i][j]=1;
//             solve(i, j+1,a,n,ans, move + 'R', vis);
//             vis[i][j]=0;
//         }

//         // up
//         if(i-1>=0 && !vis[i-1][j] && a[i-1][j]==1){
//             vis[i][j]=1;
//             solve(i-1, j,a,n,ans, move + 'U', vis);
//             vis[i][j]=0;
//         }
//     }
    
//     public:
//         vector<string> findPath(vector<vector<int>> &m, int n) {
//             vector <string> ans;

//             vector <vector <int>> vis(n, vector<int> (n,0));

//             if(m[0][0]==1) solve(0,0,m,n,ans, "", vis);

//             return ans;
//         }
// };


// optimised

#include <bits/stdc++.h>
using namespace std;


class Solution{

    
    void solve(int i, int j,vector <vector<int>> &a, int n, vector <string> &ans, string move, vector <vector <int>> &vis, int di[] , int dj[]){

        if(i==n-1 && j==n-1){
            ans.push_back(move);
            return;
        }

        // down
        // if(i+1 <n && !vis[i+1][j] && a[i+1][j]==1){
        //     vis[i][j]=1;
        //     solve(i+1, j,m,n,ans, move + 'D', vis);
        //     vis[i][j]=0;
        // }

        // // left
        // if(j-1>=0 && !vis[i][j-1] && a[i][j-1]==1){
        //     vis[i][j]=1;
        //     solve(i, j-1,m,n,ans, move + 'L', vis);
        //     vis[i][j]=0;
        // }

        // // right
        // if(j+1 <n && !vis[i][j+1] && a[i][j+1]==1){
        //     vis[i][j]=1;
        //     solve(i, j+1,m,n,ans, move + 'R', vis);
        //     vis[i][j]=0;
        // }

        // // up
        // if(i-1>=0 && !vis[i-1][j] && a[i-1][]=1){
        //    vis[i][j]=1;
        //    solve(i-1, j,m,n,ans, move + 'U', vis);
        //    vis[i][j]=0;
        // }

        /*
            pos D L R U
            i  +1 0 0 -1
            j  0 -1 +1 0
        */

        string dir= "DLRU";

        for(int ind=0;ind<4; ind++){
            int nexti = i + di[ind];
            int nextj = j + dj[ind];

            if(nexti>=0 && nextj>=0 &&  nexti<n && nextj<n && !vis[nexti][nextj] && a[nexti][nextj]==1){
                
                vis[nexti][nextj]=1;
                solve(nexti, nextj, a, n, ans, move + dir[ind], vis, di, dj);
                vis[nexti][nextj]=0;

            }
        }

    }

    
    
    public:
        vector<string> findPath(vector<vector<int>> &m, int n) {
            vector <string> ans;
            int di= [1,0,0,-1];
            int dj= [0,-1,1,0];

            vector <vector <int>> vis(n, vector<int> (n,0));

            if(m[0][0]==1) solve(0,0,m,n,ans, "", vis, di, dj);

            return ans;
        }
};


