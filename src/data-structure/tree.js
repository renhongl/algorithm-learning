class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

export default class Tree {
  constructor() {
    this._root = null;
  }

  add(data, toData) {
    if (toData === null) {
      return (this._root = new Node(data));
    }
    let target = this.getNodeByData(toData, this.deepTravers);
    if (target !== null) {
      let newNode = new Node(data);
      newNode.parent = target.data;
      target.children.push(newNode);
    } else {
      console.log(`Can not add to ${toData}`);
    }
  }

  remove(data, toData) {
    let target = this.getNodeByData(toData, this.breadthTravers);
    if (target !== null) {
      let index = 0;
      for (let i = 0; i < target.children.length; i++) {
        if (data === target.children[i].data) {
          index = i;
          break;
        }
      }
      return target.children.splice(index, 1);
    } else {
      console.log(`Can not find ${data} from ${toData}`);
    }
  }

  deepTravers(callback) {
    const travers = node => {
      callback(node);
      for (let i = 0; i < node.children.length; i++) {
        travers(node.children[i]);
      }
    };
    travers(this._root);
  }

  breadthTravers(callback) {
    let queue = [];
    queue.push(this._root);
    while (queue.length > 0) {
      let curr = queue.shift();
      callback(curr);
      for (let i = 0; i < curr.children.length; i++) {
        queue.push(curr.children[i]);
      }
    }
  }

  containes(data, travers) {
    let contain = false;
    travers.call(this, node => {
      console.log(node.data, data);
      if (node.data === data) {
        contain = true;
      }
    });
    return contain;
  }

  getNodeByData(data, travers) {
    let result = null;
    travers.call(this, node => {
      if (node.data === data) {
        result = node;
      }
    });
    return result;
  }

  toString() {
    return JSON.stringify(this._root);
  }
}

// let tree = new Tree();
// tree.add(43, null);
// console.log(tree.toString());
// tree.deepTravers((node) => console.log('Deep Travers:', node.data));
// tree.breadthTravers((node) => console.log('Breadth Travers:', node.data));
// console.log('Containes 43:', tree.containes(43, tree.deepTravers));
// tree.add(65, 44);
// tree.add(65, 43);
// tree.add(111, 65);
// tree.add(322, 111);
// tree.add(453, 43);
// console.log(tree.toString());
// tree.remove(322, 111);
