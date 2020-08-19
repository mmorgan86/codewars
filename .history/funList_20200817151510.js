function indexOf(head, value) {
    if(head == null) return -1;
l   
    let check = head.map((h, i) => {
        if(h === value) {
            return i;
        }
    });
    return check;
  
}

let head = [1, 2, 3];
let value = 2;

console.log(indexOf(head, value))