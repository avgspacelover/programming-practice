#include <bits/stc++.h>
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
    ListNode* temp;
    bool isPalindrome(ListNode* head) {
        temp = head;
        return check(head);
    }
    
    bool check(ListNode* p) {
        if (NULL == p) return true;
        bool isPal = check(p->next) & (temp->val == p->val);
        temp = temp->next;
        return isPal;
    }
};




class Solution {
public:
    bool isPalindrome(ListNode* head) {

        if(head == NULL|| head-> next == NULL){
            return true;
        }
        
        
        ListNode* slow= head;
        ListNode* fast=head;
        ListNode* dummy = head;
        while(fast->next != NULL && fast->next->next != NULL){

            fast= fast->next->next;
            slow= slow->next;
            
        }
        
        
        slow->next = reverseList(slow->next);
        slow= slow->next;
        
        while(slow != NULL){
            if(dummy->val != slow->val){
                return false;
            }
            dummy= dummy->next;
            slow= slow->next;
        }
        
        return true;
        
        
    }
    
    
     ListNode* reverseList(ListNode* head) {
       ListNode* newHead = NULL;
        while(head !=NULL){
            ListNode* next = head->next;
            head->next= newHead;
            newHead=head;
            head=next;
        }
        
        return newHead;
    }
      
};