const LinkedList = require('./linkedlist');
const LinkedListNode = require('./linkedlistnode');

let newNode = new LinkedListNode(3, 10);
test('can create node', () => {
    expect(newNode.data).toBe(3);
});

let newList = new LinkedList();
newList.insert(4);
newList.insert(10);
test('can insert', () => {
    expect(newList.tail.data).toBe(4);
    expect(newList.head.data).toBe(10);
    expect(newList.head.next.data).toBe(4);
});

