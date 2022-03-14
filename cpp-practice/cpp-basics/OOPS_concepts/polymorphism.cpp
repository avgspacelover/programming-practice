//polymorphism
#include <iostream>
using namespace std;

//polymorphism-compile time
//function overloading-> func. with same names but different number/types of arguments.


class ac{

    public:
    void fun(){
        cout<<"I am a function with no argu"<<endl;
    }
    void fun(int x){
        cout<<"I am a function with int argu"<<endl;
    }
    void fun(double x){
        cout<<"I am a function with double argu"<<endl;
    }


};
//operator overloading
class complex{
    private:
    int real,imag;

    public:
    complex(int r, int i){
        real=r;
        imag=i;
    }
    complex();//def construct

    complex operator + (complex const &obj){
        complex res;
        res.imag= imag +obj.imag;
        res.real=real +obj.real;
        return res;
    }

    void display (){
        cout<<real<<" +i"<<imag<<endl;
    }
};
/*---------------------*/

//virtual function

class base{
    public:
    virtual void print(){ //NOTICE HERE
        cout<<"this is the base class's print function"<<endl;
    }

    void display(){
        cout<<"this is the base class's display function"<<endl;
    }

    void print(){
        cout<<"this is the base class's print function"<<endl;
    }
};

class derived: public base{
    public:
    void print(){
        cout<<"this is the derivedclass's print function"<<endl;
    }

    void display(){
        cout<<"this is the derived class's display function"<<endl;
    }

    void print(){
        cout<<"this is the derivedclass's print function"<<endl;
    }

};







int main(){
    ac obj;
    obj.fun();
    obj.fun(4);
    obj.fun(6.78);

    //operator overloading
    complex c1(12,7), c2(6,7);
    complex c3= c1+c2;
    c3.display();
    return 0;

    //virtual function

    base *baseptr;
    derived d;
    baseptr = &d;
    baseptr-> print();
    baseptr-> display();
}
// function overloading left













