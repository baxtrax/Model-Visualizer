  class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }

    addChild(node) {
      if (!(node instanceof TreeNode)) {
        throw new Error('Invalid node. Node must be an instance of TreeNode.');
      }

      this.children.push(node);
    }

    removeChild(node) {
      const index = this.children.indexOf(node);
      if (index !== -1) {
        this.children.splice(index, 1);
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

    getValue() {
      return this.value;
    }
  }