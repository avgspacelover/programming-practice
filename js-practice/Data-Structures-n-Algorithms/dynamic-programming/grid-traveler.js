const gridTraveler = (row, col, memo={}) => {
    const key = row + ',' + col;
    const alt= col + ',' + row;
    if(key in memo) return memo[key];
    if(alt in memo) return memo[alt];
    if(row==1 & col==1) return 1;
    if (row==0 || col==1) return 0;

    memo[key] = gridTraveler(row-1,col, memo) + gridTraveler(row,col-1, memo);

    return memo[key];

}

console.log(gridTraveler(25,25));