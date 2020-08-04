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

    append(value) {
        this.size += 1;

        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    contains(value){
        let current = this.head;
        if(current.data !== null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

module.exports = LinkedList;
