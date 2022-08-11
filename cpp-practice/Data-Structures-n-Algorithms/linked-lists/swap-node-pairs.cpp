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
    ListNode* swapPairs(ListNode* head) {
             
        ListNode * dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prev = dummy;
        ListNode* curr= head;
        ListNode* nextPair ;
        ListNode* second;
        
        while(curr!=NULL && curr->next !=NULL){
            nextPair = curr->next->next;
            second = curr->next;
            
            
            second->next = curr;
            curr->next = nextPair;
            prev->next = second;
            
            prev= curr;
            curr = nextPair;
            
        }
        
        return dummy->next;
        
            
        
    }
};

/*
        ListNode* curr = head;
        ListNode* prev= NULL;
        ListNode* fut= NULL;
        
        int count=0;
        
        while(curr!= NULL && count<2){
            fut= curr->next;
            curr->next= prev;
            prev= curr;
            curr = fut;
            count++;
        }
        
       
        if(fut != NULL) {
            head->next = swapPairs(fut);
        }
        
        return prev;
 

*/