const LinkedList = require('./linkedlist');
const LinkedListNode = require('./linkedlistnode');

let newNode = new LinkedListNode(3, 10);
test('can create node', () => {
    expect(newNode.data).toBe(3);
});

let newList1 = new LinkedList();
newList1.insert(4);
newList1.insert(10);
test('can insert', () => {
    expect(newList1.tail.data).toBe(4);
    expect(newList1.head.data).toBe(10);
    expect(newList1.head.next.data).toBe(4);
});

let newList2 = new LinkedList();
newList2.append(5);
newList2.append(9);
newList2.append(6);
test('can append', () => {
    expect(newList2.tail.data).toBe(6);
    expect(newList2.head.data).toBe(5);
});

