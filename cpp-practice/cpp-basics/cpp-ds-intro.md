    Static & Dynamic Memory Allocation

        - A program is first brought into or loaded in main memory or the "code section"
        - when a variable is declared-> memory allocated in Stack. decided at compile time [Static MA]
        - Heap Memory is treated as a resource
        - Heap memory cant access directly 
        - Pointers are used to access Heap Memory
        -  int p*; p= new int[5]; This will allocate array of size 5 in Heap
        - delete []p; p=null; deletes heap memory

    Data Structures
        - Physical
            - Array [static], created in stack
            - Linked List [dynamic], created in heap

        - Logical
            - Linear
                - Stack [LIFO]
                - Queue [FIFO]
            - Non-Linear
                - Tree
                - Graph
            - Tabular
                - Hash Table
    
    Abstract Data Type
        - Representation of data
        - Operation of data
        - Combining them they can become a **class**
        - These are stored in array/linked list
        - abstraction from internal manipulation

    Time & Space Complexity
        - accesing a list takes time directly depending on # of elements on a list
        - That makes it O(n) for an array of O(n)
        - Matching a single element with rest of elements, this will cause it to be n processes n times, meaning O(n^2)
        - if we split a list by 2 successively until we reach a single element then the time consumed is of the order of O(log(n))
