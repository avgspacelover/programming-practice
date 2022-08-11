// https://leetcode.com/problems/odd-even-linked-list/

#include <iostream>
#include <bits/stdc++.h>






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
    ListNode* oddEvenList(ListNode* head) {
        
        if(!head) return head;
        int count=0;
        
        ListNode* end = head;
        while(end->next !=NULL){
            end= end->next;
            count++;
        }
        
        count= count&1 ? (count/2)+1 : count/2;

        ListNode* temp = head;
        while(count--){
            end->next= temp->next;
            temp->next= temp->next->next;
            end->next->next = NULL;
            
            temp = temp->next;
            end= end->next;
            
        }
        
        return head;
    }
};