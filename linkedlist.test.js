// const LinkedList = require('./linkedlist');
const LinkedListNode = require('./linkedlistnode');
let newNode = new LinkedListNode(3, 10);
test('can create node', () => {
    expect(newNode.data).toBe(3);
});
