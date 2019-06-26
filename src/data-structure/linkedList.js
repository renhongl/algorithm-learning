class Node {
  constructor(value) {
    this._value = value;
    this.next = null;
  }

  getValue() {
    return this._value;
  }
}

export default class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  getSize() {
    return this._size;
  }

  toString() {
    if (this._head === null) {
      return "";
    }
    let result = "";
    let curr = this._head;
    while (curr !== null) {
      result += curr.getValue() + ", ";
      curr = curr.next;
    }
    return result;
  }

  append(value) {
    if (this._head === null) {
      this._head = new Node(value);
      this._size++;
      return;
    }
    let curr = this._head;
    while (curr) {
      if (curr.next === null) {
        curr.next = new Node(value);
        this._size++;
      }
      curr = curr.next;
    }
  }

  unshift(value) {
    if (this._head === null) {
      this._head = new Node(value);
      this._size++;
      return;
    }
    let currHead = this._head;
    this._head = new Node(value);
    this._head.next = currHead;
    this._size++;
  }

  insert(index, value) {
    if (index < 0 || index > this._size) {
      return console.log("Index out of range");
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this._size) {
      return this.append(value);
    }
    let curr = this._head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    let newNode = new Node(value);
    newNode.next = curr.next;
    curr.next = newNode;
    this._size++;
  }

  pop() {
    if (this._size === 0) {
      return null;
    }
    let curr = this._head;
    let before = null;
    for (let i = 0; i < this._size - 1; i++) {
      before = curr;
      curr = curr.next;
    }
    before.next = null;
    this._size--;
    return curr.getValue();
  }

  shift() {
    if (this._size === 0) {
      return null;
    }
    let head = this._head;
    this._head = head.next;
    this._size--;
    return head.getValue();
  }

  remove(index) {
    if (index < 0 || index >= this._size) {
      return console.log("Index out of range");
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this._size - 1) {
      return this.pop();
    }
    let curr = this._head;
    let before = null;
    for (let i = 0; i < index; i++) {
      before = curr;
      curr = curr.next;
    }
    before.next = curr.next;
    this._size--;
    return curr.getValue();
  }

  getItem(index) {
    if (this._size === 0) {
      return null;
    }
    if (index < 0 || index >= this._size) {
      return console.log("Index out of range");
    }
    if (index === 0) {
      return this._head.getValue();
    }
    let curr = this._head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.getValue();
  }
}

// let l = new LinkedList();
// console.log(l.toString());
// l.insert(0, 43);
// l.insert(0, 61);
// l.insert(0, 65);
// l.insert(0, 67);
// l.insert(0, 143);
// l.insert(0, 261);
// l.insert(0, 365);
// l.insert(0, 467);
// console.log(l.toString());
// console.log(l.getSize());
// console.log(l.pop());
// console.log(l.toString());
// console.log(l.shift());
// console.log(l.toString());
// console.log(l.getSize());
// console.log(l.remove(5));
// console.log(l.toString());
// console.log(l.getItem(3));
