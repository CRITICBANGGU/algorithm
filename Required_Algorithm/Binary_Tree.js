class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  setRoot(data) {
    this.root = new Node(data);
  }
  getRoot() {
    return this.root;
  }
  insertLeftLastNode(node) {
    if (this.isEmpty()) {
      console.log("this tree is Empty");
      return;
    }
    let current;
    current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    current.left = node;
  }
  insertRightLastNode(node) {
    if (this.isEmpty()) {
      console.log("this tree is Empty");
      return;
    }
    let current;
    current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    current.right = node;
  }

  searchTree(node, data) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
        return;
      } else if (node.left !== null) {
        return this.searchTree(node.left, data);
      }
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new Node(data);
        return;
      } else if (node.right !== null) {
        return this.searchTree(node.right, data);
      }
    } else {
      return null;
    }
  }

  inserNode(data) {
    if (this.getRoot() === null) {
      this.setRoot(data);
      return;
    } else {
      return this.searchTree(this.getRoot(), data);
    }
  }
}

const tree = new BinaryTree();

tree.inserNode(3);
tree.inserNode(1);
tree.inserNode(2);
tree.inserNode(5);
tree.inserNode(4);
tree.inserNode(0);
tree.inserNode(6);

console.log(tree);
