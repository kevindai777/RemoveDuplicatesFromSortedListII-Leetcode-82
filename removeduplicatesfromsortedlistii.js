//Objective is to remove all duplicates from a sorted linked list

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(1)
head.next.next = new Node(2)
head.next.next.next = new Node(2)
head.next.next.next.next = new Node(3)


//O(n) solution that skips over all duplicate nodes during the traversal

let newNode = new Node(-1)
newNode.next = head 
let temp = newNode 

while (head && head.next) {
    //Skip over ALL duplicate nodes
    if (head.val == head.next.val) {
        while (head && head.next && head.val == head.next.val) {
            head = head.next
        }
        head = head.next 
        temp.next = head
    } else {
        temp = temp.next 
        head = head.next
    }
}

return newNode.next