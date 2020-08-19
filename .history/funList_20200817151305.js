function indexOf(head, value) {
  return head.map((h, i) => {
      if(h === value) return i;
  });
  return -1;
}

let head = [1, 2, 3];
let value = 2;

console.log(indexOf(head, value))