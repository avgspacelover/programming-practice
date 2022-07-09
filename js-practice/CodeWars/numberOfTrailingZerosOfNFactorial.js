// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript



function zeros (n) {

    let count =0
 
    // Keep dividing n by powers of
    // 5 and update count
    for (let i = 5; n / i >= 1; i *= 5)
        count += Math.floor(n / i);
 
    return count;
}