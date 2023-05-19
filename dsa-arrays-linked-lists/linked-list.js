/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.head) {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    } else {
      this.head = new Node(val);
      this.tail = this.head;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;

    if (this.length === 1) {
      this.tail = this.head;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let val;
    if (this.length === 1) {
      val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      const curr = this.head;
      while (curr.next.next) {
        curr = curr.next;
      }
      val = curr.next.val;
      curr.next = null;
      this.tail = curr;
      this.length--;
    }
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let val = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr.next;
    }
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
      return;
    }

    if (idx >= this.length) {
      this.push(val);
      return;
    }

    const newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < idx-1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let val;

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    let curr = this.head;
    for (let i = 0; i < idx - 1; i++) {
      curr = curr.next;
    }

    val = curr.next ? curr.next.val : null;
    curr.next = curr.next ? curr.next.next : null;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }

    let total = 0;
    let curr = this.head;
    while (curr) {
      total += curr.val;
      curr = curr.next;
    }
    return total/this.length;
  }
}

module.exports = LinkedList;
