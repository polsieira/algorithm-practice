// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.unshift(element);
  }

  remove() {
    return this.data.pop();
  }
}

// Unshift and shift make the whole array shift sideways (by adding and removing items from the beginning).

// Push and pop do NOT make the array shift sideways(because they add and remove items at the end).

// In each of those pairs(push / pop and unshift / shift), the longer word makes the array longer.

module.exports = Queue;
