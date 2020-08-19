/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
*/

const past = (h, m, s) => {
    let hour = 1,
         min = 1, 
         sec = 1;
    if(h > 0 && h < 24) {
        hour = h;
    } 
    if(m > 0 && m < 60) {
        min = m * 60 * 1000;
    }
    
    // if (s > 0 && s < 60) {
    //     sec = s * 1000;
    // }
    return hour * min;
} 

console.log(past(0,1,1))