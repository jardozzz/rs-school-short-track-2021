const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.list = {};
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.head === null) {
      this.head = node;
      this.list = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      this.head = node;
      currentNode.next = node;
    }
    this.length += 1;
    return this.list;
  }

  dequeue() {
    const a = this.list.value;
    if (this.list.next === null) {
      this.list = {};
      this.head = {};
    } else {
      this.list.value = this.list.next.value;
      this.list.next = this.list.next.next;
      this.length += -1;
    }
    return a;
  }
}

module.exports = Queue;
