/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(root=this.root) {
    if (!root) return 0;

    const left = this.minDepth(root.left);
    const right = this.minDepth(root.right);

    return Math.min(left, right) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(root=this.root) {
    if (!root) return 0;

    const left = this.maxDepth(root.left);
    const right = this.maxDepth(root.right);

    return Math.max(left, right) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(root=this.root) {
    let globalMax = -1*Infinity;

    function maxSumHelper(root) {
      if (!root) return 0;

      let left = maxSumHelper(root.left);
      let right = maxSumHelper(root.right);
      
      let localMax = root.val + left + right;
      if (localMax > globalMax) globalMax = localMax;

      return Math.max(Math.max(left, right) + root.val, root.val);
    }


    maxSumHelper(root);
    return root ? globalMax : 0;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let lub = Infinity;

    if (!this.root) return null;

    const stack = [this.root];
    while (stack.length > 0) {
      const curr = stack.pop();
      console.log(curr);
      if (lowerBound < curr.val && curr.val < lub){
        lub = curr.val
      }
      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
    }
    return lub === Infinity ? null : lub;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
