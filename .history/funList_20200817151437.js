function indexOf(head, value) {
    if(head == null) return -1;
    head.map((h, i) => {
        if(h === value) {
            return i;
        }
    });
  
}

let head = [1, 2, 3];
let value = 2;

console.log(indexOf(head, value))