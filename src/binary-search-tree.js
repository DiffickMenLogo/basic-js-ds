const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  root() {
    return this.root;
  }

  add(data) {
    const node = this.root;
    if (node === null){
      this.root = new Node(data);
      return;
    }else{
      const searchTree = (node) => {
        if (data < node.data){
          if (node.left === null){
            node.left = new Node(data);
            return;
          }else if(node.left !== null){
            return searchTree(node.left);
          }
        }else if(data > node.data){
          if (node.right === null){
            node.right = new Node(data);
            return;
          }else if(node.right !== null){
            return searchTree(node.right);
          }
        }else{
          return null;
        }
      };
      return searchTree(node);
    }
  }

  has(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data){
      if (data < current.data){
        current = current.left;
      }else{
        current = current.right;
      }
      if (current === null){
        return null;
      }
    }
    return current;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if(node === null){
        return null;
      }
      if(data === node.data){
        if(node.left === null && node.right === null){
          return null;
        }
        if(node.left === null){
          return node.right;
        }
        if(node.right === null){
          return node.left;
        }
        let temp = node.right;
        while(temp.left !== null){
          temp = temp.left;
        }
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
      }else if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }else{
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  min() {
    let current = this.root;
    while (current.left !== null){
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.root;
    while (current.right !== null){
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};