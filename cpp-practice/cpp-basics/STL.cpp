#include <bits/stdc++.h>
using namespace std;

int main(){

    // pairs

    pair<int, int> p = {1,5} ;

    cout<<p.first<<p.second<<endl;

    pair <int, pair<int, int> > m = {1, {4,5}};

    cout<< m.second.first << m.second.second;

    pair<int, int> arr[] = { {1,3}, {3,4}, {4,5}} ; // array of pairs 

    cout<<arr[1].second ;


    // vectors

    vector<int> v;
    v.push_back(5);

    v.emplace_back(7);

    vector< pair <int, int> > vec;

    vec.push_back({3,4});
    vec.emplace_back(9,2); //works without curly braces

    vector<int> v1(5,100); // {100,100,100,100,100,100}

    vector<int> v6(7); //garbage value

    vector <int> v2(v1);


    vector<int>:: iterator it = v.begin(); // points to memory

    it++;

    cout<< *(it) << " ";

    it= it+2;
    cout<< *(it)<<" ";

    vector<int>::iterator it = v.end(); // points to right after last element

    vector<int>::iterator it = v.rbegin(); // begin will point to last elem, it will move bwd

    vector<int>::iterator it = v.rend(); // end will point one elem before first element, it will move fwd
    
    
    cout<<v[2]<< v.at(7);

    cout<< v.back(); //prints last element



    for( vector<int>::iterator it = v.begin(); it!= v.end(); it++){
        cout<< *(it)<<endl;
    }

    for( auto it = v.begin(); it != v.end(); it++){

    }
    
    for (auto it: v){
        cout<< it;
    }
    
    // begin is start inclusive but not end inclusive
    v.erase(v.begin()+1); // removes 2nd elem

    v.erase(v.begin() + 2, v.begin()+ 4); // removes from 3rd to 4th elem

    vector<int> f(2,100);

    f.insert(v.begin(),300); // insert at start

    f.insert(v.begin()+ 1, 2, 10); //inserts 2 10's after first elem

    cout<<f.size(); //return length

    vector <int> copy(2,50);

    f.insert(f.begin(), copy.begin(), copy.end());

    f.pop_back(); //removes from end

    f.swap(v); // v beomes f and vice versa

    f.clear(); // deletes f

    f.empty(); // boolean , checks if empty or not

    // lists

    // works same as vector

    list<int> ls;

    ls.push_back(4);
    ls.emplace_back(2);
    
    // special features
    ls.push_front(1); // very less time complexity
    ls.emplace_front();


    
    // deque

    //works same as vector

    deque<int> dq;
    dq.push_back(2);
    dq.push_front(1);
    dq.emplace_back(4);
    dq.emplace_front(0);

    dq.pop_back();
    dq.pop_front();
    

    // stack
    // has LIFO features

    stack<int> st;

    st.push(1);
    st.push(2);
    st.push(4);
    st.emplace(5); //same as push
    

    st.pop(); //throws out 5

    st.top(); // returns last added value, 4

    st. size();

    st.empty();

    // queue

    // works as FIFO

    queue<int> q;

    q.push(1);
    q.push(2);
    q.push(4);
    q.push(7);
    q.emplace(6);

    q.back() +=5; // adds 5 to last element and then stores result as last elem

    q.front(); // returns first value, i.e 1 

    q.pop(); //deletes from front

    q.front(); // return 2




    // priority queue
    // elem having largest value remains at top
    // max heap

    priority_queue<int> pq;

    pq.push(5);
    pq.push(8);
    pq.push(10);
    pq.push(1);
    pq.emplace(10);

    pq.top(); // returns 10

    pq.pop();


    // minimum heap

    priority_queue<int, vector<int>, greater<int> > pq;
    pq.push(5);
    pq.push(8);
    pq.emplace(6);

    pq.top(); // returns 5, the min value




    // SET

    // stores everything in sorted order
    // stores only unique value

    set<int> se;

    se.insert(1);
    se.insert(2);
    se.insert(2); // wont work
    se.insert(4);
    se.insert(3); // will store before 4

    // same vector func of begin(), end(), rbegin(), rend(), erase()


    auto it = se.find(2); //returns pointer to memory

    auto iti = se.find(6); // RETURNS A POINTER POINTING TO se.end()

    int cnt = se.count(3); // will either return 1 if elem exist or return 0 if not

    se.erase(it);
    se.erase(it, iti); // strt inclusive , not end inclusive
    
    auto it = se.lower_bound(2);

    auto it = se.upper_bound(3);

    // everything takes logarithimic time

    // MULTISET
    // sorted order but allows duplicate elements

    multiset<int> multi;

    multi.insert(1); 
    multi.insert(1); 
    multi.insert(1); 
    multi.insert(1); 
    multi.insert(1); 

    multi.erase(1); // WILL ERASE ALL 1'S

    int cnt = multi.count(1); // return no. of occ

    multi.erase(multi.find(1)); // will erase first occ
    multi.erase(multi.find(1), multi.find(1) + 2);


    // UNORDERED SET

    // stores only unique elements but in random order

    // time complexity is in const time
    // lower bound + upper bound fn doesnt work

    unordered_set<int> us;




    // map

    // stored in sorted order of keys, no duplicates

    map<int, int> mp;

    map<int , pair<int, int> > mpp;

    map< pair<int, int> , int > mppp;

    mp[1] = 2;

    mp.insert({3,2});
    
    mpp[12] = {9,0};

    mppp[{3,4}] = 10; 


    for(auto it: mp){

        cout<< it.first<< it.second;
    }

    
    auto it = mp.find(0);

    cout<< *(it).second;




    // multimap


    // you can store duplicate keys


    //unordered_map 
    // unique keys
    // not sorted, random order
    // const time complexity

    return 0;
}

int main(){

    vector<int> ar = {2,3,4,5,6,7,0};

    auto a = ar.begin();
    auto n = ar.end();

    sort(a, a+n);

    vector<int> vi = {2,3,4,5,6,7,0};


    sort(vi.begin(), vi.end());

    sort(a+2, a+4);

    sort(a, a+n, greater<int>);

    pair<int, int> a[] = {{1,2}, {3,4}, {9,0}}

    sort(a, a+n, comp);


    bool comp(pair<int,int> p, pair<int, int> m){
        
        if(p.second < m .second) return true;

        if(p.second > m.second) return false;

        if(p.second == m.second){
            if(p.first> m.first) return true;

            return false;
        }
    }
    return 0;
}