/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */

class Solution {

/*    
    4 approaches
    1) compare every node of list 1 with list 2 to check equality of nodes
        T(c)-> O(n*m) S(c)-> O(1)
    
    2) Hash list 1 and iterate list 2 and check for node equality.
        T(C)-> O(n) S(c)-> O(n);
    
    3) iterate both lists 1 & 2 to count their sizes; 
        set both lists to head again
        increment longer list ptr by the difference. 
        iterate both togethers & check for equality.
        T(C)-> O(n+m) S(c)-> O(1);
    
    4) iterate both lists, which ever ptr hits null first, set it to the head of
        the other list and keep iterating both and check for equality
*/

public:

// approach #2

/*
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        unordered_map<ListNode*, int> hash;
        ListNode*d1= headA;
        while(d1!=nullptr){
            hash[d1]= d1->val;
            d1=d1->next;
        }
        ListNode*d2= headB;
        while(d2!=nullptr){
            if(hash[d2]){
                return d2;
            }
            d2=d2->next;
        }

        return NULL; 
    }

*/

// approach #3  
/*
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        
        ListNode*d1= headA;
        ListNode*d2= headB;
        int ct1=0;
        int ct2=0;
        while(d1!=nullptr){
            ct1++;
            d1=d1->next;
        }

        while(d2!=nullptr){
            ct2++;
            d2=d2->next;
        }

        int diff;

        bool firstIsLonger ;
        if(ct1>=ct2){
            diff= ct1-ct2;
            firstIsLonger=true ;

        }else{
            diff= ct2-ct1;
            firstIsLonger=false ;

        }
        d1= headA;
        d2= headB;
        if(firstIsLonger==true){
            int k=diff;
            while(k>0){
                d1=d1->next;
                k--;
            }

        }else{
            int k=diff;
            while(k>0){

                d2=d2->next;
                k--;
            }
        }
        while(d1!=nullptr && d2!=nullptr ){

            if(d1==d2){
                return d1;
            }

            d1=d1->next;
            d2=d2->next;
        }

        return NULL;
    }

*/

// approach 4

    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode*d1= headA;
        ListNode*d2= headB;

        while(d1!=d2){

            if(d1==nullptr){
                d1=headB;
                d2= d2->next;

            }else if(d2==nullptr){
                d2=headA;
                d1= d1->next;

            }else {
                d1= d1->next;

                d2= d2->next;
            }


        }
        return d1;
    }


};
