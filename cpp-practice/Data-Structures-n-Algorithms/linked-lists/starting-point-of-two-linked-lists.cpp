/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        if(head==nullptr){
            return NULL;
        }
        ListNode*fast= head;
        ListNode*slow= head;
        bool flag= false;
        while(fast->next!=nullptr && fast->next->next!=nullptr){
            slow= slow->next;
            fast= fast->next->next;
            if(fast==slow){
                flag=true;
                break;
            }
        }

        if(flag==true) {

            ListNode*check = head;
            while(slow!=check){
                slow=slow->next;
                check=check->next;
            }

            return slow;
        }else {
            return NULL;

        }
    }
};
