const LinkedList = require('./linkedlist');
const LinkedListNode = require('./linkedlistnode');


let newNode = new LinkedListNode(3, 10);
test('can create node', () => {
    expect(newNode.data).toBe(3);
});

let newList = new LinkedList([2, 5, 7]);
newList.insert(4);

test('can insert', () => {
    expect(newList.head).toBe(4);
});

