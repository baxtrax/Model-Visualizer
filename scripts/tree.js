class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  addChild(node) {
    if (!(node instanceof TreeNode)) {
      throw new Error('Invalid node. Node must be an instance of TreeNode.');
    }

    node.parent = this;
    this.children.push(node);
  }

  removeChild(node) {
    const index = this.children.indexOf(node);
    if (index !== -1) {
      this.children.splice(index, 1);
      node.parent = null;
    }
  }

  getChild(index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error('Index out of bounds.');
    }

    return this.children[index];
  }

  getChildren() {
    return this.children;
  }

  getParent() {
    return this.parent;
  }

  getValue() {
    return this.value;
  }
}