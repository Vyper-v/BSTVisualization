const { timeStamp } = require("console");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count + 1;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        current = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  inOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
  preOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}

const mytree = new BST(50);

let i = 0;
while (i < 100) {
  mytree.insert(Math.random() * 100);
  i++;
}
