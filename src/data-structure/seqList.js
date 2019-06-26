export default class SequenceList {
  constructor() {
    this._list = [];
  }

  append(value) {
    this._list[this._list.length] = value;
  }

  // 插入算法：
  // 增加数组长度
  // 从插入位置到末尾，倒序遍历，将前一个值赋值给后一个值
  // 将插入位置的值，替换成给定的值
  insert(index, value) {
    if (this._list.length === 0) {
      return (this._list = [value]);
    }
    if (this._list.length === index) {
      return (this._list[this._list.length] = value);
    }
    if (this._list.length < index) {
      return;
    }
    for (let i = 0; i < this._list.length; i++) {
      if (i === index) {
        for (let j = this._list.length; j >= i; j--) {
          this._list[j] = this._list[j - 1];
        }
        this._list[index] = value;
      }
    }
  }

  getLength() {
    return this._list.length;
  }

  clear() {
    this._list = [];
  }

  isEmpty() {
    return this._list.length === 0;
  }

  toString() {
    let result = "";
    for (let i = 0; i < this._list.length; i++) {
      result += this._list[i] + ", ";
    }
    return result;
  }

  getItem(index) {
    if (index < 0 || index >= this._list.length) {
      return null;
    }
    return this._list[index];
  }

  locate(value) {
    for (let i = 0; i < this._list.length; i++) {
      if (this._list[i] === value) {
        return i;
      }
    }
    return -1;
  }

  pop() {
    let last = this._list[this._list.length - 1];
    this._list.length = this._list.length - 1;
    return last;
  }

  // 删除算法：
  // 从给定位置，到数组最后，顺序遍历，将后一个值赋值给前一个值
  remove(index) {
    if (index === this._list.length - 1) {
      let last = this._list[this._list.length - 1];
      return (this._list.length = this._list.length - 1);
    }
    for (let i = 0; i < this._list.length; i++) {
      if (i === index) {
        for (let j = i; j < this._list.length - 1; j++) {
          this._list[j] = this._list[j + 1];
        }
        this._list.length = this._list.length - 1;
        return this._list;
      }
    }
    return this._list;
  }
}
