

 Array Declarations

    int a[5];   declare
    int a[5]={2,3,4,5,6}; declare + initialise

    access array by a[0],a[1],a[2]....
    use a For loop to access at one go
  
   Structures

        Defining
            struct Rectangle{
                int length;  //data members
                int breadth;
            };
            struct student{
                int roll; //size-4
                char name[25]; //size-25
                char dept[10]; //size-10
                char address[50]; //size-50
            };
            Total size: Sum(size of all data members)

        Declaration
            void main(){
                struct rectangle r; //r is an object 
            }
        Declaration & Initialisation
            void main(){
                struct rectangle r={10,5}; //r is an object 
            }
        Accessing & modifying
            r.length=7;
            r.breadth= 10;
            int area = r.length* r.breadth;
            cout<<area;
            ----------
            struct card{
                int face;
                int shape;
                int color;

            };

            void main(){
                struct card c={1,0,0};
                struct card deck[52]={{1,0,0},{2,0,1}...};
                cout<<deck[0].face<<deck[1].shape...;
            }
 
    Pointers

        Pointers can access Heap memory unlike programs which are written in main sections or otherwise.

        Declarations
            int a=10; //pointer variable
            int *p  ; //address variable  declaration
            p= &a; //p has a's address in its memory  initialisation
            cout<<a; //10
            cout<<p; //200 (a's address)
            cout<<*p; // 10 dereferencing 

        Accessing Heap Memory
            for C language
                #include <stdlib.h>
                void main(){
                    int *p;
                    p=(int *)malloc(5*sizeof(int)); // int * is for typecasting void to int pointer data type
                }
            for CPP
                p= new int[5];

    Reference
        int a=10;
        int &r=a; //address of r and a are same
        cout<<a; //10
        cout<<r; //10
        r++: //11
        cout<<a; //11

    Pointer to a Structure
        struct rectangle{
            int length;
            int breadth;

        };

        void main(){
            struct rectangle r={10,5};
            struct rectangle *p = &r; //p points to the address of r
            r.length =15;
            (*p).length=15; //same operation
            p->length=15; //same operation
        }
        -----------
        void main(){
            struct rectangle *p;
            p=(struct rectangle *)malloc(sizeof(struct rectangle)); //in c language
            p->length=10;
            p->breadth=5;

        }

    Functions
        int add(int a, int b){ //these are parameters
            return int c= a+b;
        }
        void main(){
            cout<<add(5,7); //5 & 7 are actual arguments
        }

        Parameter Passing methods

            Pass(call) by Value

                void swap(int x, int y){
                    int temp;
                    temp=x;
                    x=y
                    y=temp;
                }
                void main(){
                    int a=5,b=10;
                    swap(a,b);
                    cout<<a<<b; //a=5 b=10 ; no swapping happens ,x & y interchanged but a & b didnt

                }

            Pass(call) by Address //only in cpp
            
                void swap(int *x, int *y){  // x& y are just referring to data in a & b as they are pointers
                    int temp;
                    temp= *x;
                    *x=*y
                    *y=temp;
                }
                void main(){
                    int a=5,b=10;
                    swap(&a,&b); // a& b send their addresses
                    cout<<a<<b; //a=10 b=5 ; x & y directly modify contents inside a & b

                }
            
            Pass(call) by Reference

                void swap(int &x, int &y){ // here x & y directly are meant as aliases to a & b, i.e directly store values in a & b
                    int temp;
                    temp=x;
                    x=y
                    y=temp;
                }
                void main(){
                    int a=5,b=10;
                    swap(a,b);
                    cout<<a<<b; //a=10 b=5 ; directly swapping of values

                }
    
    Arrays as Parameter
        void fun(int A[], int n){ // arrays cant be passed as values, they are always passed by address
            cout<<A[0];
        }

        void main(){
            int a[3]={2,3,4}
        }
        ------
        void fun(int *A){ //can point to char or array
            cout<<A[0];
        }

        void main(){
            int a[3]={2,3,4}
            fun(a);
        }
        ----
        int [] fun(int n){ //can point to char or array ; can even write * instead of []
            int *p;
            p= (int *).malloc(n*sizeof(int));
            return(p);
        }

        void main(){
            int *A;
            A= fun(5);
        }

    Structure as Parameter
        struct rectangle{
            int length;
            int breadth;

        };

        int area( struct rectangle r1){  
            r1.length++; //only r1's length changes not r's
            int ar=r1.length * r1.breadth; 
            return ar;
        }

        void main(){
            struct rectangle r={10,5};
            
            cout<<area(r);
        }
        ---------------------
        struct rectangle{
            int length;
            int breadth;

        };

        int area( struct rectangle *r1){  
            r1->length++; //r1's length changes r's length
            int ar=r1.length * r1.breadth; 
            return ar;
        }

        void main(){
            struct rectangle r={10,5};
            
            cout<<area(&r);
        }
        -----------
        struct test{
            int length[3];
            int breadth;

        };

        int area( struct test *r1){   // array are passed by value within a structure
            r1->length++; //r1's length changes r's length
            int ar=r1.length * r1.breadth; 
            return ar;
        }

        void main(){
            struct rectangle r={{10,5,6},4};
            
            cout<<area(&r);
        }

    Structure & Functions
        struct rectangle{
            int length;
            int breadth;

        };
        void initialise(struct rectangle *r,int l, int b){
            r-> length=l;
            r->breadth=b;
        }

        int area( struct rectangle *r1){  
            
            int ar=r1.length * r1.breadth; 
            return ar;
        }
        void changelength(struct rectangle *r,int l){
            r-> length=l;
            
        }

        void main(){
            struct rectangle r;
            initialize(&r,10,5);
            area(&r);
            changelength(&r,20)
        }

    CPP Classes & constructors
        class rectangle{
            private:
                    int length;
                    int breadth;

            public:
                    void initialise(int l, int b){
                        length=l;
                        breadth=b;
                    }

                    int area( ){  
                        
                        int ar=length * breadth; 
                        return ar;
                    }
                    void changelength(int l){
                        length=l;
                        
                    }
        };

        void main(){
            rectangle r;
            r.initialize(r,10,5);
            r.area();
            r.changelength(20)
        }
        ----------------------------
        class rectangle{
            private:
                    int length;
                    int breadth;

            public:
                    rectangle(){ //default constructor
                        length=1;
                        breadth=1;
                    }

                    rectangle(int l,int b){ //parametrised constructor
                        length=1;
                        breadth=1;
                    }

                    int area( ){  
                        
                        int ar=length * breadth; 
                        return ar;
                    }
                    int getlength(){ //accessor
                        return length;
                    }
                    void setlength(int l){ //mutator
                        length=l;
                        
                    }
                    int perimeter();

                    ~rectangle(); //destructor
        };
        
        rectangle:: rectangle(int l, int b){ // alternative ways using scope resolution
            length=l;
            breadth=b;
        }
        int rectangle::area(){
            int ar=length * breadth; 
            return ar;
        }
        int rectangle::perimeter(){
            return(2*(length + breadth));           
        }

        void main(){

            rectangle r;
            cout<<r.area();
            cout<<r.perimeter();
            cout<<r.setlength(20);
            cout<<r.getlength();
        }
    
    
    Template Classes
        class arithmetic {
            private:
                    int a;
                    int b;
            
            public:
                    arithmetic(int a, int b);
                    int add();
                    int sub();

        };

        arithmetic:: arithmetic(int a, int b){
            this->a=a;   // https://www.geeksforgeeks.org/this-pointer-in-c/
            this->b=b;
        }

        int arithmetic::add(){
            int c;
            c=a+b;
            return c;
        }
        int arithmetic::sub(){
            int c;
            c=a-b;
            return c;
        }

        //  we have to make the data type agnostic and such a class is called generic class so it can be used with varying data types without us having to repeat writing the class.

        template <class t>
        class arithmetic { // we have to decide which members should be generic in nature.
            private:
                    t a;
                    t b;
            
            public:
                    arithmetic(t a, t b);
                    t add();
                    t sub();

        };

        template <class t>
        arithmetic <t> :: arithmetic(t a, t b){
            this->a=a;   
            this->b=b;
        }
        
        template <class t>
        t arithmetic <t> ::add(){
            t c;
            c=a+b;
            return c;
        }
        
        template <class t>
        t arithmetic <t> ::sub(){
            t c;
            c=a-b;
            return c;
        }

        void main(){
            arithmetic <int> ar(10,5) //you can choose anything here within <>
            cout<<ar.add(); // will return int values

            arithmetic <float> ar(10.5,5.25) //you can choose anything here within <>
            cout<<ar.add(); // will return float values

        }






        


    



