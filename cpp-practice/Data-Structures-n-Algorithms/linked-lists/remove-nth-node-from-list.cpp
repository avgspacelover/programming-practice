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

#include <iostream>
#include <bits/stdc++.h>

/*
    When you move the fast pointer to nth node, 
    the remaining nodes to traverse is (size_of_linked_list - n). After that, 
    when you start moving slow pointer and fast pointer by 1 node each, 
    it is guaranteed that slow pointer will cover a distance of 
    (size_of_linked_list - n) nodes. And that's node we want to remove.

*/
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        
        ListNode* dummy = new ListNode();
        dummy->next = head;
        ListNode* fast = dummy;
        ListNode* slow = dummy;
        
        for(int i=1 ;i<=n; ++i){
            fast= fast->next;
        }
        
        while(fast->next !=NULL){
            
            fast= fast->next;
            slow=slow->next;
        }
        slow->next= slow->next->next;
        
        return dummy->next;
        
        
    }
};