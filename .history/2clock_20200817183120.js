/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
*/

const past = (h, m, s) => {
    if(h > 0 && h < 24) {
        h = h * 24;
    } 
    if(m > 0 && m < 60) {
        m = m * 60 * 1000;
    }
    
    if (s > 0 && s < 60) {
        s = s * 1000;
    }
    return h + m + s;
} 
// let h = 0;
//     m = 1;
//     s = 1;
let h = 1;
m = 1;
s = 1;
console.log(past(h, m, s))