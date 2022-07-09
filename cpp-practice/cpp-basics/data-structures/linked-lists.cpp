#include <iostream>
using namespace std;

class List;

class Node{

    int data;
    Node* next;

    public:
    Node(int val){
        data=val;
        next= NULL;

    }

    int getData(){
        return data;
    }

    friend void insertAtTail(Node* &head, int val);
    friend void inserAtHead(Node* head, int val);
    friend class List;

    // Node(int val): data(val),next(NULL){} initialisation List, alternative way

};

void insertAtHead(Node* &head, int val){

    Node* n = new Node(val);
    if(head==NULL){
        head=n;
    } else{
        n->next= head;
        head=n
    }
}
void insertAtTail(Node* &head, int val ){

    Node* n = new Node(val);
    if(head== NULL){
        head = n;
        return;
    }
    
    Node* temp = head; 

    while(temp-> next != NULL){
        temp= temp-> next;
    }
    temp->next = n;


}

bool list_search(Node* &head, int key){
    
    Node* temp = head;

    while(temp!=NULL){
        if(temp->data==key){
            return true;
        }

        temp=temp-> next;
    }
    return false;
}

void display(Node* &head){
    Node* temp =head;
    while(temp!=NULL){
        cout<<temp->data<<"->";

    }

}

class List{
    Node* head;
    Node* tail;

    public:

    Node* begin(){
        return head;
    }

    List():head(NULL),tail(NULL){};

    void push_front(int data){

        Node* n = new Node(data);

        if(head==NULL){
            head=tail=n;
            return;
        }

        else{
            n->next = head;      //object.property || when you have pointer to obj: (*obj).property ==> obj-> property
            head = n;

        }
    }


    void push_back(int data){
        
        Node* n = new Node(data);

        if(head== NULL && tail == NULL){
            tail = head= n;
        } else {

            tail->next = n;
        }
    }

    void print(Node* &head){

        Node* temp =head;
        while(temp!=NULL){
            cout<<temp->data<<"->";

        }


    }
};


int main(){

    List l;
    l.push_front(2);
    l.push_front(1);
    l.push_back(3);

    Node* head = l.begin();
    while(head!=NULL){
        cout<<head->getData()<<"->";
        head= head->next;
    }

    Node * head2 = NULL;
    insertAtTail(head2,1);
    insertAtTail(head2,2);

    insertAtTail(head2,3);

    display(head2);

    return 0;
}
