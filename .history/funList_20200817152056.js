function indexOf(head, value) {
    if(head == null) return -1;
   
    let check = -1;
    head.map( (word, i)  => {
        if(word === value) check = i;
    });
    return check
  
}

// let head = [1, 2, 3];
// let value = 2;

let head = ['aaa', 'b', 'abc'];
let value = 'aaa';
console.log(indexOf(head, value))