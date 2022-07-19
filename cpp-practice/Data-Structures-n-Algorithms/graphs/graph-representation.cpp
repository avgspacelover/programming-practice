#include <bits/stdc++.h>

using namespace std;

int main(){

    int n,m; // # of nodes, # of edges

    cin>>n>>m;

    int adj[n][m]; // adjacency matrix


    for(int i=0; i<m; i++){ // for every edge
        int u,v;
        cin>>u>>v;
        adj[u][v]=1;
        adj[v][u]=1;
    }

    return 0;
}


int main(){

    int n,m; // # of nodes, # of edges

    cin>>n>>m;

    vector <int> adj[n +1]; // adjacency list

    for(int i=0; i<m; i++){ // for every edge
        int u,v,wt;
        cin>>u>>v>>wt;
        adj[u].push_back({v,wt});
        adj[v].push_back({u,wt}); // only if its bi directed
    }

    return 0;
}


