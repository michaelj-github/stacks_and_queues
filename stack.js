/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for (let val of vals) this.push(val);
  }

  // this stack builds to the right, push adds to the right and pop removes the rightmost value

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {

    let newNode = new Node(val);

    if (this.first) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }
    this.last = newNode;
    this.size++;

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    if (this.size < 1) throw new Error('Cannot pop from an empty stack');
    let returnNode = this.first;
    let lastNode = this.last;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return returnNode.val;
    }
    while (returnNode.next) {
      lastNode = returnNode;
      returnNode = lastNode.next;
    }

      this.last = lastNode;
      lastNode.next = null;
      this.size--;
      return returnNode.val;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size < 1) throw new Error('Cannot peek in an empty stack');

    let returnNode = this.first;
    let lastNode = this.last;
    if (this.size === 1) {
      return returnNode.val;
    }
    while (returnNode.next) {
      lastNode = returnNode;
      returnNode = lastNode.next;
    }

      this.last = lastNode;
      return returnNode.val;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
