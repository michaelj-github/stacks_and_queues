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
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for (let val of vals) this.push(val);
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

    let newNode = new Node(val);

    if (this.first) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }
    this.last = newNode;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size < 1) throw new Error('Cannot dequeue from an empty queue');

    let returnNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return returnNode.val;
    }
    let firstNode = this.first.next;
    this.first = firstNode;
    this.size--;
    return returnNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size < 1) throw new Error("Cannot peek in an empty queue");
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
