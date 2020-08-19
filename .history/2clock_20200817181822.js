/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
*/

const past = (h, m, s) => {
    if(h > 0 && h < 24) {
        h = h;
    } 
    if(m > 0 && m < 60) {
        m = m * 60;
    }
    
    if (s > 0 && s < 60) {
        s = s * 60;
    }
} 

console.log(past(0,1,1))