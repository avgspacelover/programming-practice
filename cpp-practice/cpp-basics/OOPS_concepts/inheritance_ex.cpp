//inheritance

#include <iostream>
using namespace std;



class A{
    public:
    void func() {
        cout<<"inherrited";
    }
};
//single inheritance[inherit public and prot section from A to B]
class B: public A{

};



//multiple inheritance
class C : public A, public B{
    public:
};
//multi level[a->b->c]
class D : private B{ //public stuff from b will go to private stuff of D
    public:
};

//hierarchial



int main() {
    D d;
    C c;
    B b;
    b.func();
    // c.func();
    return 0;
}