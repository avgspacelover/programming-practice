class Solution {
public:
    bool canArrange(vector<int>& arr, int k) {
        unordered_map <int, int> hash;

        for(auto val:arr){
            //int num = val%k;
            int rem=((val%k) +k)%k;
            hash[rem]++;

        }

        for(auto val: arr){

            int rem=((val%k) +k)%k;

            if(rem==0){
                int freq = hash[rem];
                if(freq%2==1){
                    cout<<rem<<" "<<freq;         
                    return false;
                }

            }else if(2*rem ==k) {
                int freq = hash[rem];
                if(freq%2==1){

                     
                     return false;
                }
            } else {
                int freq = hash[rem];
                int compleFreq = hash[k-rem];

                if(freq!= compleFreq){
          
                    return false;
                }


            }
        }


        return true;
    }
};