/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if (this.last) {
      this.last.next = newNode;
      this.last = this.last.next;
    } else {
      this.last = newNode;
      this.first = this.last;
    }
    this.size++;
    console.log(this.first, this.last);
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }

    if (this.size === 1) {
      const val = this.first.val;
      this.first = null;
      this.last = null;
      this.size--;
      return val;
    }

    const val = this.first.val;
    this.first = this.first.next;
    this.size--;
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first ? this.first.val : null;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
