class Solution {
    public boolean canArrange(int[] arr, int k) {

         int[] frequency = new int[k];
        for(int num : arr){
            num %= k;
            if(num < 0) num += k;
            frequency[num]++;
        }
        if(frequency[0]%2 != 0) return false;
        
        for(int i = 1; i <= k/2; i++)
            if(frequency[i] != frequency[k-i]) return false;
			
        return true;
//         HashMap <Integer, Integer> hash = new HashMap<>();

//         for(int val:arr){
//             //int num = val%k;
//             int rem=((val%k) +k)%k;
            
//             int origFreq= hash.getOrDefault(rem,0);
//             hash.put(rem, origFreq+1);


//         }

//          for(int val: arr){
        
//                     int rem=((val%k) +k)%k;
        
//                     if(rem==0){
//                         int freq = hash.get(rem);
//                         if(freq%2==1){
//                            // cout<<rem<<" "<<freq;         
//                             return false;
//                         }
        
//                     }else if(2*rem ==k) {
//                         int freq = hash.get(rem);
//                         if(freq%2==1){
//                             //cout<<rem<<" "<<freq;
                             
//                              return false;
//                         }
//                     } else {
//                         int freq = hash.get(rem);
//                         int compleFreq = hash.get(k-rem);
        
//                         if(freq!= compleFreq){
                            
//                                 //cout<<rem<<" "<<freq;             
//                                 return false;
//                         }
        
        
//                     }
//                 }
//         return true;

     }
 }