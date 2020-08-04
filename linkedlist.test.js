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

let newList3 = new LinkedList();
newList3.insert(3);
newList3.append(8);
newList3.insert(2);
test('can append and insert', () => {
    expect(newList3.head.data).toBe(2);
    expect(newList3.tail.data).toBe(8);
});

let newList4 = new LinkedList();
newList4.insert(2);
newList4.insert(5);
newList4.append(29);
newList4.insert(7);
test('can keep track of size', () => {
    expect(newList4.size).toBe(4);
});

let newList5 = new LinkedList();
newList5.append(2);
newList5.append(8);
test('can return true if contains', () => {
    expect(newList5.contains(2)).toBe(true);
});

let newList6 = new LinkedList();
newList6.append(3);
newList6.append(7);
test('can return false if does not contain', () => {
    expect(newList6.contains(4)).toBe(false);
});
