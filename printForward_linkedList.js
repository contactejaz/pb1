'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};


/*
 * Complete the 'printForward' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST node as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */


/*
printForward: create a method which prints the value of each node until the tail

Input: node
Output: void

Example:
1 - 5 - 7 - 10
H            T

1
5
7
10

node: value, next
current: node

head
while current !== null
  print current.value
  current = current.next
wend  

*/

function printForward(node) {
    let current = node;
    let s='';
    
    while (current !== null){
      s = s + '  ' + current.data;
      current = current.next;
      
    }
  //  console.log ('printForward= ' + s);
  return ('printForward= ' + s);
}
//let nodeExample = [1, 5, 7, 10];
let linkedList = new SinglyLinkedList();
linkedList.insertNode(1);
linkedList.insertNode(5);
linkedList.insertNode(7);
linkedList.insertNode(10);

console.log(printForward(linkedList.head));


function main() {
    let node = new SinglyLinkedList();

    const nodeCount = parseInt(readLine().trim(), 10);

    for (let i = 0; i < nodeCount; i++) {
        const nodeItem = parseInt(readLine().trim(), 10);
        node.insertNode(nodeItem);
    }

    printForward(node.head);
}
