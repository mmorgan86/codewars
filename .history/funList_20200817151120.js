function indexOf(head, value) {
  return head.map((h, i) => h === value ? i : -1);
}

let head = [1, 2, 3];
let value = 2;

console.log(indexOf(head, value))