export function abbrevName(name: string): string {
    let ans: string= '';
    let array: string[] =name.split('')
      array.map((item: string,index: number) => {
      if(index==0){
        ans+=item.toUpperCase();
      }
      if(item===' '){
        ans+="." + name[index+1].toUpperCase(); 
      }
      

    })
    return ans;
    
}


// export function abbrevName(name: string): string {
//   return name.split(" ").map((item)=> item[0].toUpperCase()).join('.')
// }