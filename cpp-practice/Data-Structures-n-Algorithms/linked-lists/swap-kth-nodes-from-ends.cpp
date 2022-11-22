#include<bits/stdc++.h>
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapNodes(ListNode* head, int k) {
     ListNode* nodect = head;
        int n=0;
        while(nodect!=nullptr){
            nodect= nodect->next;
            n++;
        }
        ListNode* first = head;
        ListNode* first_prev = nullptr;
        ListNode* second = head;
        ListNode* second_prev = nullptr;
 
         for(int i = 1; i<k; i++)
         {
             first_prev = first;
             first = first->next;
         }
 
        for(int i = 1; i<n-k+1; i++)
         {
             second_prev = second;
             second = second->next;
         }
 
		// 1 2 3 4 5         // 1 4 5            // 1 4 3 2 5
		// k =2
		// first-> 2
		// first_prev->1
		// second-> 4
		// second_prev->3
		
        if(first_prev != nullptr)
           first_prev->next = second;
 
       if(second_prev != nullptr)
          second_prev->next = first;
 
       ListNode* temp = first->next;
       first->next = second->next;
       second->next = temp;
 
       if(k==1)
          head = second;
       if(k == n)
           head = first;
 
       return head;

    }
};

/*
    ListNode* swapNodes(ListNode* head, int k) {
        ListNode* curr = head;
        
        ListNode* ptr1 = nullptr;
        ListNode* ptr2=null;

        int ct=k;
        while(curr!=nullptr){
           
            if(ptr2!=nullptr) ptr2=ptr2->next;
            if(--ct ==0){
                ptr1=curr;
                ptr2=head;
            }
            curr=curr->next;  
           

        }

        int temp= ptr1->val;
        ptr1->val= ptr2->val;
        ptr2->val= temp;
        return head;

    }
*/
