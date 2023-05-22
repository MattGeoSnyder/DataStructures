/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    const stack = [this.root];
    let total = 0;
    while (stack.length > 0) {
      const curr = stack.pop();
      console.log(curr);
      total += curr.val;
      for (let child of curr.children) {
        stack.push(child);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    const stack = [this.root];
    let count = 0;
    while (stack.length > 0) {
      const curr = stack.pop();
      if (curr.val % 2 === 0) count++;
      for (let child of curr.children) {
        stack.push(child);
      }
    }
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    const stack = [this.root];
    let count = 0;
    while (stack.length > 0) {
      const curr = stack.pop();
      if (curr.val > lowerBound) count++;
      for (let child of curr.children) {
        stack.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
