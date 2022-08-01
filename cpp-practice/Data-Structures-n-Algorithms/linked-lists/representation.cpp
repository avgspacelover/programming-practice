#include <bits/stdc++.h>

using namespace std;

class Node {

    public:
        string val;
        Node* next;

        Node( string val){
            val= val;
            next= nullptr;
        }

};

void printList(Node* head){
    Node* current = head;

    while(current != nullptr){
        cout<< current->val << endl ;
        current= current->next ;
    }

};

void recursiveList(Node* head){
    Node* current = head;

    if(head== nullptr){
        return;
    }

    cout<<head->val<< endl;
    recursiveList(head->next);

}

int main(){

    Node a("A");
    Node b("B");
    Node c("C");

    a.next= &b;
    b.next= &c;

    printList(&a);
    recursiveList(&a);

    return 0;
}