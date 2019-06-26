class Node {
  constructor(value) {
    this._value = value;
    this.next = null;
  }

  getValue() {
    return this._value;
  }
}

export default class LinkedQue {
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

  shift() {
    if (this._size === 0) {
      return null;
    }
    let head = this._head;
    this._head = head.next;
    this._size--;
    return head.getValue();
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
