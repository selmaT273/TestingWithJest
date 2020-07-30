const LinkedListNode = require('./linkedlistnode');

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    insert(value) {
        this.size += 1;
        const newNode = new LinkedListNode(value, this.head);
        this.next = this.head;
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
}

module.exports = LinkedList;
