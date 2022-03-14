#include <iostream>
#include <string>
using namespace std;

class student{
    string name;


    public:

    int age;
    bool gender;
    student(){
        cout<<"def constructor"<<endl;
    };// default constructor- Does Shallow Copy

  student(string s, int a, int g){
      cout<<"parameterised constructor"<<endl;
      name=s;
      age=a;
      gender=g;
  } //parameterised constructor- Does deep copy

  student(student &a){
      cout<<"copy constructor"<<endl;
      name= a.name;
      age= a.age;
      gender= a.gender;
  } //copy constructor

  ~student(){
      cout<<"destructor called"<<endl;
  } //destructor

   



    void setName( string s){
        name=s;
    }
     void getName( string s){
        cout<<name;
    }

    void printInfo(){
        cout<<"Name= ";
        cout<<name<<endl;
        cout<<"age= ";
        cout<<age<<endl;
        cout<<"gender= ";
        cout<<gender<<endl;

    }

    bool operator == (student &a) {
        if(name==a.name && age==a.age && gender=a.gender){
            return true;
        }else{
            return false;
        }
    }//operator overloading concept






    
};

int main(){

    student arr[3];
    for(int i=0;i<3;i++){
        string s;
        cout<<"Name= ";
        cin>>s;
        arr[i].setName(s);
        
        
        cout<<"age= ";
        cin>>arr[i].age;
        
        cout<<"gender= ";
        cin>>arr[i].gender;
        
        
    }

    for(int i=0;i<3;i++){
        arr[i].printInfo();
    }

    student a("siddharth",21 ,1);
    a.printInfo();
    student b;

    student c = a; //copy constructor 

    if(c==a){
        cout<<"same"<<endl;
    } else{
        cout<<"not same";
    }

    return 0;
}